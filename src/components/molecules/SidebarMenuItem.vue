<template></template>

<script lang="ts" setup>
import type { MenuItem } from '@/utils/parsers/menu'

const props = defineProps<{ item: MenuItem }>()
console.log(props.item)
</script>

<style lang="scss" scoped>
.iconify {
  width: 17px;
  height: 100%;
}
</style>
