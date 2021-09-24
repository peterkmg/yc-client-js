<template>
  <el-container style="height: 100vh">
    <el-aside class="app-side" :class="{ collapsed: !app.sidebar }">
      <AsideContent />
    </el-aside>

    <el-container>
      <el-header class="app-header">
        <HeaderContent />
      </el-header>

      <el-main class="app-main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import useAppStore from '@/store/app'

const app = useAppStore()
</script>

<style lang="scss" scoped>
.app-header {
  height: $app-header-height;
  padding: 0;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.app-main {
  overflow: hidden;
  height: $app-main-height;
  max-height: $app-main-height;
  padding: 0;
}

.el-aside {
  width: $sidebar-open-width;
  background-color: $menu-bg-color;
  transition: width 0.28s;

  &.collapsed {
    width: $sidebar-collapsed-width;
  }
}
</style>
