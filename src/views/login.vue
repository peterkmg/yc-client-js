<template>
  <el-container class="login-container no-select">
    <el-header />
    <el-main>
      <el-form
        :model="form"
        class="login-form no-select"
        autocomplete="on"
        label-position="left"
      >
        <div class="title-container no-select">
          <h3 class="title no-select">
            Login Form
          </h3>

          <el-form-item prop="username">
            <Icon :icon="form.usernameBoxIcon" style="margin-left: 12px" />
            <el-input
              v-model="form.email"
              placeholder="почта"
              name="email"
              type="text"
              tabindex="1"
              autocomplete="on"
            />
          </el-form-item>

          <el-tooltip
            v-model="form.capsTooltip"
            content="Caps lock is On"
            placement="right"
            manual
          >
            <el-form-item prop="password">
              <Icon :icon="form.passwordBoxIcon" style="margin-left: 12px" />
              <el-input
                v-model="form.password"
                :type="form.passwordIsText ? 'text' : 'password'"
                placeholder="пароль"
                name="password"
                tabindex="2"
                autocomplete="on"
              />
              <Icon
                :icon="
                  form.passwordIsText
                    ? form.passwordBoxSideIconText
                    : form.passwordBoxSideIconPassword
                "
                @click="togglePasswordBoxType"
              />
            </el-form-item>
          </el-tooltip>

          <el-button
            :loading="form.loading"
            type="primary"
            style="width: 100%; margin-bottom: 30px"
            @click="signIn"
          >
            Войти
          </el-button>
        </div>
      </el-form>
    </el-main>
    <el-footer />
  </el-container>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus/es'
import useAuthStore from '@/store/auth'

const form = reactive({
  email: '',
  password: '',
  usernameBoxIcon: 'uil:user',
  passwordBoxIcon: 'uil:lock',
  passwordBoxSideIconPassword: 'uil:eye',
  passwordBoxSideIconText: 'uil:eye-slash',
  passwordIsText: false,
  capsTooltip: false,
  loading: false,
})

const togglePasswordBoxType = () => {
  form.passwordIsText = !form.passwordIsText
}

const auth = useAuthStore()
const signIn = async() => {
  form.loading = true
  const error = await auth.signIn(form.email, form.password)
  if (error) ElMessage({ type: 'error', message: error.message })
  form.loading = false
}
</script>

<style lang="scss" scoped>
.iconify {
  width: 20px;
  height: 100%;
  color: $dark-grey;
}

:deep(.el-form-item) {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.1);
  color: #454545;
  .el-form-item__content {
    display: inline-flex;
  }
  .el-input {
    width: 85%;
    height: 100%;

    input {
      height: 47px;
      padding: 12px 5px 12px 15px;
      border: 0;
      border-radius: 0;
      background: transparent;
      color: $light-grey;
      -webkit-appearance: none;
      caret-color: $white;

      &:-webkit-autofill {
        box-shadow: 0 0 0 1000px $login-bg-color inset !important;
        -webkit-text-fill-color: $white !important;
      }
    }
  }
}

.login-container {
  overflow: hidden;
  background-color: $login-bg-color;

  .login-form {
    position: relative;
    overflow: hidden;
    width: 520px;
    max-width: 100%;
    margin: 0 auto;
    padding: 160px 35px 0;

    > .title-container {
      position: relative;

      > .title {
        margin: 0 auto 40px auto;
        color: $light-grey;
        font-weight: bold;
        font-size: 26px;
        text-align: center;
      }
    }
  }
}
</style>

<route lang="yaml">
meta:
  title: Login
  layout: empty
</route>
