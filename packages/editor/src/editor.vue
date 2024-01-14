<script lang="ts" setup>
import NavMenu from '@HMagic/layouts/nav-menu.vue'
import type { MenuBarData } from './type'
defineOptions({
  name: 'HEditor'
})
// console.log(MenuBarData);
const props = withDefaults(defineProps<{ menu: MenuBarData }>(), {
  menu: () => ({})
})
// console.log(props)
</script>
<template>
  <NavMenu :data="props.menu" />
</template>
