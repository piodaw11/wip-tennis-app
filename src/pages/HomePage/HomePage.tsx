import { FunctionComponent } from 'react'

import Layout from 'infrastructure/components/Layout/Layout'
import Header from 'infrastructure/components/Header/Header'

const HomePage: FunctionComponent = () => (
  <>
    <Layout isLoading={false}>
      Childdren
    </Layout>
    <Header />
  </>
  )
export default HomePage
