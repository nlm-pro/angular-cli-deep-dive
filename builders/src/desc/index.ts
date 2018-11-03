import { Builder, BuilderConfiguration, BuilderContext, BuildEvent } from '@angular-devkit/architect';
import { Observable, from, bindNodeCallback, of } from 'rxjs';
import { map, concatMap, catchError, tap } from 'rxjs/operators';
import { DescriptorBuilderSchema } from './schema';
import { getSystemPath } from '@angular-devkit/core';
import * as path from 'path';
import * as fs from 'fs';

interface NodeDependencies {
  [key: string]: string;
}

export interface BuildDescription {
  version: string;
  dependencies: NodeDependencies;
  devDependencies?: NodeDependencies;
}

export default class DescriptorBuilder implements Builder<DescriptorBuilderSchema> {
  private systemRoot: string;

  constructor(private context: BuilderContext) {
    const root = this.context.workspace.root;
    this.systemRoot = getSystemPath(root);
  }

  private getPkgJsonData() {
    let pkgJson;
    try {
      pkgJson = JSON.parse(fs.readFileSync(path.resolve(this.systemRoot, 'package.json'), 'utf8'));
    } catch {
      throw new Error('Unable to find package.json. Ensure you are in a npm project.');
    }
    return {
      version: pkgJson.version as string,
      dependencies: Object.keys(pkgJson.dependencies),
      devDependencies: Object.keys(pkgJson.devDependencies)
    };
  }

  private getRealDependencies(dependencies: string[]) {
    return dependencies.reduce(
      (acc, pkgName) => {
        const pkgPath = path.resolve(this.systemRoot, 'node_modules', pkgName, 'package.json');
        acc[pkgName] = JSON.parse(fs.readFileSync(pkgPath, 'utf8')).version + '';
        return acc;
      },
      {} as NodeDependencies
    );
  }

  run(builderConfig: BuilderConfiguration<DescriptorBuilderSchema>): Observable<BuildEvent> {
    const options = builderConfig.options;

    const descriptionFilePath = path.join(this.systemRoot, options.path);
    const pkgJsonData = this.getPkgJsonData();

    const description: BuildDescription = {
      version: pkgJsonData.version,
      dependencies: this.getRealDependencies(pkgJsonData.dependencies)
    };

    if (options.withDev) {
      description.devDependencies = this.getRealDependencies(pkgJsonData.devDependencies);
    }

    const descriptionString = JSON.stringify(description, null, 2);
    const writeFile$ = bindNodeCallback(fs.writeFile);

    return writeFile$(descriptionFilePath, descriptionString).pipe(
      map(() => ({ success: true })),
      tap(() => this.context.logger.info(descriptionString)),
      tap(() => this.context.logger.info(`\n\rDescription recorded in ${options.path}`)),
      catchError(e => {
        this.context.logger.error('Failed to create timestamp', e);
        return of({ success: false });
      })
    );
  }
}
