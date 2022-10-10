import useLoginForm from 'infrastructure/components/Login/components/LoginForm/hooks/useLoginForm'
import {
  StyledButtonWrapper, StyledForm,
  StyledInput,
  StyledItemsWrapper,
  StyledLabel, StyledTypography
} from './Form.styled'
import LoginFormItems from 'infrastructure/components/Login/components/LoginForm/constants/LoginFormItems'
import { Controller } from 'react-hook-form'
import { Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { FieldName } from 'infrastructure/components/Login/types/Login'

const Form = () => {
  const {
    control,
    handleSubmit,
    errors,
    isValid,
    onSubmit,
    isLoading
  } = useLoginForm()

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput>
        {LoginFormItems.map(({ label, name }) => (
          <StyledItemsWrapper key={label}>
            <StyledLabel htmlFor={name}>{label}</StyledLabel>
            <Controller
              name={name as FieldName}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  placeholder={label}
                  error={Boolean(errors[name as FieldName])}
                />
              )}
            />
            {errors[name as FieldName] && <StyledTypography>{errors[name as FieldName]?.message}</StyledTypography>}
          </StyledItemsWrapper>
        ))}
      </StyledInput>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Zapamiętaj mnie" />
      </FormGroup>
      <StyledButtonWrapper>
        <LoadingButton
          type="submit"
          loading={isLoading}
          disabled={!isValid}
          variant="contained"
        >
          Zaloguj się
        </LoadingButton>
      </StyledButtonWrapper>
    </StyledForm>
  )
}

export default Form
