import { FunctionComponent, useEffect } from 'react'

import FirstStep
  from 'infrastructure/components/Register/components/FirstStep/FirstStep'
import SecondStep
  from 'infrastructure/components/Register/components/SecondStep/SecondStep'
import ThirdStep
  from 'infrastructure/components/Register/components/ThirdStep/ThirdStep'
import useStepper from 'infrastructure/components/Register/components/RegisterForm/hooks/useStepper'
import {
  StyledFormItemsWrapper,
  StyledFormWrapper,
  StyledStepper,
  StyledStepperFormWrapper,
  StyledTypography,
  StyledConnector
} from './RegisterForm.styled'
import {
  StepIcon
} from 'infrastructure/components/Register/components/RegisterForm/StepIcons/StepIcons'
import RegisterFormSteps from 'infrastructure/components/Register/components/RegisterForm/constants/RegisterFormSteps'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import * as React from 'react'

const RegisterForm:FunctionComponent = () => {
  const {
    stepTitle,
    setStep,
    activeStep
  } = useStepper()

  useEffect(() => {
    setStep(0)
  }, [])

  const activeStepForm = () => {
    switch (activeStep) {
      case 0:
        return <FirstStep />
      case 1:
        return <SecondStep />
      case 2:
        return <ThirdStep />
      default:
        return <FirstStep />
    }
  }

  return (
    <StyledStepperFormWrapper>
      <StyledStepper alternativeLabel activeStep={activeStep} connector={<StyledConnector />}>
        {RegisterFormSteps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={StepIcon} />
          </Step>
        ))}
      </StyledStepper>
      <StyledFormWrapper>
        <StyledFormItemsWrapper>
          <StyledTypography variant="h4">{stepTitle}</StyledTypography>
          {activeStepForm()}
        </StyledFormItemsWrapper>
      </StyledFormWrapper>
    </StyledStepperFormWrapper>
  )
}

export default RegisterForm
