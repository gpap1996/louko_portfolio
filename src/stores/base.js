import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBaseStore = defineStore('base', () => {
  const webglLoader = ref(true)

  return { webglLoader }
})
