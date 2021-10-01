<template>
  <a-card class="self-center" :title="f.title">
    <a-form ref="form" class="w-sm self-center flex flex-col">
      <a-form-item>
        <a-input
          ref="email"
          v-model:value="f.data.email"
          size="large"
          :placeholder="f.placeholder.email"
        >
          <template #prefix>
            <Icon :icon="f.icons.user" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input-password
          ref="password"
          v-model:value="f.data.password"
          size="large"
          :placeholder="f.placeholder.password"
        >
          <template #prefix>
            <Icon :icon="f.icons.password" />
          </template>
        </a-input-password>
      </a-form-item>
      <a-button
        size="large"
        type="primary"
        :loading="f.loading"
        @click="signIn"
      >
        Войти
      </a-button>
    </a-form>
  </a-card>
</template>

<script lang="ts" setup>
import { message } from 'ant-design-vue/es'
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
const info = () => {
  message.success('some message', 3)
}
const signIn = async() => {
  f.loading = true
  const error = await auth.signIn(f.data.email, f.data.password)
  if (error) message.error(error)
  f.loading = false
}
</script>

<style lang="less" scoped>
.iconify {
  width: 20px;
  height: 100%;
  margin-right: 4px;
  color: rgba(0, 0, 0, 0.65);
}
</style>
