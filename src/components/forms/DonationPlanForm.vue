<template >
  <VForm ref="form" class="w-100 text-left" >
    <p class="text-h6">Выберите тип донации</p>
    <p class="text-subtitle-2">После выбора типа донации автоматически отобразится ближайшая 
      доступная дата с учётом интервалов между донациями</p>
    <VChipGroup v-model="info.bloodClass" >
      <VChip value="blood" >Цельная кровь</VChip>

      <VChip value="plasma" >Плазма</VChip>

      <VChip value="platelets" >Тромбоциты</VChip>

      <VChip value="erythrocytes" >Эритроциты</VChip>

      <VChip value="leukocytes" >Гранулоциты</VChip>
    </VChipGroup>
    
    <p class="text-h6">Планируемая дата</p>
    <VDatePicker
      v-model="info.planDate" />
    
    <p class="text-h6">Тип донации</p>
    <VRadioGroup v-model="info.paymentType" >
      <FormCard
        v-for="card in donationTypes"
        v-model="info.paymentType"
        :key="card.id"
        :card="card" />
    </VRadioGroup>

    <p class="text-h6 mt-2">Место сдачи</p>
    <VRadioGroup v-model="info.isOut" >
      <FormCard
        v-for="card in deliveryPlaces"
        v-model="info.isOut"
        :key="card.id"
        :card="card" />
    </VRadioGroup >

    <p class="text-h6 mt-2">Город</p>
    <VSelect
      v-model="info.cityId"
      label="Выберите город"
      variant="underlined"
      item-title="title"
      item-value="id"
      :items="cities" />
    <p class="text-subtitle-2">Если не нашли свой город, напишите нам на
      <a href="mailto:support@donorsearch.org">support@donorsearch.org</a></p>

    <p class="text-h6 mt-2">Центр крови</p>
    <p class="text-subtitle-2">Важно: если ваш центр крови принимает по записи, то нужно отдельно записаться 
      на сайте центра крови или через Госуслуги. Планирование дотации через бота DonorSearch позволит нам за 
      3 дня до указанной даты напомнить о вашем намерении совершить донацию и подготовиться к ней.</p>
    <VSelect
      v-model="info.bloodStationId"
      label="Выберите центр крови"
      variant="underlined"
      class="mt-2"
      item-title="title"
      item-value="id"
      :items="bloodStations" />

    <VCardActions >
      <VBtn
        block
        @click="addDonation" >
        Записаться на донацию
      </VBtn>
    </VCardActions>
  </VForm>
</template>

<script setup >
import { ref, reactive, onMounted, defineEmits } from 'vue'
import { useDonationsStore } from '@/store/useDonationsStore'
import FormCard from '@/components/cards/FormCard.vue'
import { useRoute } from 'vue-router'
import { PaymentTypeEnum } from '@/services/api';

const emit = defineEmits( [ 'update' ] )

const route = useRoute()

const parseISOString = (s) => {
  var b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}

onMounted( () => {
  if ( route.params.body ) {
    emit( 'update' )
    console.log( 'route: ', JSON.parse( route.params.body ) )

    const body = JSON.parse( route.params.body )

    cities = [ body.city ]
    info.cityId = body.cityId


    console.log( 'BODY_ACTIAL:', body )

    Object.keys( info ).forEach( ( key ) => {
      if ( body[ key ] !== null && body[ key ] !== undefined ) {
        console.log( body[ key ] )
        info[ key ] = key === 'planDate' ? parseISOString( body[ key ] ) : key === 'isOut' ? ( info.isOut ? 'Выездная акция' : 'Стационарный пункт' )  : body[ key ]
      }
    })
    // делаем запрос на api/blood_stations/{route.params.body.id} 
    // оттуда получаем city.title и city.id; и bloodStation.address и bloodStations.id
  }
})

const form = ref()
const info = reactive({
  bloodStationId: null,
  cityId: null,
  objectId: null,
  bloodClass: null,
  planDate: null,
  paymentType: null,
  status: null,
  isOut: null,
  contentType: null,
  donation: null,
})

const donationsStore = useDonationsStore()
const addDonation = async () => {
  const body = {
    ...info,
    isOut: info.isOut === 'Выездная акция',
    planDate: info.planDate ?? null,
    status: 'active',
  }

  await donationsStore.donationPlanCreate( body )
}

const donationTypes = [
  {
    id: 'free',
    keyword: 'donationType',
    name: 'Безвозмездно',
    text: 'Питание или компенсация питания (5% МРОТ порядка 700-1500 Р. Учитывается при получении звания Почетного донора)'
  },
  {
    id: 'payed',
    name: 'Платно',
    text: 'Деньги или социальная поддержка. Не учитывается при получении звания почетного донора'
  },  
]
const deliveryPlaces = [
  {
    id: 'Стационарный пункт',
    chosen: false,
    name: 'Стационарный пункт',
    text: 'Центр крови или станция переливания в вашем городе'
  },
  {
    id: 'Выездная акция',
    chosen: false,
    name: 'Выездная акция',
    text: 'День донора, выезды в ВУЗы, передвижные мобильные бригады'
  }, 
]
let cities = reactive([
  {
    id: 1,
    title: 'Москва',
  },
  {
    id: 2,
    title: 'Санкт-Петербург',
  }
])
const bloodStations = [
  {
    title: 'ГКБ им. Е.О. Мухина, отделение переливания крови',
    id: 68,
  },
  {
    title: 'Гематологический научный центр ФГБУ, ГНЦ',
    id: 2908,
  },
]

const handleSwitchChange = ( test ) => {
  console.log( test )
}
</script>

<style lang="sass" scoped >
.error
  color: red
</style>
