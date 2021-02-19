module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
      browser: false,
      es6: true,
  },
  extends: [
      "@react-native-community",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier/@typescript-eslint",
      "plugin:prettier/recommended",
      "eslint:recommended",
  ],
  globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly",
  },
  parserOptions: {
      ecmaFeatures: {
          jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: "module",
  },
  plugins: ["prettier", "@typescript-eslint", "eslint-plugin-import-helpers"],
  rules: {     
    "camelcase": "off",
      "@typescript-eslint/camelcase":"off", 
      "no-console": "error",
      "no-shadow": "off",
      "no-irregular-whitespace": 0,
      "@typescript-eslint/no-explicit-any": "off",
      "prettier/prettier": "error",
      "react-native/no-inline-styles": "off",     
      "no-catch-shadow": "off",
      "no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
      "import-helpers/order-imports": [
          "warn",
          {
              newlinesBetween: "always",
              groups: [
                  "/^react/",
                  "/^react-native/",
                  "module",                           
                  "/src/gateways/",
                  "/src/useCases/",
                  "/src/domains/",
                  "/src/assets/",
                  "/src/configurations/",
                  "/src/utils/",
                  "/src/store/",
                  "/src/components/",
                  "/src/screens/",
                  "/src/hooks/",
                  "/src/globals/",
                  "/^./styles/",
                  ["parent", "sibling", "index"],
              ],
              alphabetize: { order: "asc", ignoreCase: true },
          },
      ],
  },
  settings: {
      react: {
          version: "detect",
      },
      "import/resolver": {
          "babel-plugin-root-import": {
              rootPathSuffix: "src",
          },
      },
  },
};
