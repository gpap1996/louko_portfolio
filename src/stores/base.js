import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBaseStore = defineStore('base', () => {
  const menu = ref(false)
  return { menu }
})
