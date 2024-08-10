import { YamlToJsSourceGenerator } from "../src/generators";

describe('Subject: YamlToJsSourceGenerator', () => {
  it('Scenario 01: Using a valid YAML file it generates the expected javascript', () => {
    const input =
      "version: 1\n" +
      "metadata:\n" +
      "  id: 25\n" +
      "  description: name\n" +
      "  date: 2024-01-01\n";

    const expected =
      "const data =\n" +
      "{\n" +
      "  \"version\": 1,\n" +
      "  \"metadata\": {\n" +
      "    \"id\": 25,\n" +
      "    \"description\": \"name\",\n" +
      "    \"date\": \"2024-01-01\"\n" +
      "  }\n" +
      "}\n" +
      "export default data;"

    const generator = new YamlToJsSourceGenerator();
    expect(generator.generate(input)).toEqual(expected);
  });

});
