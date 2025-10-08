<script setup>
import {useBrideStore} from "@/stores/bride.js";

const store = useBrideStore()
</script>

<template>
  <div class="p-5 py-20 flex flex-col gap-5 justify-center items-center" id="gallery">
    <h2 class="text-5xl font-engagement">Gallery of Love</h2>
    <p class="text-sm px-6 text-center">Dalam setiap bidikan kamera, tersimpan kisah dua hati yang dipertemukan takdir, dan kini menyatu dalam janji suci.</p>


    <div class="grid grid-cols-2 gap-4 auto-rows-[150px]">
      <div
          v-for="(photo, index) in store.bride.gallery"
          :key="index"
          :class="[
          'w-full h-full rounded-lg overflow-hidden',
          index % 3 === 0 ? 'row-span-2' : ''  // aturan tinggi
        ]"
      >
        <img
            :src="photo"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            alt="gallery photo"
            loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>