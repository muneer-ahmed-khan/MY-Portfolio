<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheContainer'
})
</script>

<style scoped>
/* Add any styles here if needed */
</style>
