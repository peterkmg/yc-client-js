<template>
  <div class="topbar no-select">
    <hamburger
      id="hamburger-container"
      :is-active="appStore.isSidebarOpen"
      class="hamburger-container"
      @toggleClick="appStore.toggleSidebar"
    />

    <!-- <breadcrumb id="breadcrumb-container" class="breadcrumb-container" /> -->

    <TopBarRightMenu />
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
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

    .hamburger-container {
      line-height: 46px;
      height: 100%;
      float: left;
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
