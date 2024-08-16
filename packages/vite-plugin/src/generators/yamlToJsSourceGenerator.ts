import { Generator } from './generator'
import { parse } from 'yaml'

const generateSourceCode = (object: any): string => {
  const json = JSON.stringify(object, null, 2)
  const lines = []
  lines.push('const data =')
  lines.push(json)
  lines.push('export default data;')

  return lines.join('\n')
}

export class YamlToJsSourceGenerator implements Generator {
  public generate(input: string): string {
    const object = parse(input, { prettyErrors: true })
    return generateSourceCode(object)
  }
}
