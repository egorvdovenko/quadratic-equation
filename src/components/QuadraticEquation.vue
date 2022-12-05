<template>
  <form class="equation-form">
    <input class="equation-form__input" type="number" name="a" v-model="a">
		<span class="equation-form__label"> x<sup>2</sup> + </span>
    <input class="equation-form__input" type="number" name="b" v-model="b">
		<span class="equation-form__label"> x + </span>
    <input class="equation-form__input" type="number" name="c" v-model="c">
		<span class="equation-form__label"> = 0 </span>
  </form>
	<div class="equation-results">
		<div>
			D: {{ D || D === 0 ? D : '_' }}
		</div>
		<div>
			ROOTS: {{ roots.length ? roots.join('; ') : '_' }}
		</div>
	</div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  setup() {
		const a = ref(null)
		const b = ref(null)
		const c = ref(null)

		const D = computed(() => {
			if (!a.value) {
				return
			} else {
				return b.value * b.value - 4 * a.value * c.value
			}
		})

		const roots = computed(() => {
			let roots = []

			if (a.value === 0 || D.value < 0) {
				return roots
			}

			if (D.value === 0) {
        roots.push((-b.value + Math.sqrt(D.value)) / (2 * a.value))
			} else if (D.value > 0) {
        roots.push((-b.value + Math.sqrt(D.value)) / (2 * a.value))
        roots.push((-b.value - Math.sqrt(D.value)) / (2 * a.value))
			}

			return roots
		})
		
		return {
			a, 
			b, 
			c, 
			D, 
			roots
		}
  }
}
</script>

<style>
.equation-form {
	display: block;
	padding: 16px;
	box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
	border-radius: 4px;
	font-size: 24px;
	font-weight: bold;
}

.equation-form__input {
	height: 48px;
	width: 96px;
	border: 2px dashed #355C7D;
	border-radius: 4px;
	background-color: white;
	text-align: center;
}

.equation-results {
	font-size: 24px;
	font-weight: bold;
	margin-top: 24px;
}
</style>