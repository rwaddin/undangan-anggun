<script setup>
import {useBrideStore} from "@/stores/bride.js";

const store = useBrideStore()
</script>

<template>
  <div class="flex flex-col w-full text-center gap-5 bg-red-100 pt-10">
    <div class="flex flex-col w-full gap-3">
      <p>Atas kehadiran dan do'a restu dari Bapak/ibu :</p>
      <p class="text-xl font-bold font-poppins">{{store.to}}</p>
      <p>kami ucapkan terima kasih.</p>
    </div>
    <br>
    <br>
    <br>
    <p class=" text-xl font-cookie">Wassalamu’alaikum Wr. Wb.</p>
    <p>Turut berbahagia, <br>Segenap keluarga besar</p>
    <p class="text-5xl mt-5 font-engagement">{{store.bride.boy}} <br>{{store.bride.girl}}</p>
    <div class="w-full bg-gradient-to-br from-blue-50 to-blue-100 py-4 flex justify-between px-2 font-poppins mt-10">
      <div class="flex gap-3">Make with <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="red"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-heart-spark"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.537 19.542l-7.037 -6.97a5 5 0 1 1 7.5 -6.566a5 5 0 0 1 8.212 5.693" /><path d="M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5" /></svg> by addin</div>
      <div class="flex gap-3">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-mail-spark"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5" /><path d="M11.5 19h-6.5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5" /><path d="M3 7l9 6l9 -6" /></svg>
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>