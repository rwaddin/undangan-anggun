<script setup>
import {useBrideStore} from "@/stores/bride.js";

const store = useBrideStore()
</script>

<template>
  <div class="flex flex-col w-full text-center pt-10 ">
    <div class="relative">
      <div class="flex flex-col w-full gap-3">
        <p>Atas kehadiran dan do'a restu dari Bapak/ibu :</p>
        <p class="text-2xl font-bold font-quicksand" data-aos="fade-up" data-aos-delay="400">{{store.to}}</p>
        <p>kami ucapkan terima kasih.</p>
      </div>
      <br>
      <br>
      <br>
      <p class=" text-xl font-cookie">Wassalamu’alaikum Wr. Wb.</p>
      <p>Turut berbahagia, <br>Segenap keluarga besar</p>
      <p class="text-5xl mt-5 font-engagement" data-aos="fade-up" data-aos-delay="600">{{store.bride.boy}} <br>{{store.bride.girl}}</p>
    </div>
    <br>
    <div class="w-full bg-[#1C5278] text-white py-4 flex justify-between px-2 font-poppins mt-10 text-sm relative">
      <div class="absolute bottom-12 -left-0 w-full rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"  fill="#1C5278">
          <path class="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
          <path class="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
          <path class="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
        </svg>
      </div>
      <div class="flex gap-3">Make with <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="red"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-heart-spark"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.537 19.542l-7.037 -6.97a5 5 0 1 1 7.5 -6.566a5 5 0 0 1 8.212 5.693" /><path d="M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5" /></svg>
        <a href="https://www.instagram.com/akhul.syaifudin/" target="_blank">addin.web.id</a></div>
      <div class="flex gap-3">
        <a href="mailto:akhul.syaifudin@gmail.com" target="_blank">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-mail-spark"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5" /><path d="M11.5 19h-6.5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5" /><path d="M3 7l9 6l9 -6" /></svg>
        </a>
        <a href="https://wa.me/6285353535631?text=Mau+order+website+kak+seperti+undangan+anggun" target="_blank">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
        </a>
        <a href="https://www.instagram.com/akhul.syaifudin/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </a>
      </div>
    </div>
    <div class="bg-[#1C5278] h-25">
      &nbsp;
    </div>

  </div>
</template>

<style scoped>

</style>