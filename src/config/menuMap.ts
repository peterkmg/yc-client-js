export interface MenuMapItem {
  index: string
  title: string
  icon?: string
  children?: MenuMapItem[]
}

export default [
  { index: '/home', title: 'Главная', icon: 'uil:home' },
  {
    index: '/dict',
    title: 'Справочники',
    icon: 'uil:book-open',
    children: [
      { index: '/dict/companies', title: 'Организации' },
      {
        index: '/dict/employees',
        title: 'Сотрудники',
        children: [
          { index: '/dict/employees/people', title: 'Физ. лица' },
          { index: '/dict/employees/positions', title: 'Должности' },
        ],
      },
      {
        index: '/dict/product',
        title: 'Номенклатура',
        children: [
          { index: '/dict/product/names', title: 'Наименования' },
          { index: '/dict/product/groups', title: 'Группы' },
        ],
      },
      {
        index: '/dict/warehouse',
        title: 'Склады',
        children: [
          { index: '/dict/warehouse/names', title: 'Наименования' },
          { index: '/dict/warehouse/groups', title: 'Группы' },
        ],
      },
    ],
  },
] as MenuMapItem[]
