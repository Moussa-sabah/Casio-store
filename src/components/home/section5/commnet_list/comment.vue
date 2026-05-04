<script lang="ts" setup>

const props = defineProps<{
    commentLeftPoistion: number
}>()
</script>

<template>

    <div :style="{ left: `${commentLeftPoistion}px` }"
        class="bg-gray-100 transition-all duration-500 relative border rounded-2xl border-gray-300 min-w-70 h-45 md:min-w-80 md:h-50  lg:min-w-100 lg:h-60 p-5 lg:p-10 flex flex-col gap-5">
        <div class="flex items-center gap-2 md:gap-3 lg:gap-5">
            <img src="../../../../../images/download (3).jpg"
                class=" w-8 h-8 md:w-9 md:h-9 lg:w-12 lg:h-12 rounded-md object-cover border border-gray-200">
            <div class="flex flex-col gap-0.75 md:gap-1">
                <p class="font-medium text-[11px] sm:text-[12px] md:text-[13px] lg:text-[15px]"> Moussa Sabah</p>
                <div class="text-[7px] lg:text-[9px] text-amber-400 flex items-center gap-px">
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                        class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </div>
            </div>
        </div>
        <p class="text-[11px] md:text-[13px] lg:text-sm ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. adipisicing Tempora, tenetur,
            molestias ullam assumenda placeat numquam ducimus doloremque beatae !</p>
    </div>

</template>