<template>
  <a-config-provider :locale="ru">
    <router-view />
  </a-config-provider>
</template>

<script lang="ts" setup>
import ru from 'ant-design-vue/es/locale/ru_RU'
import { useRouter } from 'vue-router'
import { addCollection } from '@iconify/vue'
import localIcons from '@/assets/svg'
import supabase from '@/database'
import useAppStore from '@/store/app'
import useAuthStore from '@/store/auth'

addCollection(localIcons)

const app = useAppStore()
const router = useRouter()

watch(
  () => router.currentRoute.value.path,
  () => app.changePage(router.currentRoute.value.path),
  { immediate: true },
)

const auth = useAuthStore()

supabase.auth.onAuthStateChange(async(event, session) => {
  auth.setUser(session?.user ?? null)
  auth.setSession(session)

  if (event === 'SIGNED_IN') {
    auth.setAuth(true)
    if (router.currentRoute.value.path === '/login') router.push('/home')
  }
  else if (event === 'SIGNED_OUT') {
    auth.setAuth(false)
    router.push('/login')
  }
})
</script>
