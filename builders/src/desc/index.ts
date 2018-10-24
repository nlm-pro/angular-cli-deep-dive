import { Builder, BuilderConfiguration, BuilderContext, BuildEvent } from '@angular-devkit/architect';
import { Observable, of } from 'rxjs';
import { DescriptorBuilderSchema } from './schema';

export default class DescriptorBuilder implements Builder<DescriptorBuilderSchema> {
  constructor(private context: BuilderContext) {}

  run(builderConfig: BuilderConfiguration<Partial<DescriptorBuilderSchema>>): Observable<BuildEvent> {
    // prettier-ignore-start
    const ascii = `
                  o
     o                           o  ________________________
    o         _..--~~--.._         |                        |
          .-~'            '~-.     | You need to go deeper! |
      o  / .------.  .------. \\    |___  ___________________|
   o    / (       ()(       () \\       |/
        \\  '------'  '------'  /       /
         )                    (
        /  .-.  .-.  .-.  .-.  \\
       (  (  /  /  )  ) \\  \\ ) )         o
 o      \\  \\/  / \\/  /  /\  /  /           o
  o      \\  \\ /\ (  (  /  )/  /  o
o         )  )  ) )  )(  /(  (
         /  /( / /  /  \\/  \\  \\
        /  /  \\ /  / ) /  / \\  \\
       (  ( \\  \\  / / (  ( \\ )  )
        \\  \\ \\  \\/ /  /)  ) /  /        o
         \\__) \\  \\(  (/  / (__/
          /  /)  )\ (  ( \\  \\
         (  ((__// \\ \\  \\ )  )
          \\__)  /  /\ \\__)  /
               (  (  )  )  (
                \\__)/  / \\__)
                    (__/

`;
    // prettier-ignore-end
    console.log(ascii);
    return of({ success: true });
  }
}
