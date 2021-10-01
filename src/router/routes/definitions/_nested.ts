import redirect from './__redirects'
import layout from './__layouts'

const components = {
  dict: {
    companies: () => import('@/views/dict/companies.vue'),
    employees: {
      people: () => import('@/views/dict/employees/people.vue'),
      positions: () => import('@/views/dict/employees/positions.vue'),
    },
  },
}

export default {
  dict: {
    path: '/dict',
    component: layout.default,
    redirect: redirect.home,
    meta: { title: 'Справочники' },
    children: [
      {
        name: 'dict-companies',
        path: 'companies',
        component: components.dict.companies,
        meta: { title: 'Организации' },
      },
      {
        path: 'employees',
        redirect: redirect.home,
        meta: { title: 'Сотрудники' },
        children: [
          {
            name: 'dict-employees-people',
            path: 'people',
            component: components.dict.employees.people,
            meta: { title: 'Физ. лица' },
          },
          {
            name: 'dict-employees-positions',
            path: 'positions',
            component: components.dict.employees.positions,
            meta: { title: 'Должности' },
          },
        ],
      },
    ],
  },
}
