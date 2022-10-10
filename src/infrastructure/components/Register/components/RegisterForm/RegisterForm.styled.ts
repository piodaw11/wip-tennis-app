import { Stepper, Typography, StepConnector, stepConnectorClasses } from '@mui/material'
import styled from 'styled-components'

const StyledStepperFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
`

const StyledStepper = styled(Stepper)`
  margin: 120px auto 0;
  width: 80%;
`

const StyledFormWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 30px;
`

const StyledFormItemsWrapper = styled.div`
  padding: 32px;
  flex: 1;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const StyledTypography = styled(Typography)`
  text-align: center;
`

const StyledConnector = styled(StepConnector)`
  &.${stepConnectorClasses.alternativeLabel} {
    top: 23px;
    left: calc(-50% + 16px);
    right: calc(50% + 16px);
  }
  &.${stepConnectorClasses.active} {
    & .${stepConnectorClasses.line} {
      border-color: #784af4;
    }
  }
  &.${stepConnectorClasses.completed} {
    & .${stepConnectorClasses.line} {
      border-color: #784af4;
    }
  }
  & .${stepConnectorClasses.line} {
    border-color: #eaeaf0;
    border-top-width: 3px;
    border-radius: 1px;
  }
`

export {
  StyledStepperFormWrapper,
  StyledFormWrapper,
  StyledStepper,
  StyledFormItemsWrapper,
  StyledTypography,
  StyledConnector
}
