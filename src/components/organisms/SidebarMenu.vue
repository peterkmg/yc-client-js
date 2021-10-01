<template>
  <a-menu
    v-model:openKeys="v.keys.open"
    v-model:selectedKeys="v.keys.selected"
    mode="inline"
    class="h-screen nav-menu"
    selectable
  >
    <sidebar-menu-item v-for="item in menu" :key="item.title" :item="item" />
  </a-menu>
</template>

<script lang="ts" setup>
import useAppStore from '@/store/app'
import { MenuItem, parseRoute } from '@/utils/parsers/menu'
import { menuRoutes } from '@/router/routes'
/* icons */
import IconHome from '~icons/uil/home'
import IconDict from '~icons/uil/book-open'

const app = useAppStore()

const menu = shallowRef(Array<MenuItem>())

/* variables */
const v = reactive({
  keys: {
    open: [] as string[],
    selected: [] as string[],
  },
})
/* functions */
const f = {
  menu: {
    build: (): MenuItem[] => menuRoutes.map((route) => parseRoute(route)),
    iconize: (array: MenuItem[]) => {
      menu.value = array.map((i) => {
        if (i.path === '/home') i.icon = IconHome
        if (i.path === '/dict') i.icon = IconDict
        return i
      })
    },
  },
}

watch(
  () => v.keys.selected,
  () => console.log(v.keys.selected),
  { immediate: true },
)

onBeforeMount(() => f.menu.iconize(f.menu.build()))
</script>

<style lang="less" scoped>
.nav-menu {
  border: 0;
  background: @dark-grey;
}
</style>
