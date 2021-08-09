module.exports = {
  plugins: ['stylelint-scss'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-rscss/config',
  ],
  rules: {
    'no-descending-specificity': null,
    'rscss/class-format': false,
    'rscss/no-descendant-combinator': false,
  },
}
