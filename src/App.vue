<script setup>
import { ref } from 'vue';

const is_open = ref(false);
</script>

<template>
  <div class="w-screen h-screen overflow-hidden bg-amber-50">
    <div class="md:grid md:grid-cols-3">
      <div class="md:col-start-2 bg-blue-100 h-screen overflow-y-auto flex items-center justify-center flex-col gap-5 shadow" v-if="!is_open">
        <p>THE WEDDING OF</p>
        <p class="text-3xl font-bold">Anggun & Mr x</p>
        <p>Kepada Bapak/Ibu/Saudara/i</p>
        <p class="font-bold">Akhul Syaifudin</p>
        <button @click="is_open = true" class="btn btn-outline btn-info hover:text-white"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-mail-spark"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5" /><path d="M11.5 19h-6.5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5" /><path d="M3 7l9 6l9 -6" /></svg> Buka Undangan</button>
      </div>
      <div class="col-start-2 bg-red-100 h-screen overflow-y-auto" v-else>
        opened
      </div>
    </div>
  </div>
</template>

<style scoped></style>
