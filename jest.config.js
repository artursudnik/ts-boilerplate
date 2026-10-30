/** @type {import('ts-jest').JestConfigWithTsJest} */
// eslint-disable-next-line import/no-default-export
export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  passWithNoTests: true,
};
