export interface Transformation {
  execute(input: string): Promise<string>;
}
