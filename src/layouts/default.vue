<template>
  <el-container class="app-wrapper">
    <el-aside>
      <AsideContent />
    </el-aside>

    <el-container class="main-container">
      <el-header style="padding: 0; border-top: 0;">
        <HeaderContent />
      </el-header>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import useAppStore from '@/store/modules/app'

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
    position: relative;

  }
}
</style>
