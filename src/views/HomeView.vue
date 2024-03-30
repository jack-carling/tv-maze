<script setup>
import { onMounted, onUnmounted, reactive } from 'vue'
import ListRow from '@/components/ListRow.vue'

const url = 'https://api.tvmaze.com/shows'

const categories = reactive({})

async function getData() {
    const response = await fetch(url)
    const data = await response.json()
    data.sort((a, b) => b.weight - a.weight)
    categories['Popular'] = data.splice(0, 10)
    const genres = new Set(data.map((v) => v['genres']).flat())
    const alreadyListed = []
    for (const genre of genres) {
        const shows = data
            .filter((v) => {
                return v['genres'].includes(genre) && !alreadyListed.includes(v['id'])
            })
            .splice(0, 10)
        alreadyListed.push(...shows.map((v) => v['id']))
        if (shows.length >= 5) {
            categories[genre] = shows
        }
    }
}

const widths = reactive([])

function calculateWidths() {
    widths.splice(0, widths.length)
    const max = 1400

    let percentage = 1
    if (window.innerWidth <= max) {
        percentage = window.innerWidth / max
    }
    const fullSize = Math.round(90 * percentage + 120)
    const smallerSize = Math.round(fullSize * 0.8)
    widths.push(smallerSize, smallerSize, fullSize, smallerSize)
}

onMounted(() => {
    window.addEventListener('resize', calculateWidths)
})

onUnmounted(() => {
    window.removeEventListener('resize', calculateWidths)
})

getData()
calculateWidths()
</script>

<template>
    <ListRow
        v-for="(shows, category, index) in categories"
        :key="index"
        :width="widths[index % 4]"
        :index
        :category
        :shows
    />
</template>

<style scoped></style>
