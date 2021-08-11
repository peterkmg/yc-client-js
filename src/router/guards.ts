import { useNProgress } from '@vueuse/integrations'
import type { Router, RouteRecordRaw } from 'vue-router'
import useUserStore from '@/store/modules/user'

const { start, done } = useNProgress(null, {
  showSpinner: false,
})

export default (router: Router, routes: RouteRecordRaw[]) => {
  router.beforeEach((to, from, next) => {
    const userStore = useUserStore()
    // eslint-disable-next-line no-console
    console.log(`route path:${to.path}`)
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(routes))

    if (to.meta.requiresAuth && !userStore.isAuthenticated) {
      // eslint-disable-next-line no-console
      console.log('Redirecting unauthenticated user to /login')
      next('/login')
    }
    else {
      // start nprogress animation
      start()
      next()
    }
  })

  router.afterEach(() => {
    // finish nprogress animation
    done()
  })
}
