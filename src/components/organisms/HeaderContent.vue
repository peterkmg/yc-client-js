<template></template>

<script lang="ts" setup>
import useAppStore from '@/store/app'
import useAuthStore from '@/store/auth'

const auth = useAuthStore()
const app = useAppStore()

const icons = reactive({
  close: 'octicon:sidebar-collapse-24',
  open: 'octicon:sidebar-expand-24',
  lock: 'uil:lock-alt',
  unlock: 'uil:lock-open-alt',
  fullscreen: 'majesticons:arrows-expand-line',
  user: 'uil:user-circle',
  down: 'majesticons:chevron-down',
})

const signOut = async() => {
  const error = await auth.signOut()
  /* if (error) ElMessage({ type: 'error', message: error.message }) */
}
</script>

<style lang="scss" scoped></style>
