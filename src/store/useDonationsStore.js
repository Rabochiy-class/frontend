import { defineStore } from 'pinia'
import { Service } from '@/services'

export const useDonationsStore = defineStore( 'donations', {
  state: () => ( {
    futureDonations: [],
    pastDonations: [],
  } ),
  actions: {
    async getPlannedDonations() {
      try {
        console.log()
        const { results } = await Service.donationPlanApi.donationPlanList()

        this.futureDonations = results
      } catch (error) {
        console.warn( error )
        return false
      }
    },
    async donationPlanCreate( donationPlan ) {
      try {
        console.log( 'donationPlan: ', donationPlan )
        const { results } = await Service.donationPlanApi.donationPlanCreate( { donationPlan } )

        // this.futureDonations = results
      } catch (error) {
        console.warn( error )
        return false
      }
    },
    async donationPastCreate( donationCreate ) {
      try {
        await Service.donationApi.donationsCreate( { donationCreate } )

        // this.futureDonations = results
      } catch (error) {
        console.warn( error )
        return false
      }
    },    
    async donationPlanUpdate( donationPlan ) {
      try {

        await Service.donationPlanApi.donationPlanPartialUpdate( { donationPlan } )

        // this.futureDonations = results
      } catch (error) {
        console.warn( error )
        return false
      }
    },
    async donationPastUpdate( donationPlan ) {
      try {
        console.log( 'donationPlan: ', donationPlan )

        const { results } = await Service.donationApi.donationsPartialUpdate( { donationPlan } )

        // this.futureDonations = results
      } catch (error) {
        console.warn( error )
        return false
      }
    },      
    async getDonations() {
      try {
        const { results } = await Service.donationApi.donationsList()

        console.log( results )
        this.pastDonations = results
      } catch (error) {
        console.warn( error )
        return false
      }
    },
    async deleteDonation( id ) {
      try {
        await Service.donationPlanApi.donationPlanDestroy( { id } )

      } catch ( error ) {
        console.warn( error )
      }
    }  
  },
} )
