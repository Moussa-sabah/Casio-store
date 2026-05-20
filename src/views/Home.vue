<script setup lang="ts">
import Footer from '@/components/home/footer/Footer.vue';
import Left from '@/components/home/section1/left.vue';
import Section1 from '@/components/home/section1/Section1.vue';
import Section2 from '@/components/home/section2/Section2.vue';
import Section3 from '@/components/home/section3/Section3.vue';
import Section4 from '@/components/home/section4/Section4.vue';
import Section5 from '@/components/home/section5/Section5.vue';
import { ref } from 'vue';




</script>



<template>

    <div class="flex flex-col gap-20 lg:gap-40 relative ">
        <Section1 />
        <Section2 class="section" />
        <Section3 class="section" />
        <Section4 class="section" />
        <Section5 class="section" />
        <Footer />

    </div>



</template>

<style scoped>
.section {
    animation: scollAnimation both;
   
    animation-timeline: view();


}


@keyframes scollAnimation {
    0% {
        opacity: 0.5;
        scale: 0.5;
    }

    30%,90% {
        opacity: 1;
        scale: 1;
    }
    100% {
        opacity: 0.5;
        scale: 0.5;
    }
}
</style>