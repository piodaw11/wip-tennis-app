import { FunctionComponent } from 'react'
import RegisterFormScheme,
{ RegisterFormValues }
  from 'infrastructure/components/Register/components/RegisterForm/RegisterFormScheme'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextField } from '@mui/material'
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledTypography
} from 'infrastructure/components/Register/components/RegisterForm/RegisterForm.styled'
import LoadingButton from '@mui/lab/LoadingButton'

const RegisterForm:FunctionComponent = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(RegisterFormScheme),
    criteriaMode: 'all',
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      password2: ''
    }
  })

    console.log(errors)
  return (
    <StyledForm onSubmit={handleSubmit((data) => { console.log(data) })}>
      <StyledInput>
        <StyledLabel htmlFor="email">Email</StyledLabel>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField {...field} variant="outlined" error={Boolean(errors.email?.type)} />
            )}
        />
        {errors.email && <StyledTypography>{errors.email.message}</StyledTypography>}
      </StyledInput>
      <StyledInput>
        <StyledLabel htmlFor="password">Hasło</StyledLabel>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField {...field} variant="outlined" error={Boolean(errors.password?.type)} />
            )}
        />
        {errors.password && <StyledTypography>{errors.password.message}</StyledTypography>}
      </StyledInput>
      <StyledInput>
        <StyledLabel htmlFor="password2">Powtórz hasło</StyledLabel>
        <Controller
          name="password2"
          control={control}
          render={({ field }) => (
            <TextField {...field} variant="outlined" error={Boolean(errors.password2?.type)} />
            )}
        />
        {errors.password2 && <StyledTypography>{errors.password2.message}</StyledTypography>}
      </StyledInput>
      <LoadingButton type="submit" loading variant="contained">Dalej</LoadingButton>
    </StyledForm>
  )
}

export default RegisterForm
