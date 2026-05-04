<script setup lang="ts">
import { ref } from 'vue';
import Cards_List from './card_list/Card_List.vue';

const maxCounter = ref(6)
const currentConter = ref(0)
const prevDisabled = ref(true)
const nextDisabled = ref(false)
const firstCircleActive = ref(true)
const secondCircleActive = ref(false)
const thirdCircleActive = ref(false)
const cardLeftPosition = ref(0)
const setLeftPositionChangingValue = ref(0)


function setLeftPositionChanging(changingValue: number) {
    setLeftPositionChangingValue.value = changingValue
}

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

function checkCircles() {
    if (currentConter.value >= 0 && currentConter.value <= 2) {
        firstCircleActive.value = true
        secondCircleActive.value = false
        thirdCircleActive.value = false
    }
    else if (currentConter.value >= 3 && currentConter.value <= 5) {
        secondCircleActive.value = true
        firstCircleActive.value = false
        thirdCircleActive.value = false
    }
    else {
        thirdCircleActive.value = true
        firstCircleActive.value = false
        secondCircleActive.value = false
    }

}

function next() {
    cardLeftPosition.value -= setLeftPositionChangingValue.value
    currentConter.value += 1
    checkBtns()
    checkCircles()

}

function prev() {
    cardLeftPosition.value += setLeftPositionChangingValue.value
    currentConter.value -= 1
    checkBtns()
    checkCircles()
}


function first() {
    cardLeftPosition.value = 0
    currentConter.value = 0
    checkBtns()
    checkCircles()

}


function second() {
    cardLeftPosition.value = -setLeftPositionChangingValue.value * 3
    currentConter.value = 3
    checkBtns()
    checkCircles()
}

function third() {
    cardLeftPosition.value = -setLeftPositionChangingValue.value * 6
    currentConter.value = 6
    checkBtns()
    checkCircles()
}

</script>

<template>
    <section class=" w-fit  flex flex-col items-center gap-6 lg:gap-10  ">
        <div class="flex items-center gap-2 xs:gap-4 xl:gap-10">
            <button class=" material-symbols-outlined sliderIcon" @click=prev :disabled=prevDisabled>
                chevron_left

            </button>
            <Cards_List v-on:set-left-postiton-changing="setLeftPositionChanging"
                :card-left-position="cardLeftPosition" />
            <button class="material-symbols-outlined sliderIcon" @click=next :disabled=nextDisabled>
                chevron_right
            </button>
        </div>
        <div class="flex items-center gap-2">
            <div @click=first :class="{ active: firstCircleActive }"
                class="circle w-2 h-2 cursor-pointer transition-all duration-300 rounded-full bg-black opacity-30 ">
            </div>
            <div @click="second" :class="{ active: secondCircleActive }"
                class="circle circle cursor-pointer w-2 h-2 transition-all duration-300 rounded-full bg-black  opacity-30">
            </div>
            <div @click="third" :class="{ active: thirdCircleActive }"
                class="circle cursor-pointer circle w-2 h-2 transition-all duration-300 rounded-full bg-black opacity-30">
            </div>
        </div>
    </section>
</template>

<style>
.sliderIcon {
    font-size: 40px;
    cursor: pointer;
    transition: all 0.5s;
}

.sliderIcon:disabled {
    opacity: 0.3;

}

.sliderIcon:enabled:hover {
    scale: 2;
}

.active {
    opacity: 1;
    width: 1rem;
}


@media (width<768px) {
    .sliderIcon {
        font-size: 27px;
    }

    .sliderIcon:enabled:hover {
        scale: 1.3;
    }
}
</style>
