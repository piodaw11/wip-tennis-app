import { FunctionComponent } from 'react'
import Cookies from 'js-cookie'

import { StyledRegisterLink,
  StyledRegisterText, StyledH1, StyledFormWrapper,
  StyledRegisterWrapper, StyledDividerWrappper, StyledDivider, StyledDividerText } from './LoginForm.styled'
import Form from 'infrastructure/components/Login/components/Form/Form'
import { useGetMeQuery } from 'infrastructure/components/Layout/store/user/userApi'
import useRouter from 'app/hooks/useRouter'
import CookiesName from 'infrastructure/enums/CookiesName'
import Routing from 'infrastructure/enums/Routing'

const LoginForm:FunctionComponent = () => {
  const { replace } = useRouter()
  const { data } = useGetMeQuery({ authToken: Cookies.get(CookiesName.AUTH_TOKEN) })

  if (data) {
    replace(Routing.Home)
  }

  return (
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
        <StyledRegisterLink to={Routing.Register}>Zarejestruj się</StyledRegisterLink>
      </StyledRegisterWrapper>
    </StyledFormWrapper>
  )
}

export default LoginForm
