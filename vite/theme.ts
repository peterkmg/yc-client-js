const elementPlusVariables = {
  '--color-primary': '#1890ff',
  '--color-white': '#13ce66',
  '--color-success': '#13ce66',
  '--color-warning': '#ffba00',
  '--color-danger': '#ff4949',
  '--button-font-weight': '400',
  '--border-color-light': '#dfe4ed',
  '--border-color-lighter': '#e6ebf5',
  '--table-border': '1px solid #dfe6ec',
}

const variables = {
  // base color
  'blue': '#324157',
  'light-blue': '#3A71A8',
  'red': '#fa0206',
  'pink': '#E65D6E',
  'green': '#30B08F',
  'tiffany': '#4AB7BD',
  'yellow': '#FEC171',
  'panGreen': '#30B08F',

  // sidebar
  'menuText': '#bfcbd9',
  'menuActiveText': '#409EFF',
  'subMenuActiveText': '#f4f4f5', // https://github.com/ElemeFE/element/issues/12951

  'menuBg': '#304156',
  'menuHover': '#263445',

  'subMenuBg': '#1f2d3d',
  'subMenuHover': '#001528',
  'sideBarWidth': '210px',
}

export default () => {
  const generateVariables = Object.entries(variables).reduce(
    (result, value) => {
      const [key, val] = value
      return `${result}$${key}:${val};`
    },
    '',
  )
  const elementPlus = Object.entries(elementPlusVariables).reduce(
    (result, value) => {
      const [key, val] = value
      return `${result}$${key}:${val};`
    },
    '',
  )
  return `${elementPlus}${generateVariables}`
}
