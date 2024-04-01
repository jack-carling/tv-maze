import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ListItem from '@/components/ListItem.vue'

describe('ListItem', () => {
    const wrapper = shallowMount(ListItem, {
        props: {
            show: {
                image: {
                    medium: null,
                },
            },
            width: 210,
            index: 5,
        },
    })

    it('renders a div with animate classes', () => {
        const div = wrapper.find('div')
        expect(div.classes()).toContain('animate__animated')
        expect(div.classes()).toContain('animate__fadeInLeft')
    })
    it('will delay animation depending on index', () => {
        const div = wrapper.find('.child')
        const delay = wrapper.props('index') * 0.2
        expect(div.html()).toContain(`animation-delay: ${delay}s`)
    })
})
