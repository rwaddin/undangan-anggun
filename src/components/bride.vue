<script setup>
import {useBrideStore} from "@/stores/bride.js";

const store = useBrideStore()
</script>

<template>
  <div class="flex flex-col gap-5 w-full items-center justify-center p-10 bg-[#1C5278]">
    <p class=" text-3xl font-cookie  text-white">Assalamu’alaikum Wr. Wb.</p>
    <p class="text-center  text-white">Dengan memohon rahmat dan ridho Allah SWT yang telah menciptakan Makhluk-Nya secara berpasang-pasangan, kami bermaksud menyelenggarakan pernikahan kami :</p>

    <div class="card w-full bg-[#DAEFF2]" v-for="i in store.bride.brides">
      <div class="card-body bg-[url('/images/frame.png')] bg-cover p-10 flex flex-col justify-between items-center rounded gap-2" style="background-image: url('/images/frame.png');')">
        <img :src="i.photo" class="w-24 mask mask-hexagon " :alt="i.name" loading="lazy"/>

        <p class="text-5xl font-engagement">{{i.name}}</p>
        <p v-html="i.parent" class="text-center font-quicksand font-bold"/>
        <p class="text-center">{{i.address}}</p>
      </div>
    </div>
    <br>
    <br>
    <br>
  </div>
</template>

<style scoped>

</style>