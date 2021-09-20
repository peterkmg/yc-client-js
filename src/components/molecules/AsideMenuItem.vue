<template>
  <el-sub-menu class="menuitem" v-if="item.children" :index="item.index">
    <template #title>
      <Icon v-if="item.icon" :icon="item.icon" />
      <span class="menu-item-title">{{ item.title }}</span>
    </template>
    <AsideMenuItem
      v-for="child in item.children"
      :key="child.title"
      :item="child"
    />
  </el-sub-menu>
  <el-menu-item class="menuitem" v-else :index="item.index">
    <Icon v-if="item.icon" :icon="item.icon" />
    <template #title>
      <span class="menu-item-title">{{ item.title }}</span>
    </template>
  </el-menu-item>
</template>

<script lang="ts" setup>
import type { MenuMapItem } from '@/config/menuMap'

const props = withDefaults(defineProps<{ item: MenuMapItem }>(),{})

</script>

<style lang="scss" scoped>
.iconify {
  width: 24px;
  height: 24px;
}

.menu-item-title {
  padding-left: 10px;
  font-size: 16px;
}
.menuitem {
  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
}
</style>
