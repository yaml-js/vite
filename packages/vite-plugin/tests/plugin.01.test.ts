import * as path from  'path'

import factory from '../src/plugin'

describe('Subject: plugin', () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    jest.resetModules();
    process.env = {
      ...originalEnv,
      name: "Pedro",
    };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('Scenario 01: Using a valid YAML file it generates the expected javascript', async () => {
    const input =
      "version: 1\n" +
      "metadata:\n" +
      "  id: 25\n" +
      "  description: name\n" +
      "  date: 2024-01-01\n";

    const expected = {
      code:
        "const data =\n" +
        "{\n" +
        "  \"version\": 1,\n" +
        "  \"metadata\": {\n" +
        "    \"id\": 25,\n" +
        "    \"description\": \"name\",\n" +
        "    \"date\": \"2024-01-01\"\n" +
        "  }\n" +
        "}\n" +
        "export default data;",
      map: { mappings: "" },
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const transform = (factory() as any).transform as (input: string, id: string) => Promise<string>;
    expect(await transform(input, "file.yml")).toEqual(expected);
  });

  it('Scenario 02: Using a valid YAML file it expands variables and generates the expected javascript', async () => {
    const input =
      "version: ${version:1.0.0}\n" +
      "metadata:\n" +
      "  id: ${id}\n" +
      "  description: ${name}\n" +
      "  date: 2024-01-01\n";

    const expected = {
      code:
        "const data =\n" +
        "{\n" +
        "  \"version\": \"1.0.0\",\n" +
        "  \"metadata\": {\n" +
        "    \"id\": \"${id}\",\n" +
        "    \"description\": \"Pedro\",\n" +
        "    \"date\": \"2024-01-01\"\n" +
        "  }\n" +
        "}\n" +
        "export default data;",
      map: { mappings: "" },
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const transform = (factory() as any).transform as (input: string, id: string) => Promise<string>;
    expect(await transform(input, "file.yml")).toEqual(expected);
  });


  it('Scenario 03: It reads configuration from a single file and injects it on source code', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const plugin = factory() as any;
    await plugin.configResolved({ root: path.join(__dirname, "resources"), command: "serve" });
    const { code } = await plugin.transform("console.log($application.config)", "file.js");

    const config = {
      app_name: "Test",
      db: {
        host: "localhost.root",
        port: 5432
      }
    }
    const expected = `console.log(${JSON.stringify(config)})`;
    expect(code).toEqual(expected);
  }, 120 * 1000);
});
