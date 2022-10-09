import { Fragment, FunctionComponent } from 'react'
import { TextField } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { Controller } from 'react-hook-form'

import { StyledForm, StyledInput, StyledLabel,
  StyledRegisterLink, StyledRegisterText, StyledRegisterWrapper, StyledTypography } from './LoginForm.styled'
import LoginFormItems from 'infrastructure/components/Login/components/LoginForm/constants/LoginFormItems'
import useLoginForm from 'infrastructure/components/Login/components/LoginForm/hooks/useLoginForm'

type FieldName = 'username' | 'password'

const LoginForm:FunctionComponent = () => {
  const {
    control,
    handleSubmit,
    errors,
    isValid,
    onSubmit,
    isLoading
  } = useLoginForm()

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInput>
          {LoginFormItems.map(({ label, name }) => (
            <Fragment key={label}>
              <StyledLabel htmlFor={name}>{label}</StyledLabel>
              <Controller
                name={name as FieldName}
                control={control}
                render={({ field }) => (
                  <TextField {...field} variant="outlined" error={Boolean(errors[name as FieldName])} />
                )}
              />
              {errors[name as FieldName] && <StyledTypography>{errors[name as FieldName]?.message}</StyledTypography>}
            </Fragment>
          ))}
        </StyledInput>
        <LoadingButton
          type="submit"
          loading={isLoading}
          disabled={!isValid}
          variant="contained"
        >
          Zaloguj się
        </LoadingButton>
      </StyledForm>
      <StyledRegisterWrapper>
        <StyledRegisterText>Nie masz konta?</StyledRegisterText>
        <StyledRegisterLink to="/rejestracja">Zarejestruj się</StyledRegisterLink>
      </StyledRegisterWrapper>
    </>
  )
}

export default LoginForm
