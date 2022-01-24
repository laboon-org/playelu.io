module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "google"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
    "require-jsdoc": "off",
    "max-len": "off", // disables line length check
    "new-cap": "off",
    "camelcase": "off",
    "no-unused-vars": "off",
    "no-unused-expressions": "off",
  },
};
