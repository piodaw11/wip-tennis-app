import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import Cookies from 'js-cookie'

import useLoginUser from 'infrastructure/components/Login/components/LoginForm/hooks/useLoginUser'
import LoginFormScheme, { LoginFormValues } from 'infrastructure/components/Login/components/LoginForm/LoginFormScheme'
import CookiesName from 'infrastructure/enums/CookiesName'

const useLoginForm = () => {
  const {
    onSubmit,
    isLoading,
    checked
  } = useLoginUser()

  const username = Cookies.get(CookiesName.USERNAME)

  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<LoginFormValues>({
    resolver: yupResolver(LoginFormScheme),
    criteriaMode: 'all',
    mode: 'onChange',
    defaultValues: {
      username: username || '',
      password: ''
    }
  })

  return {
    control,
    handleSubmit,
    errors,
    isValid,
    onSubmit,
    isLoading,
    checked
  }
}

export default useLoginForm
