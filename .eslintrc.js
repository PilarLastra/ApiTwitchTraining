module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [],
  overrides: [],
  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-unused-expressions": [0],
    "@typescript-eslint/no-unused-vars": [0],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
