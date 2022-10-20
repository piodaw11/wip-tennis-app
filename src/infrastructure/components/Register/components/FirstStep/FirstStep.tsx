import { FunctionComponent } from 'react'
import { Controller } from 'react-hook-form'
import { TextField } from '@mui/material'

import {
  StyledButtonWrapper,
  StyledForm,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  StyledLoginLinkWrapper,
  StyledRegisterLink,
  StyledRegisterText,
  StyledTypography,
  StyledErrorMessage
} from 'infrastructure/components/Register/components/FirstStep/FirstStep.styled'
import RegisterFormItemsFirstStep
  from 'infrastructure/components/Register/components/RegisterForm/constants/RegisterFormItemsFirstStep'

import StepperButton
  from 'infrastructure/components/Register/components/StepperButton/StepperButton'
import useFirstStepManager from 'infrastructure/components/Register/components/FirstStep/hooks/useFirstStepManager'
import { Email } from 'infrastructure/components/Register/types/Register'
import Routing from 'infrastructure/enums/Routing'

const FirstStep: FunctionComponent = () => {
  const {
    control,
    handleSubmit,
    errors,
    isValid,
    isLoading,
    onSubmit,
    error
  } = useFirstStepManager()

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput>
        {/* @todo poprawic typowanie */}
        <StyledErrorMessage>{error?.data?.message}</StyledErrorMessage>
        {RegisterFormItemsFirstStep.map(({ label, name, type }) => (
          <StyledInputWrapper key={label}>
            <StyledLabel htmlFor={name}>{label}</StyledLabel>
            <Controller
              name={name as Email}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  type={type}
                  placeholder={label}
                  error={Boolean(errors[name as Email])}
                />
              )}
            />
            {errors[name as Email] && <StyledTypography>{errors[name as Email]?.message}</StyledTypography>}
          </StyledInputWrapper>
        ))}
      </StyledInput>
      <StyledButtonWrapper>
        <StepperButton isDisabled={!isValid} isLoading={isLoading} />
      </StyledButtonWrapper>
      <StyledLoginLinkWrapper>
        <StyledRegisterText>Masz już konto?</StyledRegisterText>
        <StyledRegisterLink to={Routing.Login}> Zaloguj się</StyledRegisterLink>
      </StyledLoginLinkWrapper>
    </StyledForm>
  )
}

export default FirstStep
