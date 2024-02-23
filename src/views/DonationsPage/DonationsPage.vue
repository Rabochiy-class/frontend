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
    <RouterView />
</template>

<script setup>
import { ref } from 'vue'

const page = ref( 'DonationItems' )

</script>