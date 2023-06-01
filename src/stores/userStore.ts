import { defineStore } from 'pinia'

export const userinfoStore = defineStore('userinfo', {
  state: () => {
    return {
      token: localStorage.getItem('TOKEN') && ''
    }
  },
  actions: {},
  getters: {}
})
