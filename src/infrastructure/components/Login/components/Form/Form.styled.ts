import styled from 'styled-components'

const StyledForm = styled.form`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
`

const StyledItemsWrapper = styled.div`
  height: 35%;
  display: flex;
  flex-direction: column;
`

const StyledLabel = styled.label`
  text-align: left;
  font-size: 12px;
`

const StyledTypography = styled.p`
  font-size: 10px;
  color: orangered;
`

const StyledButtonWrapper = styled.div`
  padding: 16px 0;
  width: 100%;
  
  & > button {
    width: 100%;
  }
`

export {
  StyledForm,
  StyledInput,
  StyledItemsWrapper,
  StyledLabel,
  StyledTypography,
  StyledButtonWrapper
}
