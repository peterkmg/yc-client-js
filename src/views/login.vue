<template>
  <el-container class="login-container">
    <el-header />
    <el-main>
      <el-form
        :model="formData"
        class="login-form"
        autocomplete="on"
        label-position="left"
      >
        <div class="title-container">
          <h3 class="title">
            Login Form
          </h3>

          <el-form-item prop="username">
            <Icon :icon="formData.usernameBoxIcon"
              style="margin-left: 12px;" />
            <el-input
              v-model="formData.email"
              placeholder="почта"
              name="email"
              type="text"
              tabindex="1"
              autocomplete="on"
            />
          </el-form-item>

          <el-tooltip
            v-model="formData.capsTooltip"
            content="Caps lock is On"
            placement="right"
            manual
          >
            <el-form-item prop="password">
              <Icon :icon="formData.passwordBoxIcon"
                style="margin-left: 12px;" />
              <el-input
                v-model="formData.password"
                :type="formData.passwordBoxType"
                placeholder="пароль"
                name="password"
                tabindex="2"
                autocomplete="on"
              />
              <Icon :icon="formData.passwordBoxSideIcon" @click="togglePasswordBoxType" />
            </el-form-item>
          </el-tooltip>

          <el-button
            :loading="formData.loading"
            type="primary"
            style="width: 100%; margin-bottom: 30px"
            @click="signIn"
          >
            Login
          </el-button>
        </div>
      </el-form>
    </el-main>
    <el-footer />
  </el-container>
</template>

<script lang="ts" setup>
import useAuthStore from '@/store/auth'
import { ElMessage } from 'element-plus/es'

const formData = reactive({
  email: '',
  password: '',
  passwordBoxType: 'password',
  passwordBoxIcon: 'majesticons:lock-closed-line',
  usernameBoxIcon: 'majesticons:user-line',
  passwordBoxSideIcon: 'majesticons:eye-line',
  capsTooltip: false,
  loading: false,
})

const togglePasswordBoxType = () => {
  if (formData.passwordBoxType === 'password'){
    formData.passwordBoxType = 'text'
    formData.passwordBoxSideIcon = 'majesticons:eye-off-line'
  } else {
    formData.passwordBoxType = 'password'
    formData.passwordBoxSideIcon = 'majesticons:eye-line'
  }
}

const auth = useAuthStore()
const signIn = async() => {
  formData.loading = true
  const error = await auth.signIn(formData.email, formData.password)
  if (error)
    ElMessage({ type: 'error', message: error.message })
  formData.loading = false
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
