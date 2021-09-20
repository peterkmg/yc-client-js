<template>
  <div class="topbar" style="border-top: 0;">
    <Hamburger
      id="hamburger-container"
      :is-active="appStore.isSidebarOpen"
      class="hamburger-container"
      @toggleClick="appStore.toggleSidebar"
    />

    <!-- <breadcrumb id="breadcrumb-container" class="breadcrumb-container" /> -->

    <HeaderRightMenu />
  </div>
</template>

<script lang="ts" setup>
import useAppStore from '@/store/modules/app'

const appStore = useAppStore()

// const isSidebarOpen: boolean = appStore.isSidebarOpen
// const toggleSideBar = () => appStore.toggleSidebar

// const pamparam: string = isSidebarOpen
</script>

<style lang="scss" scoped>
.topbar {
  position: relative;
  overflow: hidden;
  height: 50px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    float: left;
    height: 100%;
    line-height: 46px;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }
}
</style>
