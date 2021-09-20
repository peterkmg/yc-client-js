<template>
  <el-container class="login-container">
    <el-header />
    <el-main>
      <el-form
        :model="loginForm"
        class="login-form"
        autocomplete="on"
        label-position="left"
      >
        <div class="title-container">
          <h3 class="title">
            Login Form
          </h3>

          <el-form-item prop="username">
            <span class="svg-container">
              <Icon
                icon="local:user"
                style="vertical-align: middle; margin-bottom: 0.55em"
              />
            </span>
            <el-input
              v-model="loginForm.username"
              placeholder="username"
              name="username"
              type="text"
              tabindex="1"
              autocomplete="on"
            />
          </el-form-item>

          <el-tooltip
            v-model="loginForm.capsTooltip"
            content="Caps lock is On"
            placement="right"
            manual
          >
            <el-form-item prop="password">
              <span class="svg-container">
                <Icon
                  icon="local:password"
                  style="vertical-align: middle; margin-bottom: 0.55em"
                />
              </span>
              <el-input
                placeholder="Password"
                name="password"
                tabindex="2"
                autocomplete="on"
              />
              <span class="svg-container">
                <Icon
                  icon="local:eye"
                  style="vertical-align: -webkit-baseline-middle"
                />
              </span>
            </el-form-item>
          </el-tooltip>

          <el-button
            type="primary"
            style="width: 100%; margin-bottom: 30px"
            @click="login"
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
import { useRouter } from 'vue-router'
import useUserStore from '@/store/modules/user'

const userStore = useUserStore()
const router = useRouter()

const loginForm = reactive({
  username: 'admin',
  password: '111111',
  capsTooltip: false,
  loading: false,
})

const login = async() => {
  userStore.login()
  router.push('/dashboard')
}
</script>

<style lang="scss" scoped>
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

    :deep(.el-form-item) {
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.1);
      color: #454545;

      .el-input {
        display: inline-block;
        width: 85%;
        height: 47px;

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
  }

  .svg-container {
    display: inline-block;
    vertical-align: middle;
    width: 30px;
    padding: 6px 5px 6px 15px;
    color: $dark-grey;
  }
}
</style>

<route lang="yaml">
meta:
  title: Login
  layout: empty
</route>
