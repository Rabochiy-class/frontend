import { defineStore } from 'pinia'
import { Service } from '@/services'

export const useProfileStore = defineStore( 'profile', {
  state: () => ( {
    bonuses: [],
  } ),
  actions: {
    async getBonuses() {
      try {
        const { results } = await Service.bonusInformationApi.bonusesList()

        if ( results ) {
          console.log( 'bonuses: ', results )
          this.bonuses = results
          return true
        }
        console.log( user )
      } catch (error) {
        console.warn( error )
        return false
      }
      return this.authorized
    },
    async getBonusById( id ) {
      try {
        const bonus = await Service.bonusInformationApi.bonusesRetrieve( { id } )
 
        if ( bonus ) {
          console.log( 'bonuses: ', bonus )
          return bonus
        }
        console.log( user )
      } catch (error) {
        console.warn( error )
        return false
      }
      return this.authorized
    },    
  },
} )
