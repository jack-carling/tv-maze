<script setup>
import { computed } from 'vue'

const props = defineProps({
    weight: {
        type: Number,
    },
})

const rating = computed(() => {
    const percentage = props.weight / 100
    return parseFloat((percentage * 10).toFixed(1))
})
</script>

<template>
    <div class="rating">
        <i class="material-icons">star</i>
        {{ rating }} / 10
    </div>
</template>

<style scoped>
.rating {
    display: flex;
    align-items: center;
    justify-content: end;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 4px;
}

i {
    color: rgb(245, 197, 24);
    margin-right: 8px;
}
</style>
