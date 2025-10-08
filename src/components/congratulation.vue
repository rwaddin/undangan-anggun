<script setup>
import {useBrideStore} from "@/stores/bride.js";
import {onMounted, reactive, ref} from "vue";
import {getOnce} from "@/firebase/read";
import {rsvpCreate} from "@/firebase/write";

const store = useBrideStore();
const records = ref({})
const form = reactive({
  name: store.to,
  address: "",
  isAttending: 'yes',
  text: "",
  id: "",
  time: 0
})

const formatDate = (unix) =>{
  const date = new Date(unix);
  const tanggal = date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const waktu = date.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${tanggal} ${waktu}`;
}

const onSave = () => {
  try{
    if (form.text.trim().length === 0){
      throw "Masukan ucapan terlebih dahulu"
    }
  }catch(err){
    alert(err)
  }

  form.id = crypto.randomUUID();
  form.time = Date.now();

  rsvpCreate("anggunferi",form)
    .then(res => {
      form.name= store.to;
      form.address= "";
      form.isAttending= 'yes'
      form.text= "";
      form.id= "";
      // form.time= 0;

      getCongrats()
    })
    .catch(err => {
      console.log(err);
    })
}

const getCongrats = async () => {
  getOnce("anggunferi")
    .then((data)=> {
      records.value = sortDesc(data);
    })
    .catch(() => records.value = {});
}

const sortDesc = (obj) => {
  let sortDesc = Object.keys(obj).map(key => obj[key]);
  sortDesc.sort(function(a, b){
    return b.time - a.time;
  });
  return sortDesc;
}


onMounted(async () => {
  await getCongrats()
})
</script>

<template>

<div class="flex flex-col p-10 bg-[#1C5278] gap-3 items-center relative text-white" id="congrats">
  <div class="rotate-180 -top-10 absolute w-full">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"  fill="#1C5278">
      <path class="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
      <path class="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
      <path class="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
    </svg>
  </div>
  <h2 class="text-5xl font-engagement">Ucapkan Sesuatu</h2>
  <p class="text-sm">Berikan selamat dan do'a restu untuk kedua mempelai</p>

  <div class="flex flex-col gap-3 mt-5 w-full text-gray-700">
<!--    <div class="flex gap-3 items-center">-->
<!--      <label for="" class="font-bold w-1/4 text-right">Nama</label>-->
<!--      <input type="text" class="input w-3/4" placeholder="Nama kakak siapa?" required v-model="form.name" disabled/>-->
<!--    </div>-->

    <div class="flex gap-3 items-center text-white">
      <input v-model="form.isAttending" type="radio" name="hadir" checked="checked" value="yes" class="radio bg-sky-100 border-sky-300 checked:bg-sky-200 checked:text-sky-600 checked:border-sky-600" /> Hadir
      <input v-model="form.isAttending" type="radio" name="hadir" value="no" class="radio bg-red-100 border-red-300 checked:bg-red-200 checked:text-red-600 checked:border-red-600" /> Tidak Hadir
    </div>
    <div class="flex gap-3 items-center">
<!--      <label for="" class="font-bold w-1/4 text-right">Alamat</label>-->
      <input type="text" class="input w-3/4" placeholder="Dari kota mana kak ?" required v-model="form.address"/>
    </div>
    <div class="flex gap-3 items-center">
      <textarea type="text" class="textarea w-full" placeholder="Katakan sesuatu untuk kedua mempelai :)" required v-model="form.text"></textarea>
    </div>
    <button type="button" class="btn btn-soft bg-transparent border-white text-white w-1/2" @click="onSave">Kirim Ucapan
      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" /></svg>
    </button>
  </div>

  <div class="card bg-white mt-5 card-sm max-h-screen overflow-y-auto rounded" v-if="Object.keys(records).length > 0">
    <div class="card-body bg-[url(/images/br.webp)] bg-cover">
      <div v-for="(item, index) in records" :key="index" class="space-y-1">

        <div class="flex items-center justify-between">
          <h2 class="text-[#1C5278] font-thin text-sm">{{ item.name.replace(/\b\w/g, char => char.toUpperCase()) }} <span v-if="item.address.length !==0">&mdash; {{ item.address.replace(/\b\w/g, char => char.toUpperCase()) }}</span></h2>
            <span class="text-[10px] px-2 py-0.5 rounded-full" :class="item.isAttending ==='yes' ? 'bg-[#1C5278] text-white' : 'bg-red-400 text-white'">
            {{ item.isAttending === 'yes' ? 'Hadir' : 'Tidak Hadir' }}
          </span>
        </div>

        <p class="text-gray-700 italic text-xs mb-0">“{{ item.text }}” - <span>{{ formatDate(item.time) }}</span></p>
        <div class="divider h-0 m-1"/>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>