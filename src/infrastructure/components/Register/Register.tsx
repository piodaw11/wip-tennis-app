import { FunctionComponent } from 'react'

import RegisterForm from 'infrastructure/components/Register/components/RegisterForm/RegisterForm'
import Layout from 'infrastructure/components/Layout/Layout'

const Register:FunctionComponent = () => (
  <Layout>
    <RegisterForm />
  </Layout>
  )

export default Register
