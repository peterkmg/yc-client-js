<template>
  <div style="padding: 0 15px" @click="toggleClick">
    <Icon
      :class="{ 'is-active': isActive }"
      icon="octicon:sidebar-expand-24"
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
  isActive: bool().def(false),
})

const emit = defineEmits(['toggleClick'])

const toggleClick = () => {
  emit('toggleClick')
}
</script>

<style lang="scss" scoped>
.iconify {
  transition: transform 0.6s ease-in-out;
  &.is-active {
    transform: rotate(180deg);
  }
}
</style>
