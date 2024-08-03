import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverage: false,
  collectCoverageFrom: ["<rootDir>/tests/**/*.ts"],
  roots: ["<rootDir>/tests"],
  setupFiles: ["<rootDir>/jest.setup.ts"],
  setupFilesAfterEnv: ["<rootDir>/jest.setupAfterEnv.ts"],
  globalSetup: "<rootDir>/jest.globalSetup.ts",
};

export default config;
