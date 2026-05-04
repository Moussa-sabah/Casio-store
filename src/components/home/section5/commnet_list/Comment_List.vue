<script setup lang="ts">
import Comment from './comment.vue';
const props = defineProps<{
    commentLeftPosition: number
}>()

</script>

<template>
    <div
        class="max-w-full   lg:max-w-220 xl:max-w-210 overflow-x-scroll xl:overflow-x-hidden   flex items-center gap-3 lg:gap-5 ">

        <Comment :comment-left-poistion="commentLeftPosition" />
        <Comment :comment-left-poistion="commentLeftPosition" />
        <Comment :comment-left-poistion="commentLeftPosition" />
        <Comment :comment-left-poistion="commentLeftPosition" />
        <Comment :comment-left-poistion="commentLeftPosition" />
        <Comment :comment-left-poistion="commentLeftPosition" />
    </div>
</template>