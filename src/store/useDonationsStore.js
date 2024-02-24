import { defineStore } from 'pinia'
import { Service } from '@/services'

export const useDonationsStore = defineStore( 'donations', {
  state: () => ( {
    user: {},
    userId: null,
    authorized: false
  } ),
  actions: {
    async getPlannedDonations() {
      try {
        console.log()
        const plannedDonations = await Service.donationPlanApi.donationPlanList()

        console.log( 'plannedDonations: ', plannedDonations )

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
