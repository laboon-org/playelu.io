module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'google',
    'eslint:recommended',
    'plugin:react/jsx-runtime',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 0,
    'require-jsdoc': 0,
    'max-len': 0, // disables line length check
    'new-cap': 0,
    'camelcase': 0,
    'no-unused-vars': 2,
    'no-unused-expressions': 0,
  },
};
