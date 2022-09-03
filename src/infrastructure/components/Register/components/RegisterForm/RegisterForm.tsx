import { FunctionComponent } from 'react'
import LoadingButton
  from '@mui/lab/LoadingButton'
import { Controller, FieldErrors, FieldErrorsImpl, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextField } from '@mui/material'
import RegisterFormScheme, { RegisterFormValues } from 'infrastructure/components/Register/components/RegisterForm/RegisterFormScheme'import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledTypography
} from 'infrastructure/components/Register/components/RegisterForm/RegisterForm.styled'
import RegisterFormItems from 'infrastructure/components/Register/components/RegisterForm/constants/RegisterFormItems'

type Name =  'email' | 'password' | 'passwordRepeat'

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
      passwordRepeat: ''
    }
  })

  return (
      <StyledForm>
        <StyledInput>
          {RegisterFormItems.map(({ label, name }) => (
            <>
              <StyledLabel htmlFor={name}>{label}</StyledLabel>
              <Controller
                name={name as Name}
                control={control}
                render={({ field }) => (
                <TextField {...field} variant='outlined' error={Boolean(errors[name as Name] ) } />
              )}
              />
              {errors[name as Name] && <StyledTypography>{errors[name as Name]?.message}</StyledTypography>}
            </>
          ))}
        </StyledInput>
        <LoadingButton type={'submit'} loading variant="contained">Dalej</LoadingButton>
      </StyledForm>
  )
}

export default RegisterForm
