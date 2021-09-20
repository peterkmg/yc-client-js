<template>
  <div style="padding: 0 15px" @click="toggleClick">
    <Icon
      :icon="isActive ? 'octicon:sidebar-collapse-24' : 'octicon:sidebar-expand-24'"
      width="24"
      height="24"
      style="vertical-align: middle"
      color="#5a5e66"
    />
  </div>
</template>

<script lang="ts" setup>
import { bool } from 'vue-types'

const props = defineProps({
  isActive: bool().def(true),
})

const emit = defineEmits(['toggleClick'])

const toggleClick = () => {
  emit('toggleClick')
}
</script>

<style lang="scss" scoped>
.iconify {
  transform: rotate(180deg);
}
</style>
