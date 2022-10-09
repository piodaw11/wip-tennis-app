import { FunctionComponent } from 'react'
import { Controller } from 'react-hook-form'
import { Button, TextField } from '@mui/material'

import {
  StyledButtonWrapper,
  StyledForm,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  StyledTypography
} from 'infrastructure/components/Register/components/SecondStep/SecondStep.styled'
import RegisterFormItemsSecondStep
  from 'infrastructure/components/Register/components/RegisterForm/constants/RegisterFormItemsSecondStep'
import useRegisterFormSecondStep
  from 'infrastructure/components/Register/components/RegisterForm/hooks/useRegisterFormSecondStep'
import StepperButton
  from 'infrastructure/components/Register/components/StepperButton/StepperButton'
import useStepper from 'infrastructure/components/Register/components/RegisterForm/hooks/useStepper'

type FieldName = 'firstName' | 'lastName' | 'password' | 'passwordRepeat'

const SecondStep:FunctionComponent = () => {
  const {
    control,
    handleSubmit,
    errors,
    isValid,
    isLoading,
    onSubmit
  } = useRegisterFormSecondStep()

  const {
    handleBack
  } = useStepper()

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput>
        {RegisterFormItemsSecondStep.map(({ label, name, type }) => (
          <StyledInputWrapper key={label}>
            <StyledLabel htmlFor={name}>{label}</StyledLabel>
            <Controller
              name={name as FieldName}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  type={type}
                  placeholder={label}
                  error={Boolean(errors[name as FieldName])}
                />
              )}
            />
            {errors[name as FieldName] && <StyledTypography>{errors[name as FieldName]?.message}</StyledTypography>}
          </StyledInputWrapper>
    ))}
      </StyledInput>
      <StyledButtonWrapper>
        <Button onClick={handleBack} variant="outlined">Wróć</Button>
        <StepperButton isLoading={isLoading} isDisabled={!isValid} />
      </StyledButtonWrapper>
    </StyledForm>

  )
}

export default SecondStep
