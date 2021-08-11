<template>
  <router-view />
</template>

<script lang="ts" setup>
import { useTitle } from '@vueuse/core'
import { useRouter } from 'vue-router'
import { addCollection } from '@iconify/vue'
import { APP_NAME } from './config/constants'
import localCollections from '@/assets/svg'

addCollection(localCollections)

const pageTitle = useTitle(APP_NAME)
const { currentRoute } = useRouter()

watch(
  () => currentRoute.value.path,
  () =>
    currentRoute.value.meta?.title
      ? (pageTitle.value = `${currentRoute.value.meta.title} - ${pageTitle.value}`)
      : pageTitle.value,
  { immediate: true },
)
</script>

<style lang="scss">
@import '@/styles/base.scss';
</style>
