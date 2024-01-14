<script lang="ts" setup>
import type { MenuButton } from '../type'
// const props = withDefaults(defineProps<{ menu: MenuBarData }>(), {
//     menu: () => {()}
// })
const props = withDefaults(
  defineProps<{
    data: {
      left: MenuButton[]
      right: MenuButton[]
      center: MenuButton[]
    }
  }>(),
  {
    data: () => ({ left: [], right: [], center: [] })
  }
)

console.log(Object.keys(props.data))
</script>
<template>
  <div class="nav-menu-wrapper">
    <template v-for="blockItem in props.data" :key="blockItem">
      <div class="nav-menu-block" v-for="item in blockItem" :key="item">
        <div class="nav-menu-item" v-if="item.type === 'text'">
          {{ item.text }}
        </div>
      </div>
    </template>
  </div>
</template>
<style scoped lang="less">
.nav-menu-wrapper {
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(16, 16, 20);
  min-height: 35px;
  color: #fff;
}
</style>
