/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testMatch: ['**/*.test.ts', '**/*.test.tsx', '**/*.test.js', '**/*.test.jsx', '!./tests/e2e/*.spec.ts'],
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.test.ts?$': 'ts-jest',
    '^.+\\.test.tsx?$': 'ts-jest',
    '^.+\\.test.js?$': 'babel-jest',
    '^.+\\.test.jsx?$': 'babel-jest',
  },
};
