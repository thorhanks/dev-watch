module.exports = {
    preset: "@vue/cli-plugin-unit-jest/presets/no-babel",
    testMatch: ["**/?(*.)+(spec|test).[jt]s"],
    collectCoverage: true,
    collectCoverageFrom: ["<rootDir>/src/**/*.vue", "<rootDir>/src/**/*.js"],
    coverageReporters: ["text-summary", "html", "lcov", "clover"],
    coverageDirectory: "./docs/coverage",
};
