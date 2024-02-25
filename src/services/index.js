import { AuthenticationApi, DefaultApi, DonationPlanManagementApi, DonationManagementApi, Configuration } from './api'

const config = new Configuration( {
  basePath: 'https://streamsync.ru/backend',
  credentials: 'include',
  headers: {
    'Authorization': 'Token ' + localStorage.getItem( 'token' )
  }
} )

export const Service = {
  authApi: new AuthenticationApi( config ),
  defaultApi: new DefaultApi( config ),
  donationPlanApi: new DonationPlanManagementApi( config ),
  donationApi: new DonationManagementApi( config )
}
