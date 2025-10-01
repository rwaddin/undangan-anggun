import { defineStore } from 'pinia'
import bridesData from "@/assets/brides.json"
import {computed, ref} from "vue";

export const useBrideStore = defineStore('bride', ()=> {
  const _to = ref(null)
  const _bride = ref({})
  const _congrats = ref([
    {
      isAttending: false,
      name: "addin syaifudin",
      time: 1759309037,
      address: "Klaten",
      text: "Selamat kak",
    },
    {
      isAttending: true,
      name: "Marshanda",
      time: 1759309050,
      address: "Yogyakarta",
      text: "Samawa kak semoga menjadi keluarga yang sakinah mawaddah warahmah allohumma amiin ya rabbal ngalamin",
    },
    {
      isAttending: false,
      name: "Uzumaki Naruto",
      time: 1759309050,
      address: "Yogyakarta",
      text: "Samawa kak semoga menjadi keluarga yang sakinah mawaddah warahmah allohumma amiin ya rabbal ngalamin",
    },
  ])

  const bride = computed(() => _bride.value)
  const to = computed({
    set: (val) => {_to.value = val},
    get: () => _to.value.replace(/\b\w/g, char => char.toUpperCase())
  })
  const congrats = computed({
    set: (val) => {_congrats.value = val},
    get: () => _congrats.value,
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
    _congrats,
    _to,
    bride,
    congrats,
    setBride,
    to
  }
})