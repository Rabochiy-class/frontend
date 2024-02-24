import { defineStore } from 'pinia'
import { Service } from '@/services'

export const useDonationsStore = defineStore( 'donations', {
  state: () => ( {
    user: {},
    userId: null,
    authorized: false
  } ),
  actions: {
    async getPastDonations() {
      try {
        console.log( { authLoginCreateRequest } )
        const user = await Service.authApi.authLoginCreate( { authLoginCreateRequest } )

        if ( user ) {
          return true
        }
        console.log( user )
      } catch (error) {
        console.warn( error )
        return false
      }
      return this.authorized
      // this.user = user
    },
  },
} )
