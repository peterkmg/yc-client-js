<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :collapse="!appStore.isSidebarOpen"
      :background-color="theme['menu-bg-color']"
      :text-color="theme['menu-text-color']"
      :unique-opened="false"
      :active-text-color="theme['menu-active-text-color']"
      :collapse-transition="false"
      :router="true"
    >
      <AsideMenuItem
        v-for="item in appStore.getMenuItems"
        :key="item.title"
        :item="item"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { themeVariables } from '@/config/theme'
import useAppStore from '@/store/app'

const appStore = useAppStore()
const theme = computed(() => themeVariables)

</script>

<style lang="scss" scoped>
.scrollbar-wrapper {
  height: 100%;
  >.el-scrollbar__view {
    height: 100%;

    >.el-menu {
      border: 0;
    }
  }
}

</style>
