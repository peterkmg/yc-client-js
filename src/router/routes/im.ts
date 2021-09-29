export const layouts = {
  default: () => import('@/layouts/default.vue'),
  empty: () => import('@/layouts/empty.vue'),
}

export default {
  home: {
    name: 'home',
    path: '/home',
    title: 'Главная',
    component: () => import('@/views/home.vue'),
  },
  login: {
    name: 'login',
    path: '/login',
    title: 'Вход',
    component: () => import('@/views/login.vue'),
  },
  profile: {
    name: 'profile',
    path: '/profile',
    title: 'Профиль',
    component: () => import('@/views/profile.vue'),
  },
  dict: {
    path,
  },
}
