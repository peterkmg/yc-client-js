<template>
  <a-config-provider :locale="ru">
    <router-view />
  </a-config-provider>
</template>

<script lang="ts" setup>
import ru from 'ant-design-vue/es/locale/ru_RU'
import useTitleHook from '@/utils/hooks/useTitle'
import useAuthStateChangeHook from '@/utils/hooks/useAuthStateChange'

useTitleHook()
useAuthStateChangeHook()
</script>
