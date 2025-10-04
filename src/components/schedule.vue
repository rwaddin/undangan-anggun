<script setup>
import {useBrideStore} from "@/stores/bride.js";

const store = useBrideStore()
</script>

<template>

  <div class="flex flex-col gap-10 w-full items-center justify-center p-6 py-20 relative" id="schedule">
    <div class="rotate-180 absolute -top-10 w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"  fill="#B8E6FE">
        <path class="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
        <path class="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
        <path class="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
      </svg>
    </div>
    <p class="text-5xl font-engagement">Save The Date</p>
  <div class="w-full bg-white rounded-lg shadow-md overflow-hidden" v-for="(i, j) in store.bride.schedules" data-aos="fade-up" data-aos-delay="300">
    <div class="flex">
      <div class="bg-[#1C5278] text-white px-6 flex items-center justify-center" v-if="j===0">
        <p class="font-bold text-2xl [writing-mode:vertical-rl] rotate-180">{{i.name}}</p>
      </div>

      <div class="p-4 flex-1 bg-cover" :class="j === 0 ? 'bg-[url(/images/br.webp)]' : 'bg-[url(/images/bl.webp)]'">
        <div class="flex items-center gap-3">
          <p class="text-4xl font-bold text-[#1C5278]">14</p>
          <div>
            <p class="font-semibold">{{i.day}}</p>
            <p class="text-sm text-gray-700">{{i.date}}</p>
          </div>
        </div>

        <div :class="j === 1 ? 'text-right': ''">
          <hr class="my-3 border-gray-400">
          <p class="text-sm text-gray-800 mb-2">{{ i.time }}</p>
          <p class="text-sm font-medium mb-2">Lokasi Acara :</p>
          <p class="text-sm font-bold" v-html="i.address_name"/>
          <p class="text-sm text-gray-700" v-html="i.address"/>

          <a :href="i.maps" target="_blank" class="mt-4 btn btn-soft bg-[#1C5278] text-white border-none" type="button">
            Google Maps
          </a>
        </div>
      </div>

      <div class="bg-[#1C5278] text-white flex items-center justify-center" v-if="j===1">
        <p class="rotate-90 font-bold text-2xl">{{i.name}}</p>
      </div>

    </div>
  </div>
</div>
</template>

<style scoped>

</style>