<template>
  <div>
    <TheAppbar v-if="appbar" />
    <div
      style="
        -webkit-text-stroke-width: 0.1px;
        -webkit-text-stroke-color: #1c1c1c;
        text-shadow: 0.7px 0.7px 0.7px #1c1c1c;
      "
      class="absolute top-[25%] left-[50%] translate-x-[-50%] translate-y-[-100%] text-white noSelect text-[20px] text-center"
    >
      <Transition>
        <div class="text-[22px] w-screen p-10" v-if="tab == 'Welcome'">
          Welcome! I am Costas Loukopoulos, a unity developer based in Athens, Greece.
        </div>
      </Transition>

      <Transition>
        <div v-if="tab == 'Skills'">Crafting Immersive Experiences in VR, AR, and Indie Games</div>
      </Transition>

      <Transition>
        <div v-if="tab == 'VirtualDiver'">
          <div>Virtual Diver</div>
          <button @click="onOpenDialog(VirtualDiver)" class="bg-white py-2 px-4 text-black">
            Open dialog
          </button>
        </div>
      </Transition>

      <Transition>
        <div v-if="tab == 'Ar'">AR dark past</div>
      </Transition>

      <Transition>
        <div v-if="tab == 'About'">More about me</div>
      </Transition>

      <Transition>
        <div v-if="tab == 'Contact'">Contact</div>
      </Transition>

      <Transition>
        <div v-if="tab == 'Garage'">Garage</div>
      </Transition>
    </div>
    <TheLoader v-if="loader" />
    <UnityVue tabindex="-1" :unity="unityContext" :class="dialog ? 'hidden' : 'block h-dvh'" />
    <div v-if="dialog" class="fixed top-0 left-0 w-screen h-screen bg-black z-50">
      <component :is="dialogComponent" @closeDialog="onCloseDialog"></component>
    </div>
  </div>
</template>

<script setup>
import UnityWebgl from 'unity-webgl'
import UnityVue from 'unity-webgl/vue'

import VirtualDiver from '@/components/Dialogs/VirtualDiver.vue'
import TheLoader from '@/components/Util/TheLoader.vue'
import TheAppbar from '@/components/Layout/TheAppbar.vue'

import { markRaw, ref } from 'vue'

const dialog = ref(false)
const dialogComponent = ref(null)
const loader = ref(true)
const appbar = ref(false)
const tab = ref(null)

const onOpenDialog = (component) => {
  dialog.value = true
  dialogComponent.value = markRaw(component)
}

const onCloseDialog = () => {
  console.log('onclose')
  dialog.value = false
  dialogComponent.value = null
}

//webgl init
const unityContext = new UnityWebgl({
  loaderUrl:
    'https://firebasestorage.googleapis.com/v0/b/loukoshowcase.appspot.com/o/URPnoColWebGL.loader.js?alt=media&token=d80b1517-3ee7-453b-b18a-a746c5a11a07',
  dataUrl:
    'https://firebasestorage.googleapis.com/v0/b/loukoshowcase.appspot.com/o/webgl.data?alt=media&token=afccfacc-b7c5-43c1-8ce9-78329dad53ad',
  frameworkUrl:
    'https://firebasestorage.googleapis.com/v0/b/loukoshowcase.appspot.com/o/build.framework.js?alt=media&token=e155c032-0342-41b7-9684-b99caa78d3d3',
  codeUrl:
    'https://firebasestorage.googleapis.com/v0/b/loukoshowcase.appspot.com/o/build.wasm?alt=media&token=d76973df-7963-4622-8b6a-3dbebda46eca'
})

//webgl listeners
unityContext
  .on('progress', (progress) => {
    if (progress == 1)
      setTimeout(() => {
        loader.value = false
      }, 2500)
  })
  .on('create', () => {})
  .on('mounted', () => {
    if (window.innerWidth <= 480) {
      setTimeout(() => {
        unityContext.setFullscreen({ enabled: true })
      }, 2500)
    }

    unityContext.on('showDialog', (data) => {
      switch (data) {
        case 'Tab1Open':
          tab.value = 'Welcome'
          break
        case 'Tab1Close':
          tab.value = null
          break
        case 'Tab2Open':
          tab.value = 'Skills'
          break
        case 'Tab2Close':
          tab.value = null
          break
        case 'Tab3Open':
          tab.value = 'VirtualDiver'
          break
        case 'Tab3Close':
          tab.value = null
          break
        case 'Tab4Open':
          tab.value = 'Ar'
          break
        case 'Tab4Close':
          tab.value = null
          break
        case 'Tab5Open':
          tab.value = 'About'
          break
        case 'Tab5Close':
          tab.value = null
          break
        case 'Tab6Open':
          tab.value = 'Contact'
          break
        case 'Tab6Close':
          tab.value = null
          break
        case 'Tab7Open':
          tab.value = 'Garage'
          break
        case 'Tab7Close':
          tab.value = null
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
  min-height: 100dvh !important;
  min-height: 100vh !important;
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
