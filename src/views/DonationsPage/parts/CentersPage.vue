<template>
  <div>
    <div class="text-h6 text-left">Потребности центров крови</div>
    <VSelect
      v-model="city"
      label="Выберите город"
      variant="underlined"
      :items="['Москва', 'Санкт-Петербург']" />
    <BloodCenter
      v-for="center in centers"
      :key="center.id"
      :card="center" />
  </div>
</template>

<script setup >
import { ref } from 'vue'
import BloodCenter from '@/components/cards/BloodCenter.vue'

const city = ref( 'Москва' )

const centers = [
  {
    cityId: 1,
    id: 0,
    title: 'Центр крови им. Гаврилова (центр на Беговой)',
    address: 'Москва, ул. Поликарпова, д.14, корп. 2',
    worktime: 'пн.– чт. с 09:00 до 14:00, пт. с 09:00 до 13:00',
    bloodGroup: [
    "o_plus",
    "o_minus",
    "a_plus",
    "b_plus",
    "b_minus",
    "ab_plus",
    "ab_minus"
    ],
    city: {
      id: 1,
      title: 'Москва',
    }
  },
  {
    city_id: 1,
    id: 1,
    title: 'Филиал №3 3-го ЦВКГ им.Вишневского',
    address: '143000, Московская обл., Одинцовский р-н, Одинцово г., ул. Маршала Бирюзова, 1',
    worktime: '',
    bloodGroup: []
  },
]

</script>