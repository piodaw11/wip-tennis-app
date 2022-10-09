import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'

import useLoginUser from 'infrastructure/components/Login/components/LoginForm/hooks/useLoginUser'
import LoginFormScheme, { LoginFormValues } from 'infrastructure/components/Login/components/LoginForm/LoginFormScheme'

const useLoginForm = () => {
  const {
    onSubmit,
    isLoading
  } = useLoginUser()

  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<LoginFormValues>({
    resolver: yupResolver(LoginFormScheme),
    criteriaMode: 'all',
    mode: 'onChange',
    defaultValues: {
      password: '',
      username: ''
    }
  })

  return {
    control,
    handleSubmit,
    errors,
    isValid,
    onSubmit,
    isLoading
  }
}

export default useLoginForm
