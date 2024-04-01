import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import StarRating from '@/components/StarRating.vue'

describe('StarRating', () => {
    const wrapper = shallowMount(StarRating, {
        props: {
            weight: 85,
        },
    })

    it('renders a div with the correct rating', () => {
        const element = wrapper.find('div')
        expect(element.text()).toContain('8.5 / 10')
    })
})
