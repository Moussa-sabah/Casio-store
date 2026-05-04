<script setup lang="ts">
import { ref } from 'vue';
import Comment_List from './commnet_list/Comment_List.vue';

const commentLeftPosition = ref(0)
const firstCircleActive = ref(true)
const secondCircleActive = ref(false)
const thirdCircleActive = ref(false)

function first() {
    commentLeftPosition.value = 0
    firstCircleActive.value = true
    secondCircleActive.value = false
    thirdCircleActive.value = false
}
function second() {
    commentLeftPosition.value = -440 * 2
    firstCircleActive.value = false
    secondCircleActive.value = true
    thirdCircleActive.value = false
}

function third() {
    commentLeftPosition.value = -440 * 4
    firstCircleActive.value = false
    secondCircleActive.value = false
    thirdCircleActive.value = true
}
</script>

<template>


    <div class=" flex flex-col items-center gap-10 px-5 sm:px-10 lg:px-15 ">
        <div class="title relative w-60 lg:w-85 flex items-center justify-center ">
            <p class="line absolute w-full h-0.5 bg-black z-10"></p>
            <h1 class="px-5 lg:px-8 text-lg lg:text-2xl font-semibold bg-white flex items-center justify-center z-20 "> Client
                Testimonial </h1>
        </div>

        <Comment_List :comment-left-position="commentLeftPosition" />

        <div class="hidden xl:flex items-center gap-2 ">
            <div @click=first :class="{ active: firstCircleActive }"
                class="circle w-2 h-2 cursor-pointer transition-all duration-300 rounded-full bg-black opacity-30 ">
            </div>
            <div @click=second :class="{ active: secondCircleActive }"
                class="circle circle cursor-pointer w-2 h-2 transition-all duration-300 rounded-full bg-black  opacity-30">
            </div>
            <div @click=third :class="{ active: thirdCircleActive }"
                class="circle cursor-pointer circle w-2 h-2 transition-all duration-300 rounded-full bg-black opacity-30">
            </div>
        </div>

    </div>

</template>


<style scoped>
.active {
    opacity: 1;
    width: 1rem;
}
</style>