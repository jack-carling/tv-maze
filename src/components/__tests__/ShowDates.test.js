import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ShowDates from '@/components/ShowDates.vue'

describe('ShowDates', () => {
    const wrapper = shallowMount(ShowDates, {
        props: {
            premiered: '2001-01-01',
            ended: '2022-12-31',
        },
    })

    it('renders a div with correct dates', () => {
        const div = wrapper.find('div')
        expect(div.text()).toContain('2001 - 2022')
    })
})
