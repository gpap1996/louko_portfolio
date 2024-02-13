<template>
  <div>
    <div v-if="props.type == 'card'">
      <div class="flex flex-col items-center">
        <div class="flex items-center justify-center gap-4 mb-2 text-start">
          <div>
            <div class="virtual-diver-image"></div>
          </div>
          <div class="flex flex-col">
            <div @click="$emit('openDialog', VirtualDiver)" class="flex cursor-pointer">
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

const props = defineProps({
  type: String,
  content: Object
})
</script>

<style lang="scss" scoped></style>
