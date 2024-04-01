<script setup>
import ListItem from '@/components/ListItem.vue'
import { onMounted, ref, watch } from 'vue'

const props = defineProps({
    category: {
        type: String,
    },
    shows: {
        type: Array,
    },
    width: {
        type: Number,
    },
    index: {
        type: Number,
    },
})

watch(
    () => props.width,
    (newValue, oldValue) => {
        if (newValue !== oldValue) {
            validateScrollPositions(container.value.scrollLeft)
        }
    }
)

function hasTouch() {
    return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
}

function scroll(direction) {
    const currentPosition = container.value.scrollLeft
    const newPosition = direction === 'left' ? currentPosition - props.width : currentPosition + props.width
    container.value.scroll({ left: newPosition, behavior: 'smooth' })

    validateScrollPositions(newPosition)
}

function validateScrollPositions(position) {
    allowLeftScroll.value = position > 16
    allowRightScroll.value = container.value.scrollWidth - position > container.value.offsetWidth
}

onMounted(() => {
    validateScrollPositions(0)
})

const hover = ref(false)
const container = ref(null)
const allowLeftScroll = ref(false)
const allowRightScroll = ref(false)
</script>

<template>
    <h3
        class="title animate__animated animate__fadeInLeft"
        :style="{ 'margin-top': index === 0 ? '0' : '16px' }"
    >
        {{ category }}
    </h3>
    <section
        class="overlay"
        @mouseover="hover = true"
        @mouseleave="hover = false"
    >
        <div
            v-show="!hasTouch()"
            @click="scroll('left')"
            :style="{
                'opacity': hover && allowLeftScroll ? 1 : 0,
                'cursor': allowLeftScroll ? 'pointer' : 'default',
                'z-index': 1,
            }"
            class="left"
        >
            <i class="material-icons">chevron_left</i>
        </div>
        <section
            ref="container"
            class="container"
        >
            <ListItem
                v-for="(show, i) in shows"
                :key="i"
                :index="i"
                :show
                :width
            />
        </section>
        <div
            v-show="!hasTouch()"
            @click="scroll('right')"
            :style="{
                'opacity': hover && allowRightScroll ? 1 : 0,
                'cursor': allowRightScroll ? 'pointer' : 'default',
                'z-index': 1,
            }"
            class="right"
        >
            <i class="material-icons">chevron_right</i>
        </div>
    </section>
</template>

<style scoped>
.title {
    margin-bottom: 16px;
}

.overlay {
    position: relative;
}

.left,
.right {
    background: rgb(20, 17, 15);
    position: absolute;
    display: flex;
    opacity: 0;
    transition: opacity 0.5s ease;
    align-items: center;
    width: 64px;
    height: 100%;
    top: 0;
}

.left {
    background: linear-gradient(90deg, rgba(20, 17, 15, 0.75) 75%, rgba(20, 17, 15, 0) 100%);
    left: 0;
}

.right {
    background: linear-gradient(-90deg, rgba(20, 17, 15, 0.75) 0%, rgba(20, 17, 15, 0) 100%);
    right: 0;
}

.container {
    display: flex;
    gap: 16px;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

i {
    font-size: 48px;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

::-webkit-scrollbar {
    display: none;
}
</style>
