/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  collectCoverage: true,
  coverageDirectory: "/coverage",
  coverageProvider: "v8",
  resetModules: true,
  roots: [
    "__tests__"
  ],
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/**/*.js?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
};
