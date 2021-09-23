export const themeVariables = {
  // base color
  'white': '#fff',
  'blue': '#324157',
  'light-blue': '#3A71A8',
  'red': '#fa0206',
  'pink': '#E65D6E',
  'green': '#30B08F',
  'tiffany': '#4AB7BD',
  'yellow': '#FEC171',
  'pan-green': '#30B08F',
  'light-grey': '#eee',
  'dark-grey': '#889aa4',

  'login-bg-color': '#283443',

  // sidebar
  'menu-text-color': '#bfcbd9',
  'menu-active-text-color': '#409EFF',
  'sub-menu-active-text-color': '#f4f4f5', // https://github.com/ElemeFE/element/issues/12951

  'menu-bg-color': '#304156',
  'menu-hover-color': '#263445',

  'sub-menu-bg-color': '#1f2d3d',
  'sub-menu-hover-color': '#001528',
  'sidebar-open-width': '210px',
  'sidebar-collapsed-width': '64px',
}

export const generateCSSVariables = () => {
  const variables = Object.entries(themeVariables).reduce((result, value) => {
    const [key, val] = value
    return `${result}$${key}:${val};`
  }, '')
  return `${variables}`
}
