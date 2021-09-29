import { useRouter } from 'vue-router'
import useAppStore from '@/store/app'

export default () => {
  const app = useAppStore()
  const router = useRouter()

  watch(
    () => router.currentRoute.value.path,
    () => app.changePage(router.currentRoute.value.path),
    { immediate: true },
  )
}
