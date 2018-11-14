'use strict';

const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb', 'eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  plugins: ['react'],
  rules: {
    quotes: [ERROR, 'single'],
    'react/jsx-filename-extension': [WARN, { extensions: ['.js', '.jsx'] }],
    "react/prop-types": "off",
    "no-console": WARN,
    "import/prefer-default-export": false,
    "prettier/prettier": [
      "error",
      {
        'semi': false,
        'singleQuote': true,
        'tabWidth': 2,
        'bracketSpacing': true,
        'trailingComma': 'es5'
      }
    ]
  },
  parserOptions: {
    sourceType: 'module'
  }
};
