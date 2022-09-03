import { FunctionComponent } from 'react'

import Layout from 'infrastructure/components/Layout/Layout'

const HomePage: FunctionComponent = () => {
  return (
    <>
      <Layout isLoading={false} />
      <Header />
    </>
  )

export default HomePage
