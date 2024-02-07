<template>
  <div>
    <router-view />
    <div v-if="dialog.open" class="fixed top-0 left-0 w-screen h-screen bg-black z-50">
      <component :is="VirtualDiver" @closeDialog="onCloseDialog"></component>
    </div>
  </div>
</template>

<script setup>
import { useBaseStore } from './stores/base'
import VirtualDiver from './components/Dialogs/VirtualDiver.vue'
import { storeToRefs } from 'pinia'

const base = useBaseStore()
const { dialog } = storeToRefs(base)

const onCloseDialog = () => {
  console.log('onclose')
  dialog.value.open = false
  dialog.value.component = null
}
</script>

<style lang="scss"></style>
