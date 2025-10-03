<script setup>
import {useBrideStore} from "@/stores/bride.js";
import {reactive} from "vue";

const store = useBrideStore();
const form = reactive({
  name: store.to,
  address: "",
  isAttending: true,
  text: ""
})

const formatDate = (unix) =>{
  const date = new Date(unix * 1000);
  return date.toLocaleString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}
</script>

<template>
<div class="flex flex-col p-5 bg-blue-400 gap-3 items-center">
  <h2 class="text-5xl font-engagement">Ucapkan Sesuatu</h2>
  <p class="text-sm">Berikan selamat dan do'a restu untuk kedua mempelai</p>

  <div class="flex flex-col gap-3 mt-5 w-full">
<!--    <div class="flex gap-3 items-center">-->
<!--      <label for="" class="font-bold w-1/4 text-right">Nama</label>-->
<!--      <input type="text" class="input w-3/4" placeholder="Nama kakak siapa?" required v-model="form.name" disabled/>-->
<!--    </div>-->

    <div class="flex gap-3 items-center">
      <input type="radio" name="hadir" checked="checked" value="yes" class="radio bg-sky-100 border-sky-300 checked:bg-sky-200 checked:text-sky-600 checked:border-sky-600" /> Hadir
      <input type="radio" name="hadir" value="no" class="radio bg-red-100 border-red-300 checked:bg-red-200 checked:text-red-600 checked:border-red-600" /> Tidak Hadir
    </div>
    <div class="flex gap-3 items-center">
<!--      <label for="" class="font-bold w-1/4 text-right">Alamat</label>-->
      <input type="text" class="input w-3/4" placeholder="Dari kota mana kak ?" required v-model="form.address"/>
    </div>
    <div class="flex gap-3 items-center">
      <textarea type="text" class="textarea w-full" placeholder="Katakan sesuatu untuk kedua mempelai :)" required v-model="form.text"></textarea>
    </div>
    <button type="button" class="btn btn-soft w-1/2">Kirim Ucapan <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" /></svg></button>
  </div>

  <div class="card bg-base-100 mt-5 card-sm max-h-screen overflow-y-auto rounded" v-if="store.congrats.length > 0">
    <div class="card-body">
      <div v-for="(item, index) in store.congrats" :key="index" class="space-y-1">

        <div class="flex items-center justify-between">
          <h2 class=" text-[#DAB45C] text-sm">{{ item.name.replace(/\b\w/g, char => char.toUpperCase()) }} &mdash; <span>{{ item.address }}</span></h2>
            <span class="text-[10px] px-2 py-0.5 rounded-full" :class="item.isAttending ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'">
            {{ item.isAttending ? 'Hadir' : 'Tidak Hadir' }}
          </span>
        </div>

        <p class="text-gray-700 italic text-xs mb-0">“{{ item.text }}” - <span>{{ formatDate(item.time) }}</span></p>
        <div class="divider h-0 m-0.5"/>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>