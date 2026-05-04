<script setup lang="ts">
import Card_List from './card_list/Card_List.vue';

</script>

<template>

    <div class=" flex flex-col items-center gap-10  px-5 sm:px-10 lg:px-15">
        <div class="title relative w-50 sm:w-60 md:w-70 lg:w-90 flex items-center justify-center ">
            <p class="line absolute w-full h-0.5 bg-black z-10"></p>
            <h1
                class=" px-5 lg:px-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold bg-white flex items-center justify-center z-20 ">
                Best Selling
            </h1>
        </div>
        <div class="flex items-center gap-3 text-[14px] lg:gap-7 text-lg">
            <button class="py-1.5 lg:py-2 px-4 bg-black text-white font-medium">Men</button>
            <button class="py-1.5 lg:py-2 px-4 border ">Women</button>
            <button class="py-1.5 lg:py-2 px-4 border ">Children</button>
            <button class="py-1.5 lg:py-2 px-4 border f">Boys</button>
        </div>

        <Card_List />
    </div>


</template>

<style scoped></style>