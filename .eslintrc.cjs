/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    //'plugin:vue/vue3-strongly-recommended' //to apply priority B Rules in Vue
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    //'@typescript-eslint/no-unused-vars': 1,
    'vue/multi-word-component-names': 0
  }
}
