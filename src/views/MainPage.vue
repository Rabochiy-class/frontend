<template>
  <RouterView />
  <VBottomNavigation
    grow
    v-model="tab" >

      <VBtn
        value="NewsPage"
        @click="router.push( '/main' )" >
          <VIcon>mdi-newspaper</VIcon>

          <!-- <span>Recent</span> -->
      </VBtn>
    
      <VBtn 
        value="DonationsPage"
        @click="router.push( '/main/donations' )" >
          <VIcon>mdi-hand-coin</VIcon>

          <!-- <span>Favorites</span> -->
      </VBtn>

      <VBtn value="AccountPage" 
        @click="router.push( '/main/account' )" >
          <VIcon>mdi-account</VIcon>

          <!-- <span>Nearby</span> -->
      </VBtn>

  </VBottomNavigation>
</template>
<script setup >
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

onMounted( () => {
  tab.value = route.name
})

const tab = ref( 'DonationsPage' )

</script>
