export interface DescriptorBuilderSchema {
  /**
   * the name of the file to generate
   */
  path: string;
  /**
   * record dev dependencies
   */
  withDev: boolean;
}
