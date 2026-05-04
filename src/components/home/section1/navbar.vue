<script setup lang="ts">
import { inject, ref } from 'vue';

const showSidebar = inject('showSidebar')

const circleScale = ref<number>(0)
const circlePositonX = ref('0')
const circlePositonY = ref('0')

function showCircle () {
    circleScale.value = 1
    window.addEventListener('mousemove', (e) => {
        circlePositonX.value = `${e.clientX}px`
        circlePositonY.value = `${e.clientY}px`

    })
}
</script>


<template>

    <div class=" flex items-center justify-between px-5 sm:px-10 lg:px-15 h-[13%] md:h-[11%]">


        <h1 class="font-extrabold text-xl xs:text-2xl md:text-3xl">Casio</h1>


        <div class="w-6 h-6 xs:w-8 xs:h-8 bg-black absolute rounded-full circle  translate-x-[-50%] translate-y-[-50%]"
            :style="{ left: circlePositonX, top: circlePositonY, scale: circleScale }">
        </div>
        <ul
            class="md:flex md:gap-8 lg:gap-15 relative hidden md:text-[15px] lg:text-[17px]  text-white mix-blend-difference menu">

            <li @mousemove="showCircle" @mouseleave="circleScale = 0" class="border-b px-2 ">Home</li>
            <li @mousemove="showCircle" @mouseleave="circleScale = 0">Shop</li>
            <li @mousemove="showCircle" @mouseleave="circleScale = 0">Collection</li>
            <li @mousemove="showCircle" @mouseleave="circleScale = 0">Customize</li>
        </ul>


        <div class="flex items-center gap-3 xs:gap-6 text-white mix-blend-difference">
            <span @mousemove="showCircle" @mouseleave="circleScale = 0" class="material-symbols-outlined icon ">
                search
            </span>
            <span @mousemove="showCircle" @mouseleave="circleScale = 0" class="material-symbols-outlined icon">
                shopping_cart
            </span>
            <button class="md:hidden  flex items-center justify-center">
                <span @click="()=>{showSidebar}" @mousemove="showCircle" @mouseleave="circleScale = 0"
                    class="material-symbols-outlined icon">
                    drag_handle
                </span>
            </button>

        </div>
    </div>
</template>

<style scoped>
.circle {
    transition: scale 0.5s;
}


.menu li {
    cursor: pointer;
}

.icon {
    font-size: 25px;
    cursor: pointer;
}

@media (width>=0) {
    .icon {
        font-size: 24px;
    }
}

@media (width>=500px) {
    .icon {
        font-size: 26px;
    }
}
</style>