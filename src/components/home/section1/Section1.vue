<script setup lang="ts">
import Bottom from './bottom.vue';
import Left from './left.vue';
import Navbar from './navbar.vue';
import Right from './right.vue';

</script>


<template>

    <div class=" h-100 md:h-170 xl:min-h-screen bg-[linear-gradient(to_right,white_42%,#E4E4E4_42%_70%,#FAFAFA)] ">
        <Navbar />
        <div class="h-[80%] flex items-center px-5 sm:px-10 lg-15">
            <Left />
            <Right />
        </div>
        <Bottom />
    </div>

</template>