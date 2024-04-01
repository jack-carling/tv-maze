<script setup>
import { computed } from 'vue'

const props = defineProps({
    premiered: {
        type: String,
    },
    ended: {
        type: String,
    },
})
const dates = computed(() => {
    const premiered = props.premiered ? new Date(props.premiered).getFullYear() : null
    const ended = props.ended ? new Date(props.ended).getFullYear() : null
    if (premiered && ended) {
        return `${premiered} - ${ended}`
    } else {
        return premiered
    }
})
</script>

<template>
    <div>
        {{ dates }}
    </div>
</template>

<style scoped>
div {
    display: flex;
    justify-content: end;
    font-size: 12px;
}
</style>
