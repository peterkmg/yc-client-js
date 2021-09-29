<template>
  <a-layout class="h-screen" has-sider>
    <a-layout-sider
      v-model:collapse="app.sidebar"
      theme="light"
      class="sidebar"
      collapsible
    >
      Sider
    </a-layout-sider>
    <a-layout>
      <a-layout-header theme="light">
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
}
</style>
