import { Transformation } from './transformation';

export interface VarsProvider {
  get(key: string): string | undefined;
}

// Pattern to match ${VAR_NAME} or ${VAR_NAME:DEFAULT_VALUE}
const pattern = new RegExp('\\$\\{(?<VAR>[A-Za-z0-9_]+)(?::(?<DEFAULT>[^\\}]*))?\\}');

export class VarsTransformation implements Transformation {

    public constructor(private readonly varsProvider: VarsProvider) {}

    public execute(input: string): Promise<string> {
      const result = input.replace(pattern, (_, varName, defaultValue) => {
        return this.varsProvider.get(varName) ?? defaultValue ?? `\${${varName}}`;
      });
      return Promise.resolve(result);
    }
}
