<template>
  <div>
    <TheAppbar v-if="appbar" />
    <div
      class="absolute top-[25%] left-[50%] translate-x-[-50%] translate-y-[-100%] text-black noSelect text-[20px] text-center"
    >
      <Transition>
        <div class="text-[22px] w-screen p-10 text-black" v-if="tab1">
          Welcome! I am Costas Loukopoulos, a unity developer based in Athens, Greece.
        </div>
      </Transition>
      <Transition>
        <div v-if="tab2">Crafting Immersive Experiences in VR, AR, and Indie Games</div>
      </Transition>

      <Transition>
        <div v-if="tab3">
          <div>Virtual diver</div>
          <button
            @click="(dialog.open = true), (dialog.component = 'Virtual Diver')"
            class="bg-white py-2 px-4"
          >
            Open dialog
          </button>
        </div>
      </Transition>

      <Transition>
        <div v-if="tab4">AR dark past</div>
      </Transition>

      <Transition>
        <div v-if="tab5">More about me</div>
      </Transition>

      <Transition>
        <div v-if="tab6">Contact</div>
      </Transition>

      <Transition>
        <div v-if="tab7">Garage</div>
      </Transition>
    </div>
    <TheLoader v-if="loader" />
    <UnityVue style="z-index: 1" width="100vw" height="100vh" :unity="unityContext" />
  </div>
</template>

<script setup>
import UnityWebgl from 'unity-webgl'
import UnityVue from 'unity-webgl/vue'

import TheLoader from '@/components/Util/TheLoader.vue'
import TheAppbar from '@/components/Layout/TheAppbar.vue'

import { ref } from 'vue'
import { useBaseStore } from '@/stores/base'
import { storeToRefs } from 'pinia'

const base = useBaseStore()
const { dialog } = storeToRefs(base)

const loader = ref(true)
const appbar = ref(false)
const tab1 = ref(false)
const tab2 = ref(false)
const tab3 = ref(false)
const tab4 = ref(false)
const tab5 = ref(false)
const tab6 = ref(false)
const tab7 = ref(false)
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
        loader.value = false
      }, 2500)
  })
  .on('create', () => {
    unityContext.setFullscreen(true)
  })
  .on('mounted', () => {
    unityContext.on('showDialog', (data) => {
      switch (data) {
        case 'Tab1Open':
          tab1.value = true
          break
        case 'Tab1Close':
          tab1.value = false
          break
        case 'Tab2Open':
          tab2.value = true
          break
        case 'Tab2Close':
          tab2.value = false
          break
        case 'Tab3Open':
          tab3.value = true
          break
        case 'Tab3Close':
          tab3.value = false
          break
        case 'Tab4Open':
          tab4.value = true
          break
        case 'Tab4Close':
          tab4.value = false
          break
        case 'Tab5Open':
          tab5.value = true
          break
        case 'Tab5Close':
          tab5.value = false
          break
        case 'Tab6Open':
          tab6.value = true
          break
        case 'Tab6Close':
          tab6.value = false
          break
        case 'Tab7Open':
          tab7.value = true
          break
        case 'Tab7Close':
          tab7.value = false
          break
        default:
          break
      }
    })
  })
</script>

<style>
* {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

canvas {
  cursor: grab !important;
}

.noSelect {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.noSelect:focus {
  outline: none !important;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
