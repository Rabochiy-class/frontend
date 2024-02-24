<template>
  <VTabs
    v-model="page"
    align-tabs="center" >
    <router-link to="/main/donations">   
      <VTab value="DonationItems">Донации</VTab>
    </router-link>
    <router-link to="/main/donations/centers">
      <VTab value="CentersPage">Центры</VTab>
    </router-link>
    <router-link to="/main/donations/order">
      <VTab value="OrderForm">Запись</VTab>
    </router-link>        
  </VTabs>
  <RouterView
    class="px-6 pb-16"
    @updateTabToForm="page = 'OrderForm'" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const page = ref( 'DonationItems' )

const route = useRoute()
onMounted( () => {
  page.value = route.path.includes( 'order' ) ? 'OrderForm' :
    route.path.includes( 'centers' ) ? 'CentersPage' : 'DonationItems'
})

</script>
