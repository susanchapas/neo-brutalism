const nextPlugin = require("@next/eslint-plugin-next");
const jsxA11y = require("eslint-plugin-jsx-a11y");

module.exports = [
  {
    ignores: [".next/**", "out/**", "node_modules/**", "docs/**"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "@next/next": nextPlugin,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "jsx-a11y/no-autofocus": "error",
      "jsx-a11y/anchor-has-content": "error",
      "@next/next/no-html-link-for-pages": "off",
    },
  },
];
