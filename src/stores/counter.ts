import { defineStore } from 'pinia'

export const useStepCounter = defineStore('stepCounter', {
  state: () => {
    return { step: 1 }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.step++
    },
    decrement() {
      this.step--
    },
  },
})
