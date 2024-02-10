<template>
  <div>
    <div
      v-if="page == 'welcome'"
      class="w-screen h-screen bg-black flex items-center justify-center"
    >
      <button
        @click="onChangePage"
        class="text-black bg-white text-[22px] py-2 px-6 rounded-lg cursor-pointer"
      >
        Enter Louko's Showcase
      </button>
    </div>
    <div v-else>
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
          <div v-if="tab == 'Skills'">
            Crafting Immersive Experiences in VR, AR, and Indie Games
          </div>
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
      <UnityVue
        width="100vw"
        height="100vh"
        tabindex="-1"
        :unity="unityContext"
        :class="dialog ? 'hidden' : 'block h-dvh'"
      />
      <div v-if="dialog" class="fixed top-0 left-0 w-screen h-screen bg-black z-50">
        <component :is="dialogComponent" @closeDialog="onCloseDialog"></component>
      </div>
    </div>
  </div>
</template>

<script setup>
import UnityWebgl from 'unity-webgl'
import UnityVue from 'unity-webgl/vue'
import { useFullscreen } from '@vueuse/core'
import VirtualDiver from '@/components/Dialogs/VirtualDiver.vue'
import TheLoader from '@/components/Util/TheLoader.vue'
import TheAppbar from '@/components/Layout/TheAppbar.vue'
import { isMobile } from 'mobile-device-detect'

import { markRaw, ref } from 'vue'

const dialog = ref(false)
const dialogComponent = ref(null)
const loader = ref(true)
const appbar = ref(false)
const tab = ref(null)
const page = ref('welcome')
const onOpenDialog = (component) => {
  dialog.value = true
  dialogComponent.value = markRaw(component)
}

const { toggle } = useFullscreen()

const onCloseDialog = () => {
  console.log('onclose')
  dialog.value = false
  dialogComponent.value = null
}

const onChangePage = () => {
  if (isMobile) toggle()
  page.value = 'home'
}

//webgl init
const unityContext = new UnityWebgl({
  loaderUrl:
    'https://firebasestorage.googleapis.com/v0/b/loukoshowcase.appspot.com/o/URPnoColWebGL.loader.js?alt=media&token=e9493e56-ec5b-4d0b-943b-a3f751f44823',
  dataUrl:
    'https://firebasestorage.googleapis.com/v0/b/loukoshowcase.appspot.com/o/webgl.data?alt=media&token=9244a6ba-c170-4df7-94ca-ab5297983410',
  frameworkUrl:
    'https://firebasestorage.googleapis.com/v0/b/loukoshowcase.appspot.com/o/build.framework.js?alt=media&token=754d9991-91b4-4b12-955b-9fab665dcc4b',
  codeUrl:
    'https://firebasestorage.googleapis.com/v0/b/loukoshowcase.appspot.com/o/build.wasm?alt=media&token=ebb56967-bfc2-438d-8094-8281c0e60f89'
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
    setTimeout(() => {}, 2500)

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
