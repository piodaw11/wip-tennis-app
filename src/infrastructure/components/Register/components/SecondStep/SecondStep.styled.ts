import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  gap: 30px;
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
  font-size: 10px;
  color: orangered;
`

const StyledButtonWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-around;
  width: 100%;
`

export {
  StyledInputWrapper,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledTypography,
  StyledButtonWrapper
}
