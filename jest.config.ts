import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  bail: true,
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
};

export default config;
