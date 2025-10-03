<script setup>
import {useBrideStore} from "@/stores/bride.js";

const store = useBrideStore()
</script>

<template>
<div class="min-h-[90vh] flex-col flex justify-end p-5">
  <div class="flex-col flex gap-3">
    <p>Akad Nikah & Repsi</p>
    <p class="text-5xl">{{store.bride.boyUname}} <br>& {{store.bride.girlUname}} </p>
    <p class="">{{store.bride.schedules[0].day}}, {{store.bride.schedules[0].date}}</p>
    <p>Ketika suatu perbedaan di ciptakan untuk saling menyempurnakan. Begitulah cara Allah mempersatukan dua insan dengan cara yang tak pernah bisa diduga oleh manusia dalam satu pernikahan.</p>
  </div>
</div>
</template>

<style scoped>

</style>