<script setup>
import {useBrideStore} from "@/stores/bride.js";

const store = useBrideStore()
</script>

<template>
  <div class="flex flex-col gap-5 w-full items-center justify-center p-10 bg-purple-200">
    <p class=" text-3xl font-cookie">Assalamu’alaikum Wr. Wb.</p>
    <p class="text-center">Dengan memohon rahmat dan ridho Allah SWT yang telah menciptakan Makhluk-Nya secara berpasang-pasangan, kami bermaksud menyelenggarakan pernikahan kami :</p>

    <div class="card w-full" v-for="i in store.bride.brides">
      <div class="card-body bg-base-100 p-10 flex flex-col justify-between items-center rounded gap-2">
        <img :src="i.photo" class="rounded-full w-24" :alt="i.name" loading="lazy"/>

        <p class="text-4xl font-engagement">{{i.name}}</p>
        <p v-html="i.parent" class="text-center"/>
        <p class="text-center">{{i.address}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>