<template>
  <a-card class="self-center" :title="f.title">
    <a-form class="w-sm self-center flex flex-col">
      <a-form-item>
        <a-input size="large" :placeholder="f.placeholder.email">
          <template #prefix>
            <Icon :icon="f.icons.user" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input size="large" :placeholder="f.placeholder.password">
          <template #prefix>
            <Icon :icon="f.icons.password" />
          </template>
          <template #suffix>
            <Icon :icon="f.icons.showPassword" />
          </template>
        </a-input>
      </a-form-item>
    </a-form>
  </a-card>
</template>

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

const togglePasswordBoxType = () => {
  f.passwordIsText = !f.passwordIsText
}

const auth = useAuthStore()
const signIn = async() => {
  f.loading = true
  const error = await auth.signIn(f.data.email, f.data.password)
  f.loading = false
}
</script>

<style lang="less" scoped>
.iconify {
  width: 20px;
  height: 100%;
}
</style>

<route lang="yaml">
meta:
  title: Login
  layout: empty
</route>
