<template>
  <el-scrollbar>
    <el-menu
      :default-active="app.path"
      :collapse="!app.isSidebarOpen"
      :unique-opened="false"
      :collapse-transition="false"
      :router="true"
    >
      <AsideMenuItem
        v-for="item in app.getMenuItems"
        :key="item.title"
        :item="item"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import useAppStore from '@/store/app'

const app = useAppStore()
</script>

<style lang="scss" scoped>
:deep(.el-scrollbar__view > .el-menu) {
  width: 100% !important;
  height: 100%;
  border: none;
  background-color: $menu-bg-color;

  > .el-menu-item,
  > .el-sub-menu > .el-sub-menu__title {
    color: $menu-text-color;
    &.is-active {
      color: $menu-active-text-color;
    }
    &:hover {
      background-color: $menu-hover-color !important;
    }
  }

  .el-menu--inline {
    background-color: $sub-menu-bg-color;
    > .el-menu-item,
    > .el-sub-menu > .el-sub-menu__title {
      color: $menu-text-color;
      &.is-active {
        color: $sub-menu-active-text-color;
      }
      &:hover {
        background-color: $sub-menu-hover-color !important;
      }
    }
  }
}
</style>
