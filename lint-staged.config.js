// eslint-disable-next-line import/no-default-export
export default {
  '*.{md,json,yaml,yml}': [`prettier -w`],
  '*.{js,ts}': [`prettier -w`, 'eslint_d --fix'],
};
