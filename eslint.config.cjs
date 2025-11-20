// Flat config for ESLint v9+ — keeps your current rules and JSX a11y plugin
module.exports = [
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: require("@typescript-eslint/parser"),
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "jsx-a11y": require("eslint-plugin-jsx-a11y"),
    },
    rules: {
      "jsx-a11y/no-autofocus": "error",
      "jsx-a11y/anchor-has-content": "error",
    },
  },
];
