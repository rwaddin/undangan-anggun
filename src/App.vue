<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
import soundUrl from "@/assets/Raisa-AwalKisahSelamanya.mp3";
import VueCountdown from '@chenfengyuan/vue-countdown';

import {onMounted, ref, watchEffect} from 'vue';
import Splash from "@/components/splash.vue";
import Bride from "@/components/bride.vue";
import Schedule from "@/components/schedule.vue";
import Gift from "@/components/gift.vue";
import Congratulation from "@/components/congratulation.vue";
import Footer from "@/components/footer.vue";
import {useBrideStore} from "@/stores/bride.js";
import {useRoute} from "vue-router";
import BottomNavbar from "@/components/BottomNavbar.vue";

const audio = ref(new Audio(soundUrl));

const route = useRoute();
const store  = useBrideStore()
const is_open = ref(false);
const is_sound_play = ref(false)

const countdown = () => {
  const now = new Date();
  const day = new Date("2025/10/14 09:00:00");
  return day-now;
}

const onOpen = () => {
  audio.value.play().catch(err => {
    console.warn("Playback blocked (needs user gesture):", err);
  });
  is_open.value = true;
  is_sound_play.value = true;
}

watchEffect(()=>{
  // if (typeof route.query.to === "undefined" ){
  //   return location.href = "https://addin.web.id"
  // }
  store.to = route?.query.to ? route.query.to : "Sahabat";
})

onMounted(() => {
  store.setBride("anggunfery")
  AOS.init({
    delay: 200,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  })
})
</script>

<template>
  <div class="bg-gradient-to-tr from-[#bacbd6] to-[#497493]">

    <div class="md:grid md:grid-cols-3">
      <div class="md:col-start-2 bg-gradient-to-b from-[#bacbd6] to-[#497493] h-screen overflow-y-auto flex items-center justify-center flex-col gap-5 shadow" v-if="!is_open">
        <div class="flex flex-col justify-between items-center h-full my-10">
          <div class="text-center">
            <img src="/images/dove.png" class="w-50" loading="lazy" alt="dove" />
            <p class="mt-5" data-aos="fade-up">THE WEDDING OF</p> <br>
            <p class="text-4xl font-lobster-two font-bold" data-aos="fade-up" data-aos-delay="300">{{ store.bride.boyUname }} & {{ store.bride.girlUname }}</p>
          </div>
          <div class="flex flex-col items-center gap-3">
            <img src="/images/bride.png" class="w-50" loading="lazy" alt="bride" />
            <vue-countdown :time="countdown()" v-slot="{ days, hours, minutes, seconds }">
              <div class="flex gap-3 justify-center">
                <div class="bg-[#1c5278] h-16 w-16 text-white flex justify-center flex-col items-center rounded"><span class="text-xl font-bold">{{days}}</span>  <span class="text-xs">Hari</span></div>
                <div class="bg-[#1c5278] h-16 w-16 text-white flex justify-center flex-col items-center rounded"><span class="text-xl font-bold">{{hours}}</span>  <span class="text-xs">Jam</span></div>
                <div class="bg-[#1c5278] h-16 w-16 text-white flex justify-center flex-col items-center rounded"><span class="text-xl font-bold">{{minutes}}</span>  <span class="text-xs">Menit</span></div>
                <div class="bg-[#1c5278] h-16 w-16 text-white flex justify-center flex-col items-center rounded"><span class="text-xl font-bold">{{seconds}}</span>  <span class="text-xs">Detik</span></div>
              </div>
            </vue-countdown>

          </div>
          <div class="flex flex-col gap-5 items-center">
            <p class="text-center">Kepada Yth <br> Bapak/Ibu/Saudara/i :</p>
            <p class="font-bold text-3xl font-quicksand text-gray-100" data-aos="fade-up" data-aos-delay="300">{{ store.to }}</p>
            <button @click="onOpen()" class="btn btn-soft bg-[#1c5278] text-white w-1/2"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-mail-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.5 19h-5.5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4" /><path d="M3 7l9 6l2.983 -1.989l6.017 -4.011" /><path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" /></svg> Buka Undangan</button>
            <p class="mt-5 px-20 text-center text-sm text-gray-200">Mohon maaf jika ada kesalahan dalam penulisan nama dan gelar</p>
          </div>
        </div>
      </div>
      <div class="md:col-start-2 md:flex md:flex-col bg-sky-200" v-else>
        <div class="fixed h-10 w-10 flex justify-center items-center bottom-20 right-2 z-9999">
          <div class="rounded-full p-2 bg-[#1C5278] text-white" :class="is_sound_play ? 'animate-[spin_3s_linear_infinite] ':''">
            <svg @click="audio.play();is_sound_play=true" v-if="!is_sound_play" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-disc-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20.044 16.04a9 9 0 0 0 -12.082 -12.085m-2.333 1.688a9 9 0 0 0 6.371 15.357c2.491 0 4.73 -1 6.36 -2.631" /><path d="M11.298 11.288a1 1 0 1 0 1.402 1.427" /><path d="M7 12c0 -1.38 .559 -2.629 1.462 -3.534m2.607 -1.38c.302 -.056 .613 -.086 .931 -.086" /><path d="M12 17a4.985 4.985 0 0 0 3.551 -1.48m1.362 -2.587c.057 -.302 .087 -.614 .087 -.933" /><path d="M3 3l18 18" /></svg>
            <svg @click="audio.pause();is_sound_play=false" v-else xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none" stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-disc"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M7 12a5 5 0 0 1 5 -5" /><path d="M12 17a5 5 0 0 0 5 -5" /></svg>
          </div>
        </div>

        <splash/>
        <bride/>
        <schedule/>
        <gift/>
        <congratulation/>
        <Footer/>
      </div>
    <BottomNavbar :is_open="is_open" />
    </div>

  </div>
</template>

<style scoped></style>
