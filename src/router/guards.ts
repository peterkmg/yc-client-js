import nprogress from 'nprogress'
import type { Router } from 'vue-router'
import useAuthStore from '@/store/auth'

nprogress.configure({ showSpinner: false })

export default (router: Router) => {
  router.beforeEach((to, from, next) => {
    // start nprogress animation
    nprogress.start()

    const auth = useAuthStore()
    /* console.log(JSON.stringify(router.getRoutes())) */
    if (to.meta.requiresAuth && auth.isAuthenticated === false)
      next({ path: '/login' })
    else if (to.path === '/login' && auth.isAuthenticated === true)
      next({ path: '/home' })
    else next()
  })

  router.afterEach(() => {
    // finish nprogress animation
    nprogress.done()
  })
}
