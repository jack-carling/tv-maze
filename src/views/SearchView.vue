<script setup>
import { useRoute } from 'vue-router'
import { reactive, watch } from 'vue'

const route = useRoute()
const results = reactive([])

watch(
    () => route.query.q,
    (query) => {
        if (query) getSearchData(query)
    },
    { immediate: true }
)

async function getSearchData(query) {
    results.splice(0, results.length)
    const url = `https://api.tvmaze.com/search/shows?q=${query}`
    const response = await fetch(url)
    const data = await response.json()
    results.push(...data.filter((v) => v.show.image))
}
</script>

<template>
    <main>
        <section v-if="!results.length">
            <div class="loader"></div>
        </section>
        <section
            class="results"
            v-else
        >
            <img
                @click="$router.push(`/show/${data.show.id}`)"
                v-for="(data, index) in results"
                class="animate__animated animate__fadeInLeft"
                :style="{ 'animation-delay': `${index * 0.5}s` }"
                :src="data.show.image?.medium"
                :key="index"
                alt=""
            />
        </section>
    </main>
</template>

<style scoped>
main {
    display: flex;
    justify-content: center;
}

main > section {
    max-width: 100%;
    width: 800px;
    display: flex;
    justify-content: center;
}

.results {
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(5, 1fr);
}

@media screen and (max-width: 992px) {
    .results {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media screen and (max-width: 600px) {
    .results {
        grid-template-columns: repeat(2, 1fr);
    }
}

img {
    cursor: pointer;
    border-radius: 16px;
    max-width: 100%;
}

.loader {
    width: 50px;
    padding: 8px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: #f3f3f4;
    --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
    -webkit-mask: var(--_m);
    mask: var(--_m);
    -webkit-mask-composite: source-out;
    mask-composite: subtract;
    animation: l3 1s infinite linear;
}

@keyframes l3 {
    to {
        transform: rotate(1turn);
    }
}
</style>
