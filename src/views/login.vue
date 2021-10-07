<template></template>

<script lang="ts" setup>
import useAuthStore from '@/store/auth'

const f = reactive({
  title: 'Вход',
  data: {
    email: '',
    password: '',
  },
  placeholder: {
    email: 'почта',
    password: 'пароль',
  },
  icons: {
    user: 'uil:user',
    password: 'uil:lock',
    showPassword: 'uil:eye',
    hidePassword: 'uil:eye-slash',
  },
  passwordIsText: false,
  capsTooltip: false,
  loading: false,
})

const auth = useAuthStore()

const signIn = async() => {
  f.loading = true
  const error = await auth.signIn(f.data.email, f.data.password)
  /* if (error) message.error(error) */
  f.loading = false
}
</script>

<style lang="scss" scoped>
.iconify {
  width: 20px;
  height: 100%;
  margin-right: 4px;
  color: rgba(0, 0, 0, 0.65);
}
</style>
