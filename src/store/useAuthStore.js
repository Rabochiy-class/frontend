import { defineStore } from 'pinia'
import { Service } from '@/services'
import cookie from 'cookiejs'

export const useAuthStore = defineStore( 'auth', {
  state: () => ( {
    user: null,
    userId: null,
    authorized: false
  } ),
  actions: {
    async updateInfo( patchedUser ) {
      try {
        const user = await Service.checkLoggingAPi.authMePartialUpdate( { patchedUser } )

        if ( user ) {
          this.user = user
          console.log( 'user: ', user )
        }
      } catch (error) {
        console.warn( error )
      } 
    },
    async getAuth() {
      try {
        const user = await Service.checkLoggingAPi.authMeRetrieve()

        if ( user ) {
          this.user = user
          console.log( 'user: ', user )
        }
      } catch (error) {
        console.warn( error )
      }
    },
    async getUserInfo() {
      try {
        const { user } = await Service.authApi.authLoginCreate( { authLoginCreateRequest } )

        this.user = user
      } catch ( error ) {
        console.warn( error )
      }
    },
    async authLogin( authLoginCreateRequest ) {
      try {
        console.log( { authLoginCreateRequest } )
        const { token, user } = await Service.authApi.authLoginCreate( { authLoginCreateRequest } )

        if ( user ) {
          localStorage.setItem( 'token', token )
          this.user = user

          return true
        }
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
