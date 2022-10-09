import styled from 'styled-components'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  height: 100%;
  gap: 30px;
`

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 300px;
  height: 100%;
  gap: 30px;
  text-align: center;
`

const StyledInputWrapper = styled.div`
  height: 35%;
  display: flex;
  flex-direction: column;
  text-align: left;
`

const StyledLabel = styled.label`
  font-size: 12px;
`

const StyledTypography = styled.p`
  font-size: 11px;
  color: orangered;
`

const StyledLoginLinkWrapper = styled.div`
  display: flex;
  margin-top: 16px;
`

const StyledRegisterText = styled(Typography)``

const StyledRegisterLink = styled(Link)`
  margin-left: 5px;
  color: dodgerblue;
`

const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`

const StyledErrorMessage = styled.p`
  font-size: 12px;
  color: #f10041;
`

export {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledTypography,
  StyledButtonWrapper,
  StyledInputWrapper,
  StyledLoginLinkWrapper,
  StyledRegisterText,
  StyledRegisterLink,
  StyledErrorMessage
}
