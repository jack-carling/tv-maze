<script setup>
import { nextTick, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import debounce from 'lodash.debounce'

const searching = ref(false)
const searchInput = ref('')
const searchRef = ref(null)

const route = useRoute()
const router = useRouter()

function handleInput() {
    if (route.name !== 'Search') {
        router.push('/search')
    }
    search()
}

function setQuery() {
    router.replace({ query: { q: searchInput.value } })
}

watch(searching, async (value) => {
    if (value) {
        await nextTick()
        searchRef.value.focus()
    } else {
        searchInput.value = ''
    }
})

const search = debounce(function () {
    setQuery()
}, 1000)
</script>

<template>
    <section>
        <img
            @click="$router.push('/')"
            src="@/assets/logo.png"
        />
        <div>
            <input
                @keyup.enter="setQuery"
                v-if="searching"
                ref="searchRef"
                v-model="searchInput"
                @input="handleInput"
                type="text"
                placeholder="Search..."
            />
            <i
                @click="searching = !searching"
                class="material-icons"
            >
                {{ searching ? 'close' : 'search' }}
            </i>
        </div>
    </section>
</template>

<style scoped>
section {
    z-index: 999;
    position: sticky;
    top: 0;
    padding: 16px 0;
    height: 64px;
    background: rgb(20, 17, 15);
    background: linear-gradient(180deg, rgba(20, 17, 15, 1) 90%, rgba(20, 17, 15, 0) 100%);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

div {
    display: flex;
    align-items: center;
}

input[type='text'] {
    color: #f3f3f4;
    padding: 4px 8px;
    margin-right: 16px;
    font-size: 16px;
    border: 1px solid #f3f3f4;
    border-radius: 8px;
    background: none;
    outline: none;
}

img {
    max-height: 24px;
}

img,
i {
    cursor: pointer;
}
</style>
