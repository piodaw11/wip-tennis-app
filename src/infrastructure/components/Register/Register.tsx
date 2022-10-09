import { FunctionComponent } from 'react'

import Layout from 'infrastructure/components/Layout/Layout'
import RegisterForm from './components/RegisterForm/RegisterForm'
import { StyledRegisterImage, StyledWrapper } from 'infrastructure/components/Register/Register.styled'

const Register: FunctionComponent = () => (
  <Layout>
    <StyledWrapper>
      <StyledRegisterImage />
      <RegisterForm />
    </StyledWrapper>
  </Layout>
  )

export default Register
