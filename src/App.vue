<template>
  <router-view />
</template>

<script lang="ts" setup>
import { useTitle } from '@vueuse/core'
import { useRouter } from 'vue-router'
import { addCollection } from '@iconify/vue'
import { APP_NAME } from './config/constants'
import localIcons from '@/assets/svg'
import supabase from '@/database'
import useAuthStore from '@/store/auth'

addCollection(localIcons)

const router = useRouter()
const currentRoute = router.currentRoute

watch(
  () => currentRoute.value.path,
  () => currentRoute.value.meta.title ? useTitle(`${currentRoute.value.meta.title} - ${APP_NAME}`) : useTitle(APP_NAME),
  { immediate: true },
)

const auth = useAuthStore()

supabase.auth.onAuthStateChange(
  async(event, session) => {
    auth.setUser(session?.user ?? null)
    auth.setSession(session)

    if (event === 'SIGNED_IN') {
      auth.setAuth(true)
      if (router.currentRoute.value.path === '/login')
        router.push('/dashboard')
    } else if (event === 'SIGNED_OUT'){
      auth.setAuth(false)
      router.push('/login')
    }
  }
)
</script>

<style lang="scss">
@import '@/styles/index.scss';
</style>
