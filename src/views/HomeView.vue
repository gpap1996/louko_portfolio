<template>
  <div>
    <div
      v-if="page == 'welcome'"
      class="w-screen h-screen bg-black flex items-center justify-center"
    >
      <button
        @click="onEnter"
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
        class="absolute top-[15%] left-[50%] translate-x-[-50%] text-white disable-text-select px-4 text-[20px] w-screen sm:w-auto sm:text-[23px] text-center flex flex-col items-center justify-center"
      >
        <Transition>
          <ThePopup
            v-if="popup.open"
            :type="popup.type"
            :content="popup.content"
            @openDialog="onOpenDialog"
          ></ThePopup>
        </Transition>
      </div>

      <TheLoader v-if="loader" :loadProgress="loadProgress" />
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
//Vue
import { computed, markRaw, reactive, ref } from 'vue'
import { useBaseStore } from '@/stores/base'

//Plugins
import UnityWebgl from 'unity-webgl'
import UnityVue from 'unity-webgl/vue'
import { useFullscreen } from '@vueuse/core'
import { isMobile } from 'mobile-device-detect'

///Components
import TheLoader from '@/components/Layout/TheLoader.vue'
import ThePopup from '@/components/Layout/ThePopup.vue'
import TheAppbar from '@/components/Layout/TheAppbar.vue'

const { toggle } = useFullscreen()

const base = useBaseStore()

const menu = computed(() => base.menu)
const page = ref('welcome')
const appbar = ref(false)
const popup = reactive({
  open: false,
  type: null,
  content: {}
})
const dialog = ref(false)
const dialogComponent = ref(null)
const loadProgress = ref(0)
const loader = ref(true)

const onEnter = () => {
  //toggling fullscreen if the device is mobile
  if (isMobile) toggle()
  page.value = 'home'
}

const onOpenDialog = (component) => {
  console.log('open')
  dialog.value = true
  dialogComponent.value = markRaw(component)
}

const onCloseDialog = () => {
  console.log('onclose')
  dialog.value = false
  dialogComponent.value = null
}

const onClearTab = () => {
  popup.open = false
  popup.type = null
  popup.content = {}
}

const onTabChange = (item) => {
  switch (item) {
    case 'Tab1Open':
      popup.open = true
      popup.type = 'text'
      popup.content.title =
        'Welcome! I am Costas Loukopoulos, a unity developer based in Athens, Greece.'
      break
    case 'Tab1Close':
      onClearTab()
      break
    case 'Tab2Open':
      popup.open = true
      popup.type = 'text'
      popup.content.title = 'Crafting Immersive Experiences in VR, AR, and Indie Games'
      break
    case 'Tab2Close':
      onClearTab()
      break
    case 'Tab3Open':
      popup.open = true
      popup.type = 'card'
      popup.content = {
        title: 'VIRTUAL DIVER',
        subtitle: 'An innovative platform for virtual underwater experiences.',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, debitis. Fuga culpa earum ex minima accusamus nihil cumque dolorem eum nemo. Eaque officia in, dolorem consequuntur minima nulla labore ipsum. Sequi, recusandae laborum. Quibusdam, modi! Aliquam nemo ut eos reiciendis optio porro voluptatibus eius cumque minima, incidunt sunt similique hic obcaecati iure quis soluta maiores ipsam? Sunt doloribus unde officia! Eos tempora earum officia inventore aperiam illo explicabo, reprehenderit alias fugit rem, totam non excepturi qui voluptas suscipit iusto commodi asperiores ipsum dignissimos temporibus sequi. Rerum voluptatem tempore labore voluptatibus. At qui omnis maxime impedit distinctio porro quae consequatur consequuntur animi recusandae ipsa, velit sit nemo laboriosam vitae nulla quas nobis suscipit? Molestiae, consequatur ut? Nesciunt quidem magni dicta nam. Incidunt repellendus rem quibusdam molestiae. Quisquam modi, corrupti doloribus beatae, reprehenderit quidem omnis perferendis itaque tempora consectetur quaerat officiis asperiores dicta dignissimos facilis. Dicta, numquam? Officia ducimus similique natus! Provident. Sunt facere incidunt cumque consectetur dignissimos asperiores ab pariatur provident ad? Ullam voluptatem cupiditate maiores, molestias repellendus dicta facilis animi excepturi explicabo, nulla nihil laborum est autem temporibus molestiae esse? Facere ea nihil iure commodi, vel id ad doloremque! Fuga, saepe eaque provident quia esse obcaecati delectus. Neque ab quod id magni accusamus veniam dignissimos earum sint! Fugit, molestias error. Architecto aspernatur obcaecati minima magni itaque quae possimus, sunt veniam quibusdam facilis ullam quaerat quia cupiditate at atque id adipisci? Cupiditate, id? Tenetur, quibusdam libero. Maxime obcaecati alias dignissimos aspernatur. Nulla, sed reprehenderit quas commodi vel nihil ad ratione officiis ea tenetur qui officia quae iusto? Sed quis autem fugit tempore modi? Cumque cum nesciunt eligendi vero suscipit! Numquam, sapiente! Eaque, repellat ducimus. Mollitia maxime numquam, repudiandae quas dolores magni aperiam et iure! Laborum assumenda, molestias nihil accusamus, magnam dolores corporis sunt distinctio explicabo ducimus suscipit excepturi quam, sapiente officiis.',
        image: '/images/diver.jpg'
      }
      break
    case 'Tab3Close':
      onClearTab()
      break
    case 'Tab4Open':
      popup.open = true
      popup.type = 'card'
      popup.content = {
        title: 'Augmented Reality',
        subtitle: 'The Dark Past ...',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, debitis. Fuga culpa earum ex minima accusamus nihil cumque dolorem eum nemo. Eaque officia in, dolorem consequuntur minima nulla labore ipsum. Sequi, recusandae laborum. Quibusdam, modi! Aliquam nemo ut eos reiciendis optio porro voluptatibus eius cumque minima, incidunt sunt similique hic obcaecati iure quis soluta maiores ipsam? Sunt doloribus unde officia! Eos tempora earum officia inventore aperiam illo explicabo, reprehenderit alias fugit rem, totam non excepturi qui voluptas suscipit iusto commodi asperiores ipsum dignissimos temporibus sequi. Rerum voluptatem tempore labore voluptatibus. At qui omnis maxime impedit distinctio porro quae consequatur consequuntur animi recusandae ipsa, velit sit nemo laboriosam vitae nulla quas nobis suscipit? Molestiae, consequatur ut? Nesciunt quidem magni dicta nam. Incidunt repellendus rem quibusdam molestiae. Quisquam modi, corrupti doloribus beatae, reprehenderit quidem omnis perferendis itaque tempora consectetur quaerat officiis asperiores dicta dignissimos facilis. Dicta, numquam? Officia ducimus similique natus! Provident. Sunt facere incidunt cumque consectetur dignissimos asperiores ab pariatur provident ad? Ullam voluptatem cupiditate maiores, molestias repellendus dicta facilis animi excepturi explicabo, nulla nihil laborum est autem temporibus molestiae esse? Facere ea nihil iure commodi, vel id ad doloremque! Fuga, saepe eaque provident quia esse obcaecati delectus. Neque ab quod id magni accusamus veniam dignissimos earum sint! Fugit, molestias error. Architecto aspernatur obcaecati minima magni itaque quae possimus, sunt veniam quibusdam facilis ullam quaerat quia cupiditate at atque id adipisci? Cupiditate, id? Tenetur, quibusdam libero. Maxime obcaecati alias dignissimos aspernatur. Nulla, sed reprehenderit quas commodi vel nihil ad ratione officiis ea tenetur qui officia quae iusto? Sed quis autem fugit tempore modi? Cumque cum nesciunt eligendi vero suscipit! Numquam, sapiente! Eaque, repellat ducimus. Mollitia maxime numquam, repudiandae quas dolores magni aperiam et iure! Laborum assumenda, molestias nihil accusamus, magnam dolores corporis sunt distinctio explicabo ducimus suscipit excepturi quam, sapiente officiis.',
        image: '/images/ar.jpg'
      }
      break
    case 'Tab4Close':
      onClearTab()
      break
    case 'Tab5Open':
      popup.open = true
      popup.type = 'card'
      popup.content = {
        title: 'About me',
        subtitle: 'A few thing about me.',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, debitis. Fuga culpa earum ex minima accusamus nihil cumque dolorem eum nemo. Eaque officia in, dolorem consequuntur minima nulla labore ipsum. Sequi, recusandae laborum. Quibusdam, modi! Aliquam nemo ut eos reiciendis optio porro voluptatibus eius cumque minima, incidunt sunt similique hic obcaecati iure quis soluta maiores ipsam? Sunt doloribus unde officia! Eos tempora earum officia inventore aperiam illo explicabo, reprehenderit alias fugit rem, totam non excepturi qui voluptas suscipit iusto commodi asperiores ipsum dignissimos temporibus sequi. Rerum voluptatem tempore labore voluptatibus. At qui omnis maxime impedit distinctio porro quae consequatur consequuntur animi recusandae ipsa, velit sit nemo laboriosam vitae nulla quas nobis suscipit? Molestiae, consequatur ut? Nesciunt quidem magni dicta nam. Incidunt repellendus rem quibusdam molestiae. Quisquam modi, corrupti doloribus beatae, reprehenderit quidem omnis perferendis itaque tempora consectetur quaerat officiis asperiores dicta dignissimos facilis. Dicta, numquam? Officia ducimus similique natus! Provident. Sunt facere incidunt cumque consectetur dignissimos asperiores ab pariatur provident ad? Ullam voluptatem cupiditate maiores, molestias repellendus dicta facilis animi excepturi explicabo, nulla nihil laborum est autem temporibus molestiae esse? Facere ea nihil iure commodi, vel id ad doloremque! Fuga, saepe eaque provident quia esse obcaecati delectus. Neque ab quod id magni accusamus veniam dignissimos earum sint! Fugit, molestias error. Architecto aspernatur obcaecati minima magni itaque quae possimus, sunt veniam quibusdam facilis ullam quaerat quia cupiditate at atque id adipisci? Cupiditate, id? Tenetur, quibusdam libero. Maxime obcaecati alias dignissimos aspernatur. Nulla, sed reprehenderit quas commodi vel nihil ad ratione officiis ea tenetur qui officia quae iusto? Sed quis autem fugit tempore modi? Cumque cum nesciunt eligendi vero suscipit! Numquam, sapiente! Eaque, repellat ducimus. Mollitia maxime numquam, repudiandae quas dolores magni aperiam et iure! Laborum assumenda, molestias nihil accusamus, magnam dolores corporis sunt distinctio explicabo ducimus suscipit excepturi quam, sapiente officiis.',
        image: '/images/aboutme.jpg'
      }
      break
    case 'Tab5Close':
      onClearTab()
      break
    case 'Tab6Open':
      popup.open = true
      popup.type = 'card'
      popup.content = {
        title: 'Contact',
        subtitle: 'Soling and boming',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, debitis. Fuga culpa earum ex minima accusamus nihil cumque dolorem eum nemo. Eaque officia in, dolorem consequuntur minima nulla labore ipsum. Sequi, recusandae laborum. Quibusdam, modi! Aliquam nemo ut eos reiciendis optio porro voluptatibus eius cumque minima, incidunt sunt similique hic obcaecati iure quis soluta maiores ipsam? Sunt doloribus unde officia! Eos tempora earum officia inventore aperiam illo explicabo, reprehenderit alias fugit rem, totam non excepturi qui voluptas suscipit iusto commodi asperiores ipsum dignissimos temporibus sequi. Rerum voluptatem tempore labore voluptatibus. At qui omnis maxime impedit distinctio porro quae consequatur consequuntur animi recusandae ipsa, velit sit nemo laboriosam vitae nulla quas nobis suscipit? Molestiae, consequatur ut? Nesciunt quidem magni dicta nam. Incidunt repellendus rem quibusdam molestiae. Quisquam modi, corrupti doloribus beatae, reprehenderit quidem omnis perferendis itaque tempora consectetur quaerat officiis asperiores dicta dignissimos facilis. Dicta, numquam? Officia ducimus similique natus! Provident. Sunt facere incidunt cumque consectetur dignissimos asperiores ab pariatur provident ad? Ullam voluptatem cupiditate maiores, molestias repellendus dicta facilis animi excepturi explicabo, nulla nihil laborum est autem temporibus molestiae esse? Facere ea nihil iure commodi, vel id ad doloremque! Fuga, saepe eaque provident quia esse obcaecati delectus. Neque ab quod id magni accusamus veniam dignissimos earum sint! Fugit, molestias error. Architecto aspernatur obcaecati minima magni itaque quae possimus, sunt veniam quibusdam facilis ullam quaerat quia cupiditate at atque id adipisci? Cupiditate, id? Tenetur, quibusdam libero. Maxime obcaecati alias dignissimos aspernatur. Nulla, sed reprehenderit quas commodi vel nihil ad ratione officiis ea tenetur qui officia quae iusto? Sed quis autem fugit tempore modi? Cumque cum nesciunt eligendi vero suscipit! Numquam, sapiente! Eaque, repellat ducimus. Mollitia maxime numquam, repudiandae quas dolores magni aperiam et iure! Laborum assumenda, molestias nihil accusamus, magnam dolores corporis sunt distinctio explicabo ducimus suscipit excepturi quam, sapiente officiis.',
        image: '/images/contact.jpg'
      }
      break
    case 'Tab6Close':
      onClearTab()
      break
    case 'Tab7Open':
      popup.open = true
      popup.type = 'card'
      popup.content = {
        title: 'Garage',
        subtitle: 'I make cars thanks',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, debitis. Fuga culpa earum ex minima accusamus nihil cumque dolorem eum nemo. Eaque officia in, dolorem consequuntur minima nulla labore ipsum. Sequi, recusandae laborum. Quibusdam, modi! Aliquam nemo ut eos reiciendis optio porro voluptatibus eius cumque minima, incidunt sunt similique hic obcaecati iure quis soluta maiores ipsam? Sunt doloribus unde officia! Eos tempora earum officia inventore aperiam illo explicabo, reprehenderit alias fugit rem, totam non excepturi qui voluptas suscipit iusto commodi asperiores ipsum dignissimos temporibus sequi. Rerum voluptatem tempore labore voluptatibus. At qui omnis maxime impedit distinctio porro quae consequatur consequuntur animi recusandae ipsa, velit sit nemo laboriosam vitae nulla quas nobis suscipit? Molestiae, consequatur ut? Nesciunt quidem magni dicta nam. Incidunt repellendus rem quibusdam molestiae. Quisquam modi, corrupti doloribus beatae, reprehenderit quidem omnis perferendis itaque tempora consectetur quaerat officiis asperiores dicta dignissimos facilis. Dicta, numquam? Officia ducimus similique natus! Provident. Sunt facere incidunt cumque consectetur dignissimos asperiores ab pariatur provident ad? Ullam voluptatem cupiditate maiores, molestias repellendus dicta facilis animi excepturi explicabo, nulla nihil laborum est autem temporibus molestiae esse? Facere ea nihil iure commodi, vel id ad doloremque! Fuga, saepe eaque provident quia esse obcaecati delectus. Neque ab quod id magni accusamus veniam dignissimos earum sint! Fugit, molestias error. Architecto aspernatur obcaecati minima magni itaque quae possimus, sunt veniam quibusdam facilis ullam quaerat quia cupiditate at atque id adipisci? Cupiditate, id? Tenetur, quibusdam libero. Maxime obcaecati alias dignissimos aspernatur. Nulla, sed reprehenderit quas commodi vel nihil ad ratione officiis ea tenetur qui officia quae iusto? Sed quis autem fugit tempore modi? Cumque cum nesciunt eligendi vero suscipit! Numquam, sapiente! Eaque, repellat ducimus. Mollitia maxime numquam, repudiandae quas dolores magni aperiam et iure! Laborum assumenda, molestias nihil accusamus, magnam dolores corporis sunt distinctio explicabo ducimus suscipit excepturi quam, sapiente officiis.',
        image: '/images/garage.jpg'
      }
      break
    case 'Tab7Close':
      onClearTab()
      break
    default:
      break
  }
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
    loadProgress.value = progress
    console.log(progress)
    if (progress == 1)
      setTimeout(() => {
        loader.value = false
      }, 2500)
  })
  .on('create', () => {})
  .on('mounted', () => {
    appbar.value = true
    unityContext.on('showDialog', (data) => {
      onTabChange(data)
    })
  })
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

canvas {
  cursor: grab !important;
  min-height: 100vh !important;
  overflow: hidden !important;
}

.disable-text-select {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.disable-text-select:focus {
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
