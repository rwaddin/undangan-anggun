<script setup>
import {useBrideStore} from "@/stores/bride.js";
import {ref} from "vue";

const store = useBrideStore()

const copied = ref(false)
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    copied.value = true;
    setTimeout(() => copied.value = false, 2000);
  });
}
</script>

<template>
<img src="/images/bottom.webp" alt=""/>
<div class="p-5 py-20 bg-[#DAEFF2] flex flex-col gap-5 justify-center items-center">
  <h2 class="text-5xl font-engagement">Amplop Digital</h2>
  <p class="text-center">Doa restu anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
  </p>
  <br>
  <div class="w-3/4 flex flex-col gap-10">
    <div v-for="i in store.bride.wallets" class="h-40 rounded-xl text-white flex flex-col justify-between bg-gradient-to-bl from-sky-500 to-sky-800 w-full p-5">
      <div class="text-xl font-bold">{{ i.bank }}</div>
      <div>
        <div class="bottom-12 left-4 tracking-widest text-lg font-mono flex justify-between w-full">
          <span>{{i.number}}</span>
          <span @click="copyToClipboard(i.number)" class="cursor-pointer"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-copy"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg></span>
        </div>
        <div class="text-sm font-medium">
          {{i.name}}
        </div>
      </div>
    </div>
  </div>
</div>

<transition name="fade">
  <div v-if="copied" class="fixed top-6 right-5 bg-[#1C5278] text-white text-sm px-4 py-2 rounded z-9999">
    Nomor rekening disalin ✅
  </div>
</transition>

</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>