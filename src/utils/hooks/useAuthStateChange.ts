import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue/es'
import db from '@/database'
import useAuthStore from '@/store/auth'
import useUserStore from '@/store/user'

export default () => {
  const auth = useAuthStore()
  const user = useUserStore()
  const router = useRouter()

  db.auth.onAuthStateChange(async(event, session) => {
    auth.setUser(session?.user)
    auth.setSession(session)

    if (event === 'SIGNED_IN' && session?.user) {
      const error = await user.fetchUserData(session.user)
      if (error) message.error(error)
      if (router.currentRoute.value.path === '/login') router.push('/home')
    }
    else if (event === 'SIGNED_OUT') {
      auth.$reset()
      user.$reset()
      router.push('/login')
    }
  })
}
