import { FunctionComponent } from 'react'

import { StyledRegisterLink,
  StyledRegisterText, StyledH1, StyledFormWrapper,
  StyledRegisterWrapper, StyledDividerWrappper, StyledDivider, StyledDividerText } from './LoginForm.styled'
import Form from 'infrastructure/components/Login/components/Form/Form'

const LoginForm:FunctionComponent = () => (
  <StyledFormWrapper>
    <StyledH1 variant="h1">Logowanie</StyledH1>
    <Form />
    <StyledDividerWrappper>
      <StyledDivider />
      <StyledDividerText>lub</StyledDividerText>
      <StyledDivider />
    </StyledDividerWrappper>
    <StyledRegisterWrapper>
      <StyledRegisterText>Nie masz konta?</StyledRegisterText>
      <StyledRegisterLink to="/rejestracja">Zarejestruj się</StyledRegisterLink>
    </StyledRegisterWrapper>
  </StyledFormWrapper>
)

export default LoginForm
