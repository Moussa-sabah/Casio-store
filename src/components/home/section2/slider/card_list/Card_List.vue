<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Card from './card.vue';

const props = defineProps<{
    cardLeftPosition: number
}>()

const cardListWidth = ref(0)
const cardNumberBySide = ref(0)
const spaceBetweenCards = ref(0)


const emits = defineEmits<{
    setLeftPostitonChanging: [number]
}>()




function setLeftPostitonChanging(cardWidth: number, spaceBetweenCards: number) {
    emits('setLeftPostitonChanging', cardWidth + spaceBetweenCards)
}

function setListCardWidth(cardWidth: number) {
    if (window.innerWidth >= 1200) {
        spaceBetweenCards.value = 32
        cardNumberBySide.value = 3
    }
    else if (window.innerWidth >= 1024) {
        spaceBetweenCards.value = 20
        cardNumberBySide.value = 3
    }
    else if (window.innerWidth >= 1) {
        spaceBetweenCards.value = 10
        cardNumberBySide.value = 2
    }
    cardListWidth.value = cardWidth * cardNumberBySide.value + (spaceBetweenCards.value * 2)
    setLeftPostitonChanging(cardWidth, spaceBetweenCards.value)
}








</script>



<template>


    <div :style="{ maxWidth: `${cardListWidth}px`, gap: `${spaceBetweenCards}px` }"
        class="flex items-center  justify-start overflow-hidden  ">
        <Card v-on:set-list-card-width="setListCardWidth" :card-left-position="props.cardLeftPosition"
            img="../../../../../../../images/image (5).avif" />
        <Card :card-left-position="props.cardLeftPosition" img="../../../../../../../images/image (4).avif" />
        <Card :card-left-position="props.cardLeftPosition" img="../../../../../../../images/image (3).avif" />
        <Card :card-left-position="props.cardLeftPosition" img="../../../../../../../images/image (1).avif" />
        <Card :card-left-position="props.cardLeftPosition" img="../../../../../../../images/image (6).avif" />
        <Card :card-left-position="props.cardLeftPosition" img="../../../../../../../images/image (7).avif" />
        <Card :card-left-position="props.cardLeftPosition" img="../../../../../../../images/image (8).avif" />
        <Card :card-left-position="props.cardLeftPosition" img="../../../../../../../images/image (9).avif" />
        <Card :card-left-position="props.cardLeftPosition" img="../../../../../../../images/image (10).avif" />
    </div>


</template>
