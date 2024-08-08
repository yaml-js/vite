import { VarsTransformation } from "../src/transformations/varsTransformation";

describe('Subject: varsTransformation', () => {
  describe('Scenario 01: Executing transformation when input has no variable placeholder', () => {
    it('Return should equals input', async () => {

      const input = 'Hello, World!';
      const varsProvider = { get: jest.fn() };
      const varsTransformation = new VarsTransformation(varsProvider);

      const result = await varsTransformation.execute(input);
      expect(result).toBe(input);
    })
  });
});
