<template>
  <el-container class="app-wrapper">
    <el-aside>
      <AsideContent />
    </el-aside>

    <el-container class="main-container">
      <el-header class="header">
        <HeaderContent />
      </el-header>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import useAppStore from '@/store/app'

const appStore = useAppStore()
</script>

<style lang="scss" scoped>

.app-wrapper {
  > .el-aside {
    width: v-bind('appStore.getSidebarWidth');
    background-color: $menu-bg-color;
    transition: width 0.28s;
  }

  > .main-container {
    >.header {
      height: 50px;
      padding: 0;
      box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    }
  }
}
</style>
