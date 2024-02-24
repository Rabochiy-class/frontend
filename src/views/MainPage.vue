<template>
  <RouterView />
  <VBottomNavigation
    grow
    v-model="tab" >

      <VBtn
        value="NewsPage"
        @click="router.push( '/main/home' )" >
          <VIcon>mdi-newspaper</VIcon>
      </VBtn>
    
      <VBtn 
        value="DonationsPage"
        @click="router.push( '/main/donations' )" >
          <VIcon>mdi-hand-coin</VIcon>
      </VBtn>

      <VBtn value="ProfilePage" 
        @click="router.push( '/main/profile' )" >
          <VIcon>mdi-account</VIcon>
      </VBtn>

  </VBottomNavigation>
</template>
<script setup >
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

onMounted( () => {
  tab.value = route.path.includes( 'profile' ) ? 'ProfilePage' :
    route.path.includes( 'donations' ) ? 'DonationsPage' : 'NewsPage'
})

const tab = ref( 'DonationsPage' )

</script>
