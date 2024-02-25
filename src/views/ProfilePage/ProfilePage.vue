<template>
  <VTabs
    v-model="page"
    align-tabs="center" >
    <router-link to="/main/profile">   
      <VTab value="ProfileInfo">Профиль</VTab>
    </router-link>
    <router-link to="/main/profile/bonuses">
      <VTab value="BonusesPage">Бонусы</VTab>
    </router-link>
    <router-link to="/main/profile/settings">
      <VTab value="SettingsPage">Настройки</VTab>
    </router-link>        
  </VTabs>
  <RouterView
    class="px-6 pb-16 pt-4"
    @updateTabToForm="page = 'OrderForm'" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/store/useAuthStore';

const page = ref( 'DonationItems' )

const useAuth = useAuthStore()
const route = useRoute()
onMounted( async () => {
  await useAuth.getAuth()

  page.value = route.path.includes( 'settings' ) ? 'SettingsPage' :
    route.path.includes( 'bonuses' ) ? 'BonusesPage' : 'ProfileInfo'
})

</script>
