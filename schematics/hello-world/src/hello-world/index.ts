import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { Schema as Options } from './schema';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function helloWorld(_options: Options): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    tree.create(_options.name || 'hello', 'world');
    return tree;
  };
}
