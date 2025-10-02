<script setup>
import {useBrideStore} from "@/stores/bride.js";

const store = useBrideStore()
</script>

<template>
<div class="flex flex-col gap-5 w-full items-center justify-center p-10 bg-orange-200">
  <div class="flex flex-col gap-10" >
    <div class="card bg-base-100" v-for="i in store.bride.schedules">
      <div class="card-body text-center">
        <div class="card-title text-3xl">{{ i.name }}</div>
        <p class="text-2xl  font-bold">{{i.day}} <br> {{ i.date }} <br> Pkl. {{i.time}}</p>
        <p class="px-10">Lokasi Acara : <br>{{i.location}}</p>
        <a :href="i.maps" target="_blank" type="button" class="btn btn-soft btn-primary"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg> Lokasi</a>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>