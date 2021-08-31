module.exports = {
  projects: [
    {
      displayName: {
        name: "test:unit",
        color: "magentaBright",
      },
      preset: "ts-jest/presets/js-with-ts",
      rootDir: ".",
      coveragePathIgnorePatterns: ["node_modules", "/lib/", "\\.(css|svg)$"],
      testMatch: ["<rootDir>/src/**/*.test.(t|j)s?(x)"],
      testEnvironment: "jsdom",
      transform: {
        ".+(lib)+\\/.*\\.js$": "ts-jest",
        ".+\\.module.css$": "jest-css-modules-transform",
        ".+\\.(svg|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
      },
      testPathIgnorePatterns: ["<rootDir>/lib/", "<rootDir>/examples/"],
      modulePathIgnorePatterns: ["<rootDir>/lib", "<rootDir>/examples/"],
      globals: {
        "ts-jest": {
          tsconfig: {
            allowJs: true,
            target: "ES5",
          },
        },
      },
    },
    {
      displayName: {
        name: "test:scripts",
        color: "yellow",
      },
      preset: "ts-jest/presets/js-with-ts",
      rootDir: ".",
      coveragePathIgnorePatterns: ["node_modules", "/lib/", "\\.(css|svg)$"],
      testMatch: ["<rootDir>/scripts/**/*.test.(t|j)s?(x)"],
      testEnvironment: "node",
      testPathIgnorePatterns: ["<rootDir>/lib/"],
      modulePathIgnorePatterns: ["<rootDir>/lib"],
      globals: {
        "ts-jest": {
          tsconfig: {
            allowJs: true,
            target: "ES5",
          },
        },
      },
    },
  ],
  /* Please refer to https://medium.com/trabe/testing-css-modules-in-react-components-with-jest-enzyme-and-a-custom-modulenamemapper-8ff86c7d18a2 */
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
  },
  modulePathIgnorePatterns: ["<rootDir>/lib/", "<rootDir>/examples/"],
};
