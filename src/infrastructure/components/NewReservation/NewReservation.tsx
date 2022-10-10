import { FunctionComponent } from 'react'

import Layout from 'infrastructure/components/Layout/Layout'
import SideDatePicker from 'infrastructure/components/NewReservation/components/SideDatePicker'

const NewReservation: FunctionComponent = () => (
  <Layout>
    <SideDatePicker />
  </Layout>
)

export default NewReservation
