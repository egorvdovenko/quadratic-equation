<template>
  <div>
    <h1 class="title">QUADRATIC_EQUATATION</h1>
    <QuadraticEquation />
  </div>
</template>

<script>
import QuadraticEquation from './components/QuadraticEquation.vue'

export default {
  name: 'App',
  components: {
    QuadraticEquation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #355C7D;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F8B195;
}

.title {
	font-size: 24px;
	font-weight: bold;
  margin-top: 0;
	margin-bottom: 24px;
}
</style>
