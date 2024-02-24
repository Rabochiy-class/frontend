<template>
  <div class="bonuses-page">
    <div v-if="selectedBonus === null" >
      <BonusCard
        v-for="bonus in bonuses"
        :key="bonus.id"
        :card="bonus"
        class="mb-4"
        @click="selectBonus( bonus.id )" />
    </div>
    <OpenedBonusCard
      v-else
      :card="selectedBonus"
      @getBack="selectedBonus = null" />
  </div>
</template>

<script setup >
import { ref } from 'vue'
import BonusCard from '@/components/cards/BonusCard.vue'
import OpenedBonusCard from '@/components/cards/OpenedBonusCard.vue'

const bonuses = [
{
    id: 8,
    bonusImage: "https://hackaton.donorsearch.org/media/MIR_9974.jpg.256x119_q75_box-0%2C427%2C2500%2C1590_crop_detail_model-Bonus.jpg",
    partnerImage: "https://hackaton.donorsearch.org/media/%D0%BB%D0%BE%D0%B3%D0%BE_3_%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B8_-_%D0%9E%D0%BB%D1%8C%D0%B3%D0%B0_%D0%9C%D0%BE%D0%B8%D1%81%D0%B5%D0%B5%D0%BD%D0%BA%D0%BE.png.177.44618395303326x150_q75_box-0%2C0%2C2418%2C2044_crop_detail_model-Bonus.png",
    isTaken: false,
    bonusName: "-15% на мерч DonorSearch",
    partnerName: "Vsemayki",
    dateValidity: "2024-12-31",
    isPublished: true,
    h: 2044,
    w: 2418,
    cities: [],
    priority: 0
  },
  {
    id: 10,
    bonusImage: "https://hackaton.donorsearch.org/media/%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0_771%D1%85357.jpg.256x119_q75_box-2%2C0%2C770%2C357_crop_detail_model-Bonus.jpg",
    partnerImage: "https://hackaton.donorsearch.org/media/color_big.png.150.0x150_q75_box-0%2C0%2C500%2C500_crop_detail_model-Bonus.png",
    isTaken: false,
    bonusName: "-20% на все онлайн-курсы",
    partnerName: "Нетология",
    dateValidity: "2024-12-31",
    isPublished: true,
    h: 500,
    w: 500,
    cities: [],
    priority: 0
  }
]

const selectedBonus = ref( null )
const selectBonus = ( id ) => {
  // запрос на GET /api/bonuses/{id}/

  selectedBonus.value = {
    id: 8,
    bonusImage: "https://hackaton.donorsearch.org/media/MIR_9974.jpg",
    partnerImage: "https://hackaton.donorsearch.org/media/%D0%BB%D0%BE%D0%B3%D0%BE_3_%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B8_-_%D0%9E%D0%BB%D1%8C%D0%B3%D0%B0_%D0%9C%D0%BE%D0%B8%D1%81%D0%B5%D0%B5%D0%BD%D0%BA%D0%BE.png.177.44618395303326x150_q75_box-0%2C0%2C2418%2C2044_crop_detail_model-Bonus.png",
    isTaken: false,
    bonusName: "-15% на мерч DonorSearch",
    bonusDescription: "<p>Vsemayki &mdash; самый популярный российский интернет-магазин одежды и аксессуаров с принтами в сфере печати на заказ: в год доставляют порядка миллиона заказов. У компании самый большой в России выбор принтов &mdash; более 150 тыс. принтов, плюс можно сделать товар со своим дизайном. География доставки &mdash; весь мир. Компания &mdash; лицензионный партнер известных российских и зарубежных компаний и сообществ: Disney (MARVEL, DC, Звездные войны), Warner Bros (сериал “Друзья”, вселенная Гарри Поттера и т.д.), Turner (Рик и Морти, Время приключений), КХЛ.</p>\n<p>Скидка 15% для участников Программы привилегий DonorSearch.<br>Промокод суммируется с акциями на сайте.</p>",
    partnerName: "Vsemayki",
    dateValidity: "2024-12-31",
    isPublished: true,
    isExpired: false,
    hasFeedback: false,
    partnerUrl: "https://www.vsemayki.ru/?utm_manager=7409157&utm_source=pr&utm_medium=text&utm_content=donorsearch&utm_campaign=loyalty",
    state: 2,
    bonusConfines: "Данный параметр показывает количество слов, состоящих из букв разл",
    promocode: null,
    w: 2418,
    h: 2044,
    cities: []
  }

}
</script>

<style lang="sass" >
.bonuses-page
  display: grid
</style>