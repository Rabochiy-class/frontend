import { AuthenticationApi, DefaultApi, AccountCreationAndConfirmationApi, Configuration } from './api'

const config = new Configuration( {
  basePath: 'http://31.129.45.170:5000',
} )

export const Service = {
  authApi: new AuthenticationApi( config ),
  defaultApi: new DefaultApi( config ),
}
