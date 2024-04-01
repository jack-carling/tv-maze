<script setup>
import { ref } from 'vue'
import sanitizeHtml from 'sanitize-html'
import StarRating from '@/components/StarRating.vue'
import ShowDates from '@/components/ShowDates.vue'
import ShowGenres from '@/components/ShowGenres.vue'

const props = defineProps({
    id: {
        type: String,
    },
})

const url = `https://api.tvmaze.com/shows/${props.id}`

const loaded = ref(false)
const show = ref(null)

async function getData() {
    const response = await fetch(url)
    show.value = await response.json()
    loaded.value = true
}

getData()
</script>

<template>
    <main v-if="loaded">
        <section class="animate__animated animate__fadeIn">
            <h1 class="">{{ show['name'] }}</h1>
            <div class="frame">
                <img
                    class="animate__animated animate__fadeInLeft"
                    :src="show['image']['medium']"
                    alt=""
                />
                <div class="animate__animated animate__fadeInDown">
                    <ShowGenres :genres="show['genres']" />
                    <StarRating :weight="show['weight']" />
                    <ShowDates
                        :premiered="show['premiered']"
                        :ended="show['ended']"
                    />
                </div>
            </div>
            <div v-html="sanitizeHtml(show.summary)"></div>
        </section>
    </main>
</template>

<style scoped>
main {
    display: flex;
    justify-content: center;
}

main > section {
    max-width: 800px;
}

h1 {
    font-size: 32px;
    margin-bottom: 16px;
}

.frame {
    border: 1px solid #f3f3f4;
    border-radius: 16px;
    padding: 16px;
    margin-bottom: 16px;
    display: grid;
    grid-template-columns: 1fr max-content;
    gap: 16px;
}

img {
    border-radius: 16px;
    max-width: 100%;
}
</style>
