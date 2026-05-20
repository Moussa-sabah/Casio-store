<script setup lang="ts">
import Bottom from './bottom.vue';
import Left from './left.vue';
import Navbar from './navbar.vue';
import Right from './right.vue';

</script>


<template>

    <div class=" h-100 md:h-170 xl:min-h-screen bg-[linear-gradient(to_right,white_50%,#E4E4E4_42%_70%,#FAFAFA)] ">
        <Navbar />
        <div class="h-[77%] lg:h-[80%] flex items-center">
            <Left />
            <Right />
        </div>
        <Bottom />
    </div>

</template>