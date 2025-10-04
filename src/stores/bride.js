import { defineStore } from 'pinia'
import bridesData from "@/assets/brides.json"
import {computed, ref} from "vue";

export const useBrideStore = defineStore('bride', ()=> {
  const _to = ref(null)
  const _bride = ref({})

  const bride = computed(() => _bride.value)
  const to = computed({
    set: (val) => {_to.value = val},
    get: () => _to.value.replace(/\b\w/g, char => char.toUpperCase())
  })

  const setBride = (brideName) => {
    if(typeof bridesData[brideName] !== 'undefined') {
      _bride.value = bridesData[brideName]
    }else{
      console.warn(`Bride "${brideName}" not found`)
    }
  }

  return {
    _bride,
    _to,
    bride,
    setBride,
    to
  }
})