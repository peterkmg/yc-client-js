<template>
  <a-menu
    v-model:openKeys="v.keys.open"
    v-model:selectedKeys="v.keys.selected"
    selectable
  >
    <sidebar-menu-item />
  </a-menu>
</template>

<script lang="ts" setup>
import useAppStore from '@/store/app'

const app = useAppStore()

/* variables */
const v = reactive({
  keys: {
    open: [] as string[],
    selected: [] as string[],
  },
})
</script>

<style lang="less" scoped></style>
