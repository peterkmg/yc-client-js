<template>
  <div>
    <Icon
      :icon="isFullscreen ? 'local:exit-fullscreen' : 'local:fullscreen'"
      :width="19"
      style="vertical-align: -1.25em"
      color="#5a5e66"
      @click="toggle"
    />
  </div>
</template>

<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core'
const { isFullscreen, toggle } = useFullscreen()
const inlineIcon = ref(false)
</script>

<style scoped>
.screenfull-svg {
  vertical-align: -1.25em;
  width: 20px;
  height: 20px;
  cursor: pointer;
  fill: #5a5e66;
}
</style>
