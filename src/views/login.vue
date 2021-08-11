<template>
  <div class="login-container">
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
            <span class="show-pwd">
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

        <div style="position: relative">
          <div class="tips">
            <span>Username : admin</span>
            <span>Password : any</span>
          </div>
          <div class="tips">
            <span style="margin-right: 18px">Username : editor</span>
            <span>Password : any</span>
          </div>
        </div>
      </div>
    </el-form>
  </div>
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

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */

/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
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
      color: $light_gray;
      -webkit-appearance: none;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.1);
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  overflow: hidden;
  width: 100%;
  min-height: 100%;
  background-color: $bg;

  .login-form {
    position: relative;
    overflow: hidden;
    width: 520px;
    max-width: 100%;
    margin: 0 auto;
    padding: 160px 35px 0;
  }

  .tips {
    margin-bottom: 10px;
    color: #fff;
    font-size: 14px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    display: inline-block;
    vertical-align: middle;
    width: 30px;
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
  }

  .title-container {
    position: relative;

    .title {
      margin: 0 auto 40px auto;
      color: $light_gray;
      font-weight: bold;
      font-size: 26px;
      text-align: center;
    }
  }

  .show-pwd {
    position: absolute;
    top: 7px;
    right: 10px;
    color: $dark_gray;
    font-size: 16px;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;

    @media only screen and (max-width: 470px) {
      display: none;
    }
  }
}
</style>

<route lang="yaml">
meta:
  title: Login
  layout: empty
</route>
