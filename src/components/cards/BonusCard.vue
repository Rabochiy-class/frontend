<template>
  <VCard class="text-left pb-4 bonus-card">
    <VImg
      :src="card.bonusImage"
      cover />
    <VCardTitle>
      {{ card.bonusName }}
    </VCardTitle>

    <VCardSubtitle>
      до {{ card.dateValidity ? card.dateValidity.toLocaleDateString( 'ru' ) : 'Дедлайн недоступен' }}
    </VCardSubtitle>      
  </VCard>

</template>

<script setup >

const props = defineProps({
  card: {
    type: Object,
    default: () => ({}),
  }
})

</script>
