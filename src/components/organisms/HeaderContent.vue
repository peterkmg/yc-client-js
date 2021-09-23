<template>
  <div id="wrapper" class="no-select">
    <div class="hamburger header-item" @click="app.toggleSidebar">
      <Icon
        :icon="app.isSidebarOpen ? icons.close : icons.open"
        style="transform: rotate(180deg)"
      />
    </div>
    <div class="right-menu">
      <div class="header-item" style="width: 50px">
        <Icon :icon="icons.fullscreen" />
      </div>
      <el-dropdown
        class="header-item"
        trigger="click"
        style="padding-left: 4px"
      >
        <div style="display: flex; justify-content: space-evenly; height: 100%">
          <Icon :icon="icons.user" style="width: 28px; margin-right: 4px" />
          <div style="align-self: center; pointer-events: none">
            <strong>{{ auth.userdata.username }}</strong>
          </div>
          <div style="align-self: end">
            <Icon
              :icon="icons.down"
              style="width: 16px; height: 16px; margin-right: 4px"
            />
          </div>
        </div>

        <template #dropdown>
          <el-dropdown-menu class="no-select">
            <router-link to="/profile">
              <el-dropdown-item>Профиль</el-dropdown-item>
            </router-link>
            <el-dropdown-item divided @click="signOut">
              Выйти
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus/es'
import useAppStore from '@/store/app'
import useAuthStore from '@/store/auth'

const auth = useAuthStore()
const app = useAppStore()

const icons = reactive({
  close: 'octicon:sidebar-collapse-24',
  open: 'octicon:sidebar-expand-24',
  fullscreen: 'majesticons:arrows-expand-line',
  user: 'uil:user-circle',
  down: 'majesticons:chevron-down',
})

const signOut = async() => {
  const error = await auth.signOut()
  if (error) ElMessage({ type: 'error', message: error.message })
}
</script>

<style lang="scss" scoped>
.iconify {
  width: 24px;
  height: 100%;
}

:deep(.header-item) {
  height: 100%;
  color: var(--el-text-color-regular);
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.03);
  }
}

#wrapper {
  display: flex;
  justify-content: space-between;
  height: 100%;
  > .hamburger {
    display: flex;
    justify-content: space-around;
    width: 50px;
  }
  > .right-menu {
    display: flex;
    justify-content: space-evenly;
  }
}
</style>
