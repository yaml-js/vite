import { VarsExpansionGenerator, VarResolver } from "../src/generators";

class Resolver implements VarResolver {

  constructor(private vars: Record<string, string> = { VAR_NAME: 'John', VAR_GREETING: 'day' }) {}
  get(name: string): string {
    return this.vars[name]
  }
};

describe('Subject: VarsExpansionGenerator', () => {

  it('Scenario 01: No changes are made on inputs with no variable placeholder', () => {
    const input = 'Hello, World!';
    const expected = 'Hello, World!';
    const generator = new VarsExpansionGenerator(new Resolver());
    expect(generator.generate(input)).toEqual(expected);
  });

  it('Scenario 02: All variable placeholders are replaced by the value returned by the resolver', () => {
    const input = 'Hello, World ${VAR_NAME}, have a nice ${VAR_GREETING}!';
    const expected = 'Hello, World John, have a nice day!';
    const generator = new VarsExpansionGenerator(new Resolver());
    expect(generator.generate(input)).toEqual(expected);
  });

  it('Scenario 03: When the resolver does not provide a value the placeholder is not replaced if no default value was specified', () => {
    const input = 'Hello, World ${VAR_NAME}, have a nice ${VAR_GREETING_2}!';
    const expected = 'Hello, World John, have a nice ${VAR_GREETING_2}!';
    const generator = new VarsExpansionGenerator(new Resolver());
    expect(generator.generate(input)).toEqual(expected);
  });

  it('Scenario 04:  When the resolver does not provide a value placeholders are replaced by the specified default value', () => {
    const input = 'Hello, World ${VAR_NAME}, have a nice ${VAR_GREETING_2:night}!';
    const expected = 'Hello, World John, have a nice night!';
    const generator = new VarsExpansionGenerator(new Resolver());
    expect(generator.generate(input)).toEqual(expected);
  });
});
