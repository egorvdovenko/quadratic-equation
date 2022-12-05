import { mount } from '@vue/test-utils'
import QuadraticEquation from '@/components/QuadraticEquation.vue'

async function setArguments (wrapper, { a, b, c }) {
  await wrapper.find('[name="a"]').setValue(a)
  await wrapper.find('[name="b"]').setValue(b)
  await wrapper.find('[name="c"]').setValue(c)
}

describe('QuadraticEquation.vue', () => {
  describe('корректное вычисление', () => {
    describe('полного квадратного уравнения', () => {
      it('если D > 0', async () => {
        const wrapper = mount(QuadraticEquation)
        await setArguments(wrapper, { a: 4, b: 5, c: -6 })
  
        expect(wrapper.componentVM.D).toEqual(121)
        expect(wrapper.componentVM.roots).toEqual([0.75, -2])
      })
      it('если D == 0', async () => {
        const wrapper = mount(QuadraticEquation)
        await setArguments(wrapper, { a: 1, b: -6, c: 9 })
  
        expect(wrapper.componentVM.D).toEqual(0)
        expect(wrapper.componentVM.roots).toEqual([3])
      })
      it('если D < 0', async () => {
        const wrapper = mount(QuadraticEquation)
        await setArguments(wrapper, { a: 3, b: 1, c: 2 })
  
        expect(wrapper.componentVM.D).toEqual(-23)
        expect(wrapper.componentVM.roots).toEqual([])
      })
    })
    describe('неполного квадратного уравнения', () => {
      it('вида a*x*x + b*x = 0, где a != 0, b != 0', async () => {
        const wrapper = mount(QuadraticEquation)
        await setArguments(wrapper, { a: 2, b: 8, c: 0 })
    
        expect(wrapper.componentVM.roots).toEqual([0, -4])
      })
      it('вида a*x*x = 0, где a != 0', async () => {
        const wrapper = mount(QuadraticEquation)
        await setArguments(wrapper, { a: 2, b: 0, c: 0 })
    
        expect(wrapper.componentVM.roots).toEqual([0])
      })
      describe('вида a*x*x + c = 0, где a != 0, c != 0', () => {
        it('если -1 * (c / a) < 0', async () => {
          const wrapper = mount(QuadraticEquation)
          await setArguments(wrapper, { a: 2, b: 0, c: 8 })
    
          expect(wrapper.componentVM.roots).toEqual([])
        })
        it('если -1 * (c / a) > 0', async () => {
          const wrapper = mount(QuadraticEquation)
          await setArguments(wrapper, { a: 2, b: 0, c: -8 })
    
          expect(wrapper.componentVM.roots).toEqual([2, -2])
        })
      })
    })
  })
})
