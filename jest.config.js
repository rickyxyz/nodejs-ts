/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.test.ts?$': 'ts-jest',
    '^.+\\.test.tsx?$': 'ts-jest',
    '^.+\\.test.js?$': 'babel-jest',
    '^.+\\.test.jsx?$': 'babel-jest',
  },
};
