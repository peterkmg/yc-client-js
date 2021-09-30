import layout from './__layouts'

const components = {
  home: () => import('@/views/home.vue'),
  profile: () => import('@/views/profile.vue'),
}

export default {
  home: {
    name: 'home',
    path: '/home',
    component: layout.default,
    children: [
      {
        path: '',
        component: components.home,
        meta: { title: 'Главная' },
      },
    ],
  },
  profile: {
    name: 'profile',
    path: '/profile',
    component: layout.default,
    children: [
      {
        path: '',
        component: components.profile,
        meta: { title: 'Профиль' },
      },
    ],
  },
}
