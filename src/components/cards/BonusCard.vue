<template>
  <VCard class="text-left pb-4">
    <VImg
      :src="card.bonusImage"
      cover />
    <VCardTitle>
      {{ card.bonusName }}
    </VCardTitle>

    <VCardSubtitle>
      до {{ card.dateValidity }}
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
