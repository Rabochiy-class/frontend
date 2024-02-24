<template>
  <VTabs
    v-model="page"
    align-tabs="center" >
    <router-link to="/main/home">   
      <VTab value="ProjectsPage">Проекты</VTab>
    </router-link>
    <router-link to="/main/home/articles">
      <VTab value="ArticlesPage">Статьи</VTab>
    </router-link>
    <router-link to="/main/home/events">
      <VTab value="EventsPage">Мероприятия</VTab>
    </router-link>        
  </VTabs>
  <RouterView
    class="px-6 pb-16 pt-4"
    @updateTabToForm="page = 'OrderForm'" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const page = ref( 'DonationItems' )

const route = useRoute()
onMounted( () => {
page.value = route.path.includes( 'events' ) ? 'EventsPage' :
  route.path.includes( 'articles' ) ? 'ArticlesPage' : 'ProjectsPage'
})

</script>
