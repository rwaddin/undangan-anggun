<script setup>
import {onMounted, ref, watchEffect} from 'vue';
import Splash from "@/components/splash.vue";
import Bride from "@/components/bride.vue";
import Schedule from "@/components/schedule.vue";
import Gift from "@/components/gift.vue";
import Congratulation from "@/components/congratulation.vue";
import Footer from "@/components/footer.vue";
import {useBrideStore} from "@/stores/bride.js";
import {useRoute} from "vue-router";

const route = useRoute();
const store  = useBrideStore()
const is_open = ref(false);
// const to = ref(null);

watchEffect(()=>{
  console.log(route.query)
  store.to = route?.query.to ? route.query.to : "Sahabat";
})

onMounted(() => {
  store.setBride("anggunfery")
})
</script>

<template>
  <div class="w-screen h-screen overflow-hidden  bg-gradient-to-b from-[#bacbd6] to-[#497493]">
    <div class="md:grid md:grid-cols-3">
      <div class="md:col-start-2 bg-gradient-to-b from-[#bacbd6] to-[#497493] h-screen overflow-y-auto flex items-center justify-center flex-col gap-5 shadow" v-if="!is_open">
        <div class="flex flex-col justify-between items-center h-full my-10">
          <div class="text-center">
            <img src="/images/dove.png" class="w-50" loading="lazy" alt="dove" />
            <p class="mt-5">THE WEDDING OF</p>
            <p class="text-3xl font-bold">{{ store.bride.boyUname }} & {{ store.bride.girlUname }}</p>
          </div>
          <div class="flex flex-col items-center gap-3">
            <img src="/images/bride.png" class="w-50" loading="lazy" alt="bride" />
            <div class="flex gap-3 justify-center ">
              <div class="bg-[#1c5278] h-16 w-16 text-white font-rochester flex justify-center items-center rounded-full">0 Hari</div>
              <div class="bg-[#1c5278] h-16 w-16 text-white font-rochester flex justify-center items-center rounded-full">11 Jam</div>
              <div class="bg-[#1c5278] h-16 w-16 text-white font-rochester flex justify-center items-center rounded-full">11 Menit</div>
            </div>
          </div>
          <div class="flex flex-col gap-5 items-center">
            <p class="text-center">Kepada Yth <br> Bapak/Ibu/Saudara/i :</p>
            <p class="font-bold text-2xl">{{ store.to }}</p>
            <button @click="is_open = true" class="btn btn-dash  hover:text-white w-1/2"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-mail-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.5 19h-5.5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4" /><path d="M3 7l9 6l2.983 -1.989l6.017 -4.011" /><path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" /></svg> Buka Undangan</button>
            <p class="mt-5 px-20 text-center text-sm text-gray-200">Mohon maaf jika ada kesalahan dalam penulisan nama dan gelar</p>
          </div>
        </div>
      </div>
      <div class="col-start-2 h-screen overflow-y-auto flex flex-col" v-else>
        <splash/>
        <bride/>
        <schedule/>
        <gift/>
        <congratulation/>
        <Footer/>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
