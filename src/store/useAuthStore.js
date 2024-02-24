import { defineStore } from 'pinia'
import { Service } from '@/services'

export const useAuthStore = defineStore( 'auth', {
  state: () => ( {
    user: {},
    userId: null,
    authorized: false
  } ),
  actions: {
    async authLogin( authLoginCreateRequest ) {
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
    },
    async authLogout() {
      try {
        console.log( { authLoginCreateRequest } )
        const status = await Service.authApi.authLogoutCreate()

        console.log( status )
      } catch (error) {
        console.warn( error )
        return false
      }
      return this.authorized
    },


    async requestRegistrationCode( registration ) {
      try {

        const { userId } = await Service.defaultApi.registerNewUser( { registration } )

        this.userId = userId 
      } catch (error) {
        console.warn( error )
        return false
      }
    },
    async confirmEmail( body ) {
      try {
        const emailVerificationSerialzier = { ...body, userId: this.userId }
        const user = await Service.defaultApi.authConfirmEmailRegCreate( { emailVerificationSerialzier } )

        if ( user ) {
          return true
        }
        console.log( user )
      } catch (error) {
        console.warn( error )
        return false
      }
    },
  },
} )
