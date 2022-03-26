<script setup>
import { inject, onBeforeUnmount, onMounted, ref } from 'vue'

const client = inject('client')
const container = ref()

onMounted(() => {
  container.value.appendChild(client.canvasElement)
})

onBeforeUnmount(() => {
  // Remove the canvas from the container
  // so it doesn't get killed when the DOM is unmounted
  client.canvasElement.remove()
})
</script>

<template>
  <main>
    <div class="container" ref="container">
      <!-- a canvas element will be injected here -->
    </div>
  </main>
</template>

<style scoped>
.container {
  margin: 32px;
  border: 2px solid yellow;
  display: inline-block;
  width: 800px;
  height: 600px;
}

.container :deep(canvas) {
  border: 2px solid red;
}
</style>
