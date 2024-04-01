import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ShowGenres from '@/components/ShowGenres.vue'

describe('ShowGenres', () => {
    const wrapper = shallowMount(ShowGenres, {
        props: {
            genres: ['Fantasy', 'Adventure', 'Drama'],
        },
    })

    it('renders a container with all props as children', () => {
        const elements = wrapper.findAll('div')
        expect(elements.length).toEqual(wrapper.props('genres').length)
    })

    it('renders the text correctly', () => {
        const firstElement = wrapper.find('div')
        expect(firstElement.text()).toEqual(wrapper.props('genres')[0])
    })
})
