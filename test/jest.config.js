const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  rootDir: "..",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
  testMatch: ["<rootDir>/test/__tests__/**/*.test.ts?(x)"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/out/"],
  moduleNameMapper: {
    "^react-markdown$": "<rootDir>/test/reactMarkdownMock.tsx",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png|jpg|jpeg|webp)$": "<rootDir>/test/fileMock.js",
  },
};

module.exports = createJestConfig(customJestConfig);
