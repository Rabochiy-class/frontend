import { AuthenticationApi, DefaultApi, DonationPlanManagementApi, Configuration } from './api'

const config = new Configuration( {
  basePath: 'https://1702-31-129-45-170.ngrok-free.app',
  headers: { 'ngrok-skip-browser-warning': '69420' },
} )

const mainConfig = new Configuration( {
  basePath: 'https://1702-31-129-45-170.ngrok-free.app',
  credentials: 'include',
} )

export const Service = {
  authApi: new AuthenticationApi( config ),
  defaultApi: new DefaultApi( config ),
  donationPlanApi: new DonationPlanManagementApi( mainConfig ),
}
