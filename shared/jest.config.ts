module.exports = {
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ['./src/**/*.ts'],
  coverageDirectory: 'build/reports/coverage',
  coverageProvider: 'babel',
  coverageReporters: ['text', 'cobertura'],
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
  reporters: [
    ['jest-junit', { suiteName: '', outputFile: 'build/reports/tests/junit.xml', includeConsoleOutput: 'true' }],
    'default',
    [
      '../../node_modules/jest-html-reporter',
      {
        pageTitle: 'Unit Test Report',
        outputPath: 'build/reports/tests/unit-tests.html',
        includeFailureMsg: true,
      },
    ],
  ],
  transform: { '^.+\\.ts?$': 'ts-jest' },
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.[jt]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
};
