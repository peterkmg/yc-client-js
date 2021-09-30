import layout from './__layouts'

const components = {
  login: () => import('@/views/login.vue'),
}

export default {
  login: {
    name: 'login',
    path: '/login',
    component: layout.empty,
    children: [
      {
        path: '',
        component: components.login,
        meta: { title: 'Вход' },
      },
    ],
  },
}
