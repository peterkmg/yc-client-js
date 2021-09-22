<template>
  <div id="wrapper">
    <div id="left">
      <Icon :icon="app.isSidebarOpen ? 'octicon:sidebar-collapse-24' : 'octicon:sidebar-expand-24'" />
    </div>
    <div id="right">
      <div style=" display: flex; justify-content: space-around;width: 50px;">
        <Icon icon="majesticons:arrows-expand-line" />
      </div>
      <div>
        <Icon v-if="auth.userdata.icon" :icon="auth.userdata.icon" />
        <strong>{{ auth.userdata.username }}</strong>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useAppStore from '@/store/app'
import useAuthStore from '@/store/auth'

const auth = useAuthStore()
const app = useAppStore()

</script>

<style lang="scss" scoped>
#wrapper {
  display: flex;
  justify-content: space-between;
  height: 100%;
}
#left {
  display: flex;
  justify-content: space-around;
  width: 50px;
  height: 100%;

  &:hover {
    background: rgba(0, 0, 0, 0.03);
  }
}
#right {
  display: flex;
  justify-content: space-evenly;
  height: 100%;
}
.iconify {
  width: 24px;
  height: 100%;
}
</style>
