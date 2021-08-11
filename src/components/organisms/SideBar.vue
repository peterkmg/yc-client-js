<template>
  <div class="sidebar-container">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <!-- <el-menu
        :default-active="activeMenu"
        :collapse="!getOpened"
        :background-color="refVariables.menuBg"
        :text-color="refVariables.menuText"
        :unique-opened="false"
        :active-text-color="refVariables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="item in permissionStore.routes"
          :key="item.path"
          :item="item"
          :is-nest="false"
          :base-path="item.path"
        />
      </el-menu> -->
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    // min-height: 400px;
    height: 100%;
  }
</style>
