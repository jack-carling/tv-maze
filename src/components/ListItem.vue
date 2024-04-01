<script setup>
defineProps({
    show: {
        type: Object,
    },
    width: {
        type: Number,
    },
    index: {
        type: Number,
    },
})
</script>

<template>
    <div
        class="child animate__animated animate__fadeInLeft"
        :style="{
            'min-width': `${width}px`,
            'animation-delay': `${index * 0.2}s`,
        }"
        @click="$router.push(`/show/${show['id']}`)"
    >
        <img
            :src="show['image']['medium']"
            alt=""
            draggable="false"
        />
    </div>
</template>

<style scoped>
.child {
    scroll-snap-align: start;
}

img {
    max-width: 100%;
    border-radius: 8px;
}
</style>
