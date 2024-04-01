<script setup>
defineProps({
    genres: {
        type: Array,
    },
})
</script>

<template>
    <section>
        <div
            v-for="(genre, index) in genres"
            :key="index"
        >
            {{ genre }}
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-wrap: wrap;
    max-width: 200px;
    gap: 8px;
    justify-content: end;
    margin-bottom: 8px;
}

div {
    border: 1px solid #f3f3f4;
    padding: 6px;
    border-radius: 6px;
    font-size: 12px;
    word-break: keep-all;
}
</style>
