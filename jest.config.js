module.exports = {
  transformIgnorePatterns: [
      "<rootDir>/node_modules/(?!react-navigation/native|react-native|rn-apple-healthkit|rn-fetch-blob)",
  ],
  coveragePathIgnorePatterns: [
      "exceptions",
      "styles",
      "<rootDir>/node_modules/",
      "<rootDir>/__tests__/__mocks__/",
      "<rootDir>/__tests__/__fixture__/",
      "<rootDir>/__tests__/dataBuilders/",
      "<rootDir>/src/assets/",
      "<rootDir>/src/configs/",
      "<rootDir>/src/utils/",
      "<rootDir>/src/domains/",
  ],
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  testPathIgnorePatterns: [
      "exceptions",
      "\\.snap$",
      "<rootDir>/node_modules/",
      "<rootDir>/__tests__/__mocks__/",
      "<rootDir>/__tests__/dataBuilders/",
      "<rootDir>/__tests__/__fixture__/",
  ],
  cacheDirectory: ".jest/cache",
  setupFiles: ["./node_modules/react-native-gesture-handler/jestSetup.js"],
 setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  moduleNameMapper: {
      "\\.svg": "<rootDir>/__tests__/__mocks__/svgMock.ts",
  },
};
