<script setup lang="ts">
import { inject } from 'vue';



const props = defineProps<{
    toggleSidebar: boolean
}>()

const  hideSidebar  = inject('hideSidebar')



</script>

<template>


    <div :class="{ close: !toggleSidebar, open: toggleSidebar }"
        class=" fixed md:hidden transition-all duration-500 px-15  top-0 bottom-0 right-0  z-40 w-70 overflow-y-auto  bg-white  shadow-2xl ">
        <i @click="()=>{hideSidebar}" class="fa-solid fa-xmark absolute top-5 left-5 text-lg sm:text-xl"></i>
        <ul class="flex flex-col gap-8  text-lg  sm:text-xl font-bold py-25  ">
            <li class="bg-black text-white py-1.5 px-5 xs:py-1 sm:py-1.5 ">Home</li>
            <li class="bg-black text-white py-1.5 px-5 xs:py-1 sm:py-1.5 ">Shop</li>
            <li class="bg-black text-white py-1.5 px-5 xs:py-1 sm:py-1.5 ">Collection</li>
            <li class="bg-black text-white py-1.5 px-5 xs:py-1 sm:py-1.5 ">Customize</li>
        </ul>
    </div>
</template>


<style>
.close {
    right: -100%;
}

.open {
    right: 0;
}
</style>