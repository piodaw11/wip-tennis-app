import { FunctionComponent } from 'react'

import Layout from 'infrastructure/components/Layout/Layout'
import LoginForm from 'infrastructure/components/Login/components/LoginForm/LoginForm'
import { StyledLoginWrapper, StyledRegisterImage } from 'infrastructure/components/Login/Login.styled'

const Login:FunctionComponent = () => (
  <Layout>
    <StyledLoginWrapper>
      <StyledRegisterImage />
      <LoginForm />
    </StyledLoginWrapper>
  </Layout>
)

export default Login
