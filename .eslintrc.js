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
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/prop-types': 0,
    'require-jsdoc': 0,
    'max-len': 0, // disables line length check
    'new-cap': 0,
    'camelcase': 0,
    'no-unused-vars': 0,
    'no-unused-expressions': 0,
    'react-hooks/rules-of-hooks': 2, // Kiểm tra rule của Hook
    'react-hooks/exhaustive-deps': 1, // Kiểm tra effect dependency
  },
};
