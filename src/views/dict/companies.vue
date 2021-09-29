<template></template>

<script lang="ts" setup>
import { message } from 'ant-design-vue/es'
import type { CompanyEntry } from '@/api/dict/company'
import useAppStore from '@/store/app'
import api from '@/api'

const app = useAppStore()

/* variables */
const v = reactive({
  data: {
    raw: [] as CompanyEntry[],
  },
})
/* computed variables */
const c = {}
/* functions */
const f = {
  data: {
    get: async() => {
      const result = await api.dict.company.get()
      if (result.error) message.error(result.error)
      else if (result.data) v.data.raw = result.data
    },
    deleteSingle: async(index: number, id: string) => {
      const error = await api.dict.company.deleteSingle(id)
      if (error) message.error(error)
      else v.data.raw.splice(index, 1)
    },
  },
}

onBeforeMount(f.data.get)
</script>
