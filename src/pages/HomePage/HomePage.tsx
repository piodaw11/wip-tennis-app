import { FunctionComponent } from 'react'

import Layout from 'infrastructure/components/Layout/Layout'
import Header from 'infrastructure/components/Header/Header'

const HomePage: FunctionComponent = () => {
  return (
    <>
      <Layout isLoading={false} />
      <Header />
    </>
  )
}

export default HomePage
