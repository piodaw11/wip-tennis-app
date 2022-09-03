import styled from 'styled-components'
import { Typography } from '@mui/material'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 100px;
`

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledLabel = styled.label`
  text-align: center;
`

const StyledTypography = styled.p`
  font-size: 10px;
  color: orangered;
`

export {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledTypography
}