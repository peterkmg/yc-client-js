import { useNProgress } from '@vueuse/integrations'
import { Router, RouteRecordRaw } from 'vue-router'
import useUserStore from '@/store/modules/user'

const { start, done } = useNProgress(null, {
  showSpinner: false,
})

export default (router: Router, routes: RouteRecordRaw[]) => {
  router.beforeEach((to) => {
    const userStore = useUserStore()
    console.log(`route path:${to.path}`)
    console.log(JSON.stringify(routes))
    /* if (to.meta.requiresAuth && !userStore.isAuthenticated)
      next('/login') */

    /* if (to.path) start()
    return true */
  })

  router.afterEach(() => {
    done()
  })
}
