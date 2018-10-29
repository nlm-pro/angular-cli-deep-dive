# Angular CLI Examples

**Angular example project with exercices.**

Created for and used by attendees to my Angular CLI courses / workshops / codelabs.

Please, do not hesitate to [send me a tweet or DM][tweet] if you have any question or feedback about this topics.

If you find a bug or have a idea which could permit to enhance this project, please [open an issue][new-issue].

[new-issue]: https://github.com/noelmace/angular-cli-deep-dive/issues/new
[tweet]: https://twitter.com/noel_mace

## Quick Start

1. Clone this project.
2. Run `npm install`
3. Open the slides and follow instructions.

## Events

| id | Date | Place | Event | Topic |  Ressources |
| --- | --- | --- | --- | --- | --- |
| AC | 2018-11-06 | London, UK | AngularConnect | [_Deep dive into Angular CLI 7_](https://angularconnect.com/talks#noel-mace) | slides: bit.ly/cli-deep-dive-ac |
| CL | 2018-11-18 | Toulouse, FR | Capitole du Libre | [_Contribuer à un projet Github : example avec Angular CLI_](https://2018.capitoledulibre.org/programme/#contribuer-a-un-projet-github-exemple-avec-angular) | TODO |

## Topics

Some topics are handled via git branches. Clone this project, and use `git checkout` in order to use them.

Not all topics are addressed during one of my related codelabs. Checkmarks are here to tell you want we will do during the one your are attending.

**NB:** all dependencies should be handled in the master branch. Therefore, you'll need to run `npm install` only once, juste after cloning the project. 

| Topics | Description | Branch | Solution | AC | CL |
| --- | --- | --- | --- | --- | --- |
| CLI | update the cli from v6 to v7 | [cli-6] | [fix/cli-6] | :heavy_check_mark: |
| CLI | debug the CLI using Chrome Dev Tools | [master] | N/A |  | :heavy_check_mark: |
| CLI | try the @angular-devkit/benchmark package | [master] | N/A | | :heavy_check_mark: |
| CLI / architect | Solve a budget overrun | [budget] | [fix/budget] | :heavy_check_mark: |
| schematics | add @angular/material to your project | [add-material] | N/A | 
| schematics | add Prettier to your project | [add-prettier] | N/A | :heavy_check_mark: | 
| schematics | your first schematic | TODO | TODO |  | :heavy_check_mark: |
| architect | your first architect custom builder | [architect] | [fix/architect] | :heavy_check_mark: | :heavy_check_mark: |

[master]: https://github.com/noelmace/angular-cli-deep-dive/tree/master
[architect]: https://github.com/noelmace/angular-cli-deep-dive/tree/architect
[fix/architect]: https://github.com/noelmace/angular-cli-deep-dive/tree/fix/architect
[add-material]:  https://github.com/noelmace/angular-cli-deep-dive/tree/add-material
[cli-6]: https://github.com/noelmace/angular-cli-deep-dive/tree/cli-6
[fix/cli-6]: https://github.com/noelmace/angular-cli-deep-dive/tree/fix/cli-6
[budget]: https://github.com/noelmace/angular-cli-deep-dive/tree/budget
[fix/budget]: https://github.com/noelmace/angular-cli-deep-dive/tree/fix/budget
[add-prettier]: https://github.com/noelmace/angular-cli-deep-dive/tree/add-prettier

## Angular CLI doc

This project was, of course, generated with [Angular CLI](https://github.com/angular/angular-cli) version 7 and has been regularly updated since.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
