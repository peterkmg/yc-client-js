<template>
  <div>
    <h3>Forever Empty Dashboard. Icon is {{ userStore.getUserIcon }}</h3>
  </div>
  <div>
    <el-button type="primary" @click="changeIcon">
      Change Icon
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import useUserStore from '@/store/modules/user'

const userStore = useUserStore()

const otherIcon = ref('local:user')

const changeIcon = () => {
  const oldIcon = userStore.getUserIcon
  userStore.changeUserIcon(otherIcon.value)
  otherIcon.value = oldIcon
}
</script>
