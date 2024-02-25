<template>
  <VBtn
    class="mt-4 w-100"
    variant="text"
    @click="router.push( { name: 'LoginPage' } )">
    Назад
  </VBtn>  
  <div class="text-h4">Что-то пошло не так ...</div>
</template>

<script setup >
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
