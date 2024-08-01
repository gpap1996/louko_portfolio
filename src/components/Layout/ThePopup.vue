<template>
  <div>
    <div v-if="props.type == 'card'">
      <div class="flex flex-col items-center">
        <div class="flex items-center justify-center gap-4 mb-2 text-start">
          <div>
            <div
              v-if="props.content.title != 'VIRTUAL DIVER' && props.content.image"
              :style="`background: url(${content.image});  background-size: cover; background-repeat: no-repeat; background-position: center; border-radius: 12px; width: 100px; min-width: 100px; height: 100px; display: flex;`"
            ></div>
            <img v-else :src="props.content.image" />
          </div>
          <div class="flex flex-col">
            <div @click="onOpenDialog" class="flex cursor-pointer">
              <div class="font-bold">{{ props.content.title }}</div>
              <div class="mdi mdi-arrow-right ml-1"></div>
            </div>
            <div class="text-[16px] sm:text-[18px]">
              {{ props.content.subtitle }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="props.type == 'text'">
      {{ props.content.title }}
    </div>
  </div>
</template>

<script setup>
import VirtualDiver from '@/components/Dialogs/VirtualDiver.vue'
import AugmentedReality from '@/components/Dialogs/AugmentedReality.vue'
import AboutMe from '@/components/Dialogs/AboutMe.vue'
import ContactMe from '@/components/Dialogs/ContactMe.vue'
import LoukosGarage from '@/components/Dialogs/LoukosGarage.vue'

const props = defineProps({
  type: String,
  content: Object
})

const emit = defineEmits('openDialog')
const onOpenDialog = () => {
  switch (props.content.title) {
    case 'VIRTUAL DIVER':
      emit('openDialog', VirtualDiver)
      break

    case 'Augmented Reality':
      emit('openDialog', AugmentedReality)
      break

    case 'About me':
      emit('openDialog', AboutMe)
      break

    case 'Contact':
      emit('openDialog', ContactMe)
      break

    case "Louko's Garage":
      emit('openDialog', LoukosGarage)
      break

    default:
      break
  }
}
</script>

<style lang="scss" scoped></style>
