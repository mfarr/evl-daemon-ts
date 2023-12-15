import type { Config } from "jest";

const config: Config = {
  rootDir: "src/",
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
};

export default config;
