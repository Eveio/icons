import IconAccreditation from '../icons/IconAccreditation.vue'
import { mount } from '@vue/test-utils'

describe('Icon', () => {
  it('should render', () => expect(mount(IconAccreditation).html()).toMatchSnapshot())

  it('should pass classes through', () => {
    const wrapper = mount(IconAccreditation, {
      propsData: {
        class: 'icon-xs'
      }
    })
    expect(wrapper.classes()).toContain('icon-xs')
  })
})
