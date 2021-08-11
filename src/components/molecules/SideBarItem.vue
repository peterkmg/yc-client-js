<template>
  <em v-if="isIcon" :class="[icon, 'sub-el-icon']" />
  <svg-icon v-else-if="icon" :icon-class="icon" />
  <span v-if="title">{{ title }}</span>
</template>

<script lang="ts" setup>

interface Props {
  icon?: string | unknown
  title?: string | unknown
}

const props = withDefaults(defineProps<Props>(), {})

const isIcon = computed(() => (props.icon as string)?.includes('el-icon'))
</script>
