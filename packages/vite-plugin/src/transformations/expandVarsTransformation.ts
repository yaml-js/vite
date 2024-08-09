import { Transformation } from './transformation';

export interface VarValueResolver {
  get(key: string): string | undefined;
}

// Pattern to match ${VAR_NAME} or ${VAR_NAME:DEFAULT_VALUE}
const pattern = new RegExp('\\$\\{(?<VAR>[A-Za-z0-9_]+)(?::(?<DEFAULT>[^\\}]*))?\\}');

export class ExpandVarsTransformation implements Transformation {

    public constructor(private readonly varsProvider: VarValueResolver) {}

    public execute(input: string): string {
      const result = input.replace(pattern, (_, varName, defaultValue) => {
        return this.varsProvider.get(varName) ?? defaultValue ?? `\${${varName}}`;
      });
      return result;
    }
}
