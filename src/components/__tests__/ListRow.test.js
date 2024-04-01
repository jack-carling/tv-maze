import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ListRow from '@/components/ListRow.vue'

describe('ListRow', () => {
    const wrapper = shallowMount(ListRow, {
        props: {
            category: 'Popular',
            shows: [],
            width: 210,
            index: 0,
        },
    })

    const shows = []
    for (let i = 1; i <= 10; i++) {
        const data = {
            id: i,
            name: `Test ${i}`,
            image: { medium: null },
        }
        shows.push(data)
    }
    wrapper.setProps({ shows })

    it('renders a h3 with category title', () => {
        const h3 = wrapper.find('h3')
        expect(h3.text()).toEqual('Popular')
    })
    it('renders left and right buttons', () => {
        const left = wrapper.find('.left')
        const right = wrapper.find('.right')
        expect(left.exists()).toBeTruthy()
        expect(right.exists()).toBeTruthy()
    })
    it('renders a container with 10 children', () => {
        const elements = wrapper.findAll('list-item-stub')
        expect(elements.length).toEqual(10)
    })
})
