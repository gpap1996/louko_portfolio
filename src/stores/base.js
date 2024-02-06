import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useBaseStore = defineStore('base', () => {
  const dialog = reactive({
    open: false,
    component: 'none'
  })

  return { dialog }
})
