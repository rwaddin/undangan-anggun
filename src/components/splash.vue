<script setup>
import {useBrideStore} from "@/stores/bride.js";

const store = useBrideStore()
</script>

<template>
<div class="min-h-[90vh] flex-col flex justify-end bg-[url(/images/br.webp)] bg-cover bg-center">
  <div class="flex-col flex gap-3 p-5 ">
    <p>Akad Nikah & Repsi</p>
    <p class="text-5xl font-quicksand font-bold">{{store.bride.boyUname}} <br>& {{store.bride.girlUname}} </p>
    <p class="">{{store.bride.schedules[0].day}}, {{store.bride.schedules[0].date}}</p>
    <p>Ketika suatu perbedaan di ciptakan untuk saling menyempurnakan. Begitulah cara Allah mempersatukan dua insan dengan cara yang tak pernah bisa diduga oleh manusia dalam satu pernikahan.</p>
  </div>
  <div class="rotate-180">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"  fill="#1C5278">
      <path class="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
      <path class="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
      <path class="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
    </svg>
  </div>
</div>
</template>

<style scoped>

</style>