import { Transformation } from './transformation';
import ymlParser from 'yaml';

const generateSourceCode = (object: any): string => {
  const json = JSON.stringify(object, null, 2);
  const lines = []
  lines.push('const data =');
  lines.push(json);
  lines.push('export default data;');

  return lines.join('\n');
}

export class YamlToJsTransformation implements Transformation {
  public execute(input: string): string {
    const object = ymlParser.parse(input, { prettyErrors: true });
    return generateSourceCode(object);
  }
}
