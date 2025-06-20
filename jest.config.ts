import nextJest from "next/jest";
import type { Config } from "jest";

const createJestConfig = nextJest({ dir: "./" });

const config: Config = {
  verbose: true,
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // if you're using path aliases
  },
};

export default createJestConfig(config);
