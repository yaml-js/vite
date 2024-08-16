import { Generator, VarsExpansionGenerator, VarResolver, YamlToJsSourceGenerator } from '../generators'

class EnvVarResolver implements VarResolver {
  get = (key: string): string | undefined => process.env[key]
}

const transformations: Generator[] = [new VarsExpansionGenerator(new EnvVarResolver()), new YamlToJsSourceGenerator()]

export default (code: string): string => {
  let result = code
  transformations.forEach(async (transformation) => {
    result = transformation.generate(result)
  })
  return result
}
