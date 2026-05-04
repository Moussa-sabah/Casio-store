<script setup lang="ts">

import Most_populer from './most_populer.vue';
import Slider from './slider/Slider.vue';

</script>

<template>

    <section
        class=" flex lg:items-start flex-col md:flex-row items-center lg:flex-row lg:justify-between px-5 sm:px-10 lg:px-15  xl:px-15 gap-8 lg:gap-0 ">
        <Most_populer />

        <Slider />
    </section>

</template>
