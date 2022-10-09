import { FunctionComponent } from 'react'

import ReservationPage from 'infrastructure/components/Reservation/components/ReservationPage'
import Layout from 'infrastructure/components/Layout/Layout'

const ReservationView: FunctionComponent = () => (
  <Layout>
    <ReservationPage />
  </Layout>
)

export default ReservationView
