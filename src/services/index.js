import { AuthenticationApi, AccountCreationAndConfirmationApi, Configuration } from './api'

const config = new Configuration( {
  basePath: 'https://hackaton.donorsearch.org',
} )

export const Service = {
  authApi: new AuthenticationApi( config ),
  accountCreationApi: new AccountCreationAndConfirmationApi( config ),
}
