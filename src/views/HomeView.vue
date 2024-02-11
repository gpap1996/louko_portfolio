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
        :class="menu ? '-z-10' : ''"
        class="absolute top-[15%] left-[50%] translate-x-[-50%] text-white noSelect px-4 text-[20px] w-screen sm:w-auto sm:text-[23px] sm:text-center flex flex-col items-center justify-center"
      >
        <Transition>
          <div v-if="tab == 'Welcome'">
            Welcome! I am Costas Loukopoulos, a unity developer based in Athens, Greece.
          </div>
        </Transition>

        <Transition>
          <div class="" v-if="tab == 'Skills'">
            Crafting Immersive Experiences in VR, AR, and Indie Games
          </div>
        </Transition>

        <Transition>
          <div v-if="tab == 'VirtualDiver'" class="flex flex-col items-center sm:w-[80%]">
            <div class="flex items-center justify-center gap-4 mb-2 text-start">
              <div>
                <div class="virtual-diver-image"></div>
              </div>
              <div class="flex flex-col">
                <div class="font-bold">Virtual Diver</div>
                <div class="text-[16px] sm:text-[18px]">
                  An innovative platform for virtual underwater experiences.
                </div>
              </div>
            </div>
            <button
              @click="onOpenDialog(VirtualDiver)"
              class="bg-white py-2 px-4 text-black mt-2 rounded-3xl w-full text-[14px] sm:text-[18px] flex items-center justify-center"
            >
              VIEW PROJECT
              <div class="mdi mdi-arrow-right ml-1"></div>
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
        :class="dialog ? 'hidden' : 'block'"
        width="100vw"
        height="100vh"
        tabindex="-1"
        :unity="unityContext"
      />
      <div v-if="dialog" class="absolute top-0 left-0 min-h-screen h-auto bg-black">
        <component
          v-motion
          :initial="{
            opacity: 0,
            transition: {
              duration: 300
            }
          }"
          :enter="{
            opacity: 1,
            transition: {
              duration: 300
            }
          }"
          :is="dialogComponent"
          @closeDialog="onCloseDialog"
        ></component>
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

import { computed, markRaw, ref } from 'vue'
import { useBaseStore } from '@/stores/base'
const base = useBaseStore()
const menu = computed(() => base.menu)
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
  loaderUrl: '/URPnoColWebGL.loader.js',
  dataUrl: '/URPnoColWebGL.data.br',
  frameworkUrl: '/URPnoColWebGL.framework.js.br',
  codeUrl: '/URPnoColWebGL.wasm.br'
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
    appbar.value = true
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
  /* overflow-x: hidden; */
}

canvas {
  cursor: grab !important;
  min-height: 100vh !important;
  overflow: hidden !important;
}

.virtual-diver-image {
  background: url('@/assets/images/diver1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 12px;
  width: 100px;
  min-width: 100px;
  height: 100px;
  display: flex;
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
