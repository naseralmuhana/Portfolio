/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    // "arrow-body-style": ["warn", "as-needed"],
    "react/jsx-key": "warn",
    "prefer-const": [
      "warn",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false,
      },
    ],
    "react/self-closing-comp": [
      "warn",
      {
        component: true,
        html: true,
      },
    ],
    "no-duplicate-imports": "error",
    "no-unused-vars": [
      "warn",
      { vars: "all", args: "all", ignoreRestSiblings: false },
    ],
    "react/prop-types": "off",
    "no-unreachable": "warn",
  },
}
