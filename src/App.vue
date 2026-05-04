<script setup lang="ts">
import { provide, ref } from 'vue';
import { onMounted } from 'vue';
import Sidebar from './components/Sidebar.vue';


const toggleSidebar = ref(false)

function showSidebar() {
    toggleSidebar.value = true

}
function hideSidebar() {
    toggleSidebar.value = false
}

provide('hideSidebar',  hideSidebar )
provide('showSidebar',showSidebar)


const upButton = ref('none')

window.addEventListener('scroll', () => {
    if (window.scrollY >= 250) {
        upButton.value = 'flex'
    }
    else if (window.scrollY < 250) {
        upButton.value = 'none'
    }
})

function upScrolling() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}


</script>


<template>


    <Sidebar :toggle-sidebar="toggleSidebar" />
    <RouterView />
    <button @click="upScrolling" :style="{ display: upButton }"
        class="z-40 shadow-md shadow-gray-400 bg-gray-200 rounded-full h-10 w-10 lg:h-12 lg:w-12 text-xl fixed right-5  bottom-20 flex items-center justify-center">
        <i class="fa-solid fa-angle-up"></i>
    </button>






</template>