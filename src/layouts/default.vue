<template>
  <a-layout class="h-screen" has-sider>
    <a-layout-sider v-model:collapse="app.sidebar" class="sidebar">
      <sidebar-menu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="bg-white">
        Header
      </a-layout-header>
      <a-layout-content>Content</a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import useAppStore from '@/store/app'

const app = useAppStore()
</script>

<style lang="less" scoped>
.sidebar {
  background: @dark-grey;
}
</style>
