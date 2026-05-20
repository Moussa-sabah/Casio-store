<script setup lang="ts">
import { ref } from 'vue';


const maxCounter = ref(2)
const currentConter = ref(0)
const slideBg = ref('#F181A5')

const prevDisabled = ref(true)
const nextDisabled = ref(false)
const slide1 = ref('flex')
const slide2 = ref('none')
const slide3 = ref('none')


function repeat() {
    if (currentConter.value === 0 || currentConter.value === 1) {
        currentConter.value += 1
    }
    else {
        currentConter.value = 0
    }

    checkSlides()
    checkBtns()
}

let setInt = setInterval(() => {
    repeat()
}, 3000);


function checkBtns() {
    if (currentConter.value === 0) {
        prevDisabled.value = true
        nextDisabled.value = false

    }

    else if (currentConter.value === maxCounter.value) {
        nextDisabled.value = true
        prevDisabled.value = false
    }
    else {
        prevDisabled.value = false
        nextDisabled.value = false
    }
}

function checkSlides() {
    if (currentConter.value === 0) {
        slide1.value = 'flex'
        slide2.value = 'none'
        slide3.value = 'none'
        slideBg.value = '#F181A5'
    }
    else if (currentConter.value === 1) {
        slide2.value = 'flex'
        slide1.value = 'none'
        slide3.value = 'none'
        slideBg.value = '#6666FF'
    }
    else {
        slide3.value = 'flex'
        slide2.value = 'none'
        slide1.value = 'none'
        slideBg.value = '#CFCFCF'
    }
}

function next() {
    currentConter.value += 1
    checkBtns()
    checkSlides()
    clearInterval(setInt)
    setInt = setInterval(() => {
        repeat()
    }, 3000);
}

function prev() {
    currentConter.value -= 1
    checkBtns()
    checkSlides()
    clearInterval(setInt)
    setInt = setInterval(() => {
        repeat()
    }, 3000);
}


</script>


<template>

    <div :style="{ background: slideBg }"
        class=" mx-5 sm:mx-10 lg:mx-15 h-50 xs:h-60 sm:h-80 md:h-100 bg  rounded-3xl flex items-center justify-between  xs:px-4 sm:px-5 md:px-7 lg:px-10 relative ">


        <h1 :class="{ casioDark: currentConter === 2 }"
            class="absolute bottom-0 left-25 text-[110px] xs:text-[150px] sm:text-[200px] md:text-[250px] lg:text-[300px] z-10 text-white opacity-10">Casio</h1>

        <button @click=prev :class="{ darkSliderIcon: currentConter === 2 }"
            class=" material-symbols-outlined sliderIcon text-white lg:relative" :disabled=prevDisabled>
            chevron_left

        </button>



        <div class=" w-[90%]   flex items-center z-20">
            <div :style="{ display: slide1 }"
                class="slide flex items-center justify-center gap-3 sm:gap-5 md:gap-8 lg:gap-10  min-w-full">
                <img src="../../../../public/images/BA-110X-7A1_02.jpg"
                    class="w-25 h-55 xs:w-35 xs:h-70 sm:w-45 sm:h-90 md:h-110 md:w-55 lg:w-60  rounded-2xl object-cover" alt="">


                <div class=" flex flex-col items-start justify-center gap-1 xs:gap-3 sm:gap-5   w-1/2">
                    <h1
                        class="text-xl xs:text-2xl sm:text-3xl md:text-4xl  md:leading-13  lg:text-5xl xl:text-6xl text-white font-medium lg:leading-18">
                        Are you ready to lead the way
                    </h1>
                    <p class=" text-white text-[11px] xs:text-xs sm:text-sm  md:text-[15px]  lg:text-lg font-medium ">Lorem ipsum dolor sit amet,
                        consectetur
                        adipiscing elit,
                        sed do.</p>
                    <button
                        class="text-[#F181A5] cursor-pointer z-20 bg-white  py-0.75 text-xs px-3 sm:py-1 lg:py-1.5   md:px-5 sm:text-[13px] md:text-[14px]  font-semibold mt-4">
                        Explore

                    </button>
                </div>
            </div>
            <div :style="{ display: slide2 }"
                class="slide flex items-center justify-center gap-3 sm:gap-5  md:gap-8 lg:gap-10  min-w-full">
                <img src="../../../../public/images/BGD-570-IMAGE2_1200x1200.jpg"
                    class=" w-25 h-55 xs:w-35 xs:h-70 sm:w-45 sm:h-90 md:h-110  lg:w-60  rounded-2xl object-cover" alt="">
                <div class=" flex flex-col items-start justify-center  gap-1 xs:gap-3 sm:gap-5  w-1/2">
                    <h1
                        class=" text-xl xs:text-2xl sm:text-3xl md:text-4xl  md:leading-13  lg:text-5xl xl:text-6xl text-white font-medium lg:leading-18">
                        Are you ready to lead the way </h1>
                    <p class="text-white text-[11px] xs:text-xs sm:text-sm md:text-[15px]  lg:text-lg font-medium ">Lorem ipsum dolor sit amet,
                        consectetur
                        adipiscing elit,
                        sed do.</p>
                    <button
                        class="text-[#6666FF] cursor-pointer z-20 bg-white py-0.75 text-xs px-3 sm:py-1   lg:py-1.5 md:px-5 sm:text-[13px] md:text-[14px]   font-semibold mt-4">
                        Explore

                    </button>
                </div>
            </div>
            <div :style="{ display: slide3 }"
                class="slide flex items-center justify-center gap-3 sm:gap-5  md:gap-8 lg:gap-10  min-w-full">
                <img src="../../../../public/images/image (15).avif"
                    class="w-25 h-55 xs:w-35 xs:h-70 sm:w-45 sm:h-90 md:h-110  lg:w-60  rounded-2xl object-cover" alt="">
                <div class=" flex flex-col items-start justify-center gap-1 xs:gap-3 sm:gap-5   w-1/2">
                    <h1
                        class="text-xl xs:text-2xl sm:text-3xl md:text-4xl  md:leading-13  lg:text-5xl xl:text-6xl text-black font-medium lg:leading-18">
                        Are you ready to lead the way</h1>
                    <p class="text-[11px] xs:text-xs sm:text-sm  md:text-[15px]  lg:text-lg font-medium ">Lorem ipsum dolor sit amet,
                        consectetur
                        adipiscing
                        elit,
                        sed do.</p>
                    <button
                        class=" cursor-pointer z-20 bg-white py-0.75 text-xs px-3 sm:py-1  lg:py-1.5 md:px-5 sm:text-[13px] md:text-[14px]   font-semibold mt-4">
                        Explore

                    </button>
                </div>
            </div>
        </div>



        <button :class="{ darkSliderIcon: currentConter === 2 }" @click=next
            class=" material-symbols-outlined  z-20  sliderIcon text-white" :disabled=nextDisabled>
            chevron_right

        </button>





    </div>






</template>


<style scoped>
.slide {
    animation: slideAnim 1s;
}

.casioDark {
    opacity: 0.2;
}

.sliderIcon:disabled {
    opacity: 0
}

.bg {
    transition: background 0.7s;
}

.darkSliderIcon {
    color: black;
}

@keyframes slideAnim {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>