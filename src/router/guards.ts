import { start, done } from 'nprogress'
import type { Router } from 'vue-router'
import useAuthStore from '@/store/auth'

export default (router: Router) => {
  router.beforeEach((to, from, next) => {
    // start nprogress animation
    start()

    const auth = useAuthStore()
    /* console.log(JSON.stringify(router.getRoutes())) */
    if (to.meta.requiresAuth && auth.isAuthenticated === false) next({ path: '/login' })
    else if (to.path === '/login' && auth.isAuthenticated === true) next({ path: '/dashboard'})
    else next()
  })

  router.afterEach(() => {
    // finish nprogress animation
    done()
  })
}
