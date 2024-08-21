import { Generator } from './generator'

export interface VarResolver {
  get(key: string): string | undefined
}

// Pattern to match ${VAR_NAME} or ${VAR_NAME:DEFAULT_VALUE}
const pattern = /\$\{(?<VAR>[A-Za-z0-9_]+)(?::(?<DEFAULT>[^}]*))?\}/g

export class VarsExpansionGenerator implements Generator {
  public constructor(private readonly varsProvider: VarResolver) {}

  public generate(input: string): string {
    const result = input.replaceAll(pattern, (_, varName, defaultValue) => {
      return this.varsProvider.get(varName) ?? defaultValue ?? `\${${varName}}`
    })
    return result
  }
}
