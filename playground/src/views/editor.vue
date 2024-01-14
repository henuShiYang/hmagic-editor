<script setup lang="ts">
import type { MenuBarData } from '@HMagic/editor'

const menu: MenuBarData = {
  left: [
    {
      type: 'text',
      text: 'HENU魔方'
    }
  ],
  center: ['delete', 'undo', 'redo', 'guides', 'rule', 'zoom'],
  right: [
    {
      type: 'button',
      text: '预览'
      // icon: Connection,
      // handler: () => {
      //   previewVisible.value = true
      // }
    },
    {
      type: 'button',
      text: '保存'
      // icon: Coin,
      // handler: (service) => {
      //   localStorage.setItem(
      //     'magicUiConfig',
      //     serialize(toRaw(value.value), {
      //       space: 2,
      //       unsafe: true
      //     }).replace(/"(\w+)":\s/g, '$1: ')
      //   )
      //   service?.editorService.resetModifiedNodeId()
      //   ElMessage.success('保存成功')
      // }
    },
    '/',
    {
      type: 'button',
      icon: Document,
      tooltip: '源码'
      // handler: (service) => service?.uiService.set('showSrc', !service?.uiService.get('showSrc'))
    }
  ]
}
</script>

<template>
  <HEditor :menu="menu" />
</template>
