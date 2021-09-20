<template>
  <el-container class="right-menu">
    <screenfull class="right-menu-item" />
    <el-dropdown class="right-menu-item" trigger="click">
      <div style="height: inherit">
        <Icon icon="ci:user-circle" width="34" style="vertical-align: -2em" />
        <strong style="vertical-align: -1.2em; padding: 3px">{{
          userStore.getUsername || 'Petr Komogortsev'
        }}</strong>
        <Icon
          icon="ant-design:caret-down-filled"
          style="vertical-align: -2.4em"
        />
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <router-link to="/profile">
            <el-dropdown-item>Профиль пользователя</el-dropdown-item>
          </router-link>
          <el-dropdown-item divided @click="logout">
            <span style="display: block">Выход</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-container>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import useUserStore from '@/store/modules/user'

const userStore = useUserStore()
const router = useRouter()

const logout = () => {
  userStore.$reset()
  router.push('/login')
}
</script>

<style lang="scss" scoped>
.right-menu {
  float: right;
  height: 100%;

  :deep(.right-menu-item) {
    align-items: baseline;
    height: 100%;
    padding: 0 8px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
}
</style>
