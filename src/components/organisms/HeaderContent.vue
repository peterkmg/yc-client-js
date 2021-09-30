<template>
  <div
    class="flex no-select"
    style="justify-content: space-between; height: 100%"
  >
    <div
      class="header-item flex"
      style="justify-content: center; width: 50px"
      @click="app.toggleSidebar"
    >
      <Icon
        :icon="app.sidebar ? icons.close : icons.open"
        style="transform: rotate(180deg)"
      />
    </div>
    <div class="flex" style="justify-content: space-evenly">
      <div
        class="header-item flex"
        style="justify-content: center; width: 40px"
      >
        <Icon :icon="icons.fullscreen" />
      </div>
      <div
        class="header-item flex"
        style="justify-content: center; width: 40px"
        @click="app.toggleEditMode"
      >
        <Icon :icon="app.allowEdit ? icons.unlock : icons.lock" />
      </div>
      <el-dropdown
        class="header-item flex"
        trigger="click"
        style="padding-left: 4px"
      >
        <div class="flex" style="justify-content: space-evenly; height: 100%">
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
  lock: 'uil:lock-alt',
  unlock: 'uil:lock-open-alt',
  fullscreen: 'majesticons:arrows-expand-line',
  user: 'uil:user-circle',
  down: 'majesticons:chevron-down',
})

const signOut = async() => {
  const error = await auth.signOut()
  if (error) ElMessage({ type: 'error', message: error.message })
}
</script>

<style lang="less" scoped></style>
