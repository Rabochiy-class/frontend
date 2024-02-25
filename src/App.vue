<template >
  <VApp
    class="app bg-white"
    v-bind="$attrs" >
    <RouterView />
  </VApp>
</template>

<script setup >
import { onMounted } from 'vue'
onMounted(() => {
  window.addEventListener('touchstart', (event) => {
    if (!event.target.closest('input') && !!event.target.closest('select')) {
      document.activeElement.blur()
    }
  })
})
</script>

<style lang="sass" scoped >
</style>
