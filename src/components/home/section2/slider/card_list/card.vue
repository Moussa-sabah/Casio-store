<script setup lang="ts">
import { inject, onMounted, ref } from 'vue';


const props = defineProps<{
    cardLeftPosition: number

    img: string
}>()


const cardWidth = ref(50)

const emits = defineEmits<{
    setListCardWidth: [number]
}>()


window.addEventListener('resize', () => {
    if (window.innerWidth >= 1280) {

        cardWidth.value = 240


    }
    else if (window.innerWidth >= 1024) {

        cardWidth.value = 200

    }

    else if (window.innerWidth >= 768) {
        cardWidth.value = 190
    }

    else if (window.innerWidth >= 640) {
        cardWidth.value = 210
    }

    else if (window.innerWidth >= 500) {
        cardWidth.value = 170
    }
      else{
        cardWidth.value = 160
    }

    emits('setListCardWidth', cardWidth.value)
})
onMounted(() => {

    if (window.innerWidth >= 1280) {

        cardWidth.value = 240


    }
    else if (window.innerWidth >= 1024) {

        cardWidth.value = 200

    }

    else if (window.innerWidth >= 768) {
        cardWidth.value = 190
    }

    else if (window.innerWidth >= 640) {
        cardWidth.value = 210
    }

    else if (window.innerWidth >= 500) {
        cardWidth.value = 170
    }
    else{
        cardWidth.value = 160
    }

    emits('setListCardWidth', cardWidth.value)


})


</script>



<template>
    <div :style="{ left: `${cardLeftPosition}px`, minWidth: `${cardWidth}px` }"
        class="relative card bg-gray-100 rounded-lg  cursor-pointer  border border-gray-300  hover:border-gray-600 h-50 xs:h-45 sm:h-56 lg:h-55 xl:h-65   flex flex-col gap-3 px-3 hover:px-4 sm:px-5  sm:hover:px-6  xl:px-7 py-3 xl:hover:px-8  justify-center">
        <img :src=img class=" w-25  sm:w-33     lg:w-32 object-cover  xl:h-43 mx-auto" alt="">

        <div class="">
            <p class="font-bold text-[9px] text-gray-500 sm:text-[10px] md:text-[9px] lg:text-[10px] lg:font-medium ">G-SHOCK</p>
            <p class="text-[13px] sm:text-[13px] md:text-[12px] font-medium lg:text-[14px]"> GBM2100-1A</p>
            <div class="flex items-center justify-between">
                <p class="text-[13px] sm:text-[13px] md:text-[12px] font-medium lg:text-[14px]">$280.00</p>
                <button
                    class="btn w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6 bg-black rounded-full flex items-center justify-center">
                    <span class="material-symbols-outlined text-white icon">
                        arrow_forward
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>


<style scoped>
.card {

    transition: all 0.5s;

}



.icon {
    transition: all 0.5s;
}

.btn {
    transition: all 0.5s;
}

.btn:hover {
    scale: 1.2;
}

.icon:hover {
    rotate: -45deg;

}

@media (width>=0) {
    .icon {
        font-size: 15px;

    }
}

@media (width>=500px) {
    .icon {
        font-size: 15px;

    }
}

@media (width>=640px) {
    .icon {
        font-size: 18px;

    }
}


</style>