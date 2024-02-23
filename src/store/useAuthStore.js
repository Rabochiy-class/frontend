import { defineStore } from 'pinia'
// import { Service } from '@/services'

export const useAuthStore = defineStore( 'auth', {
  state: () => ( {
    user: {},
    userId: null,
    authorized: false
  } ),
  actions: {
    async auth( authLoginCreateRequest ) {
      try {
        console.log( { authLoginCreateRequest } )
        // const user = await Service.authApi.authLoginCreate( { authLoginCreateRequest } )

        // this.authorized = true
      } catch (error) {
        console.warn( error )
      }
      return this.authorized
      // this.user = user
    },
    async createUser( user ) {
      console.log( { user } )
      // const user = await Service.accountCreationApi.authRegistrationCreate( { registration } )
      this.userId = 'test_UserId'
    },
    async confirmEmail( body ) {
      try {
        console.log( { ...body, userId: this.userId } )
        // const user = await Service.accountCreationApi.authRegistrationCreate( { registration } )

        this.authorized = true
      } catch (error) {
        console.warn( error )
      }
      return this.authorized
    },
  },
} )
