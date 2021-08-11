module.exports = {
  extends: ['@dword-design/stylelint-config'],
  rules: {
    'no-descending-specificity': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep'],
      },
    ],
  },
}
