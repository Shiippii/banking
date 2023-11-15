module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ["sonarjs", "unicorn", "jsdoc"],
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
    "plugin:jsdoc/recommended",
  ],
  rules: {
    "unicorn/prefer-module": "off",
    "unicorn/filename-case": "off",
    "unicorn/prefer-node-protocol": "off",
    "unicorn/relative-url-style": "off",
  },
}
