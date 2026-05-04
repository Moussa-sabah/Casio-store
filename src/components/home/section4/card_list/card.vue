<script lang="ts" setup>

const props = defineProps<{
    img: string
}>()

</script>


<template>
    <div
        class="relative card  bg-gray-100  cursor-pointer rounded-2xl w-45 h-55 xs:w-52 sm:w-60 md:w-55   lg:w-70  xl:w-80 xs:h-65 sm:h-70 md:h-70 lg:h-90  xl:h-100 border border-gray-300  hover:border-gray-600   flex flex-col gap-3  px-4 hover:px-5 sm:px-5 sm:hover:px-6 lg:px-7 lg:hover:px-8  justify-center">
        <img :src=img class=" object-cover h-30 xs:h-35 sm:h-40 md:h-45 lg:h-60   mx-auto" alt="">

        <div class="flex flex-col gap-1 xl:gap-2">
            <p class=" text-gray-500 text-[11px] lg:text-[13px] font-medium ">G-SHOCK</p>
            <p class="font-medium text-sm md:text-[13px] lg:text-[17px]"> GBM2100-1A</p>
            <div class="flex items-center justify-between">
                <p class=" font-medium text-sm md:text-[13px] lg:text-[17px]">$280.00</p>
                <button
                    class="btn w-6 h-6 sm:w-6.5 sm:h-6.5  md:w-6 md:h-6 lg:w-8 lg:h-8 bg-black rounded-full flex items-center justify-center">
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


@media (width>=0px) {
    .icon {
        font-size: 20px;

    }

    
}

@media (width>=768px) {
    .icon {
        font-size: 18px;

    }

   
}

@media (width>=1024px) {
    .icon {
        font-size: 22px;

    }


}
</style>
