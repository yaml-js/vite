import { ExpandVarsTransformation } from "../src/transformations/expandVarsTransformation";

describe('Subject: varsTransformation', () => {
  describe('Scenario 01: Executing transformation when input has no variable placeholder', () => {
    it('Return should equals input', async () => {

      const input = 'Hello, World!';
      const provider = { get: jest.fn() };
      const transformation = new ExpandVarsTransformation(provider);

      const result = await transformation.execute(input);
      expect(result).toBe(input);
    })
  });
});
