module.exports = {
  '*.{md,json,yaml,yml}': [`prettier -w`],
  '*.{js.ts}': ['organize-imports-cli', `prettier -w`, 'eslint_d --fix'],
};
