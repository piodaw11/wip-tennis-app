import { FunctionComponent } from 'react'

import Layout from 'infrastructure/components/Layout/Layout'
import SideDatePicker from 'infrastructure/components/NewReservation/components/SideDatePicker'
import ReservationHours from 'infrastructure/components/NewReservation/components/ReservationHours/ReservationHours'

const NewReservation: FunctionComponent = () => (
  <Layout>
    <SideDatePicker />
    <ReservationHours />
  </Layout>
)

export default NewReservation
