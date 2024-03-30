<script setup>
defineProps({
    show: {
        type: Object,
    },
    width: {
        type: Number,
    },
})
</script>

<template>
    <div
        class="child"
        :style="{
            'min-width': `${width}px`,
        }"
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
