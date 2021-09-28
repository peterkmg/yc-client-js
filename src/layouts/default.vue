<template>
  <a-layout-sider v-model:collapse="app.sidebar" collapsible>
    Sider
  </a-layout-sider>
  <a-layout>
    <a-layout-header>Header</a-layout-header>
    <a-layout-content>Content</a-layout-content>
  </a-layout>
</template>

<script lang="ts" setup>
import useAppStore from '@/store/app'

const app = useAppStore()
</script>

<style lang="less" scoped></style>
