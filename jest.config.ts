import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverage: false,
  collectCoverageFrom: ["<rootDir>/tests/**/*.ts"],
  roots: ["<rootDir>/tests"],
  // setupFiles: ["dotenv/config"],
  // setupFilesAfterEnv: ["/jest.setup.ts"],
};

export default config;
