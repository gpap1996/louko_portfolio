<script setup>
import UnityWebgl from 'unity-webgl'
import UnityVue from 'unity-webgl/vue'

import TheLoader from '@/components/TheLoader.vue'
import TheAppbar from '@/components/TheAppbar.vue'

import { ref } from 'vue'
import { useBaseStore } from '@/stores/base'
import { storeToRefs } from 'pinia'

const dialog = ref(true)
const header = ref(false)
const { webglLoader } = storeToRefs(useBaseStore())
//webgl init
const unityContext = new UnityWebgl({
  loaderUrl: '/carwebgl/URPwebGLTest.loader.js',
  dataUrl: '/carwebgl/webgl.data',
  frameworkUrl: '/carwebgl/build.framework.js',
  codeUrl: '/carwebgl/build.wasm'
})

//webgl listeners
unityContext
  .on('progress', (progress) => {
    if (progress == 1)
      setTimeout(() => {
        webglLoader.value = false
      }, 2500)
  })
  .on('mounted', () => {
    unityContext.on('showDialog', (data) => {
      if (data == 'Tab1Open') header.value = true
      else if (data == 'Tab1Close') header.value = false
    })
  })
</script>

<template>
  <div>
    <TheAppbar />
    <TheLoader v-if="dialog" @closeDialog="dialog = false" />
    <UnityVue width="100vw" height="100vh" :unity="unityContext" />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

canvas {
  cursor: grab !important;
}
</style>
