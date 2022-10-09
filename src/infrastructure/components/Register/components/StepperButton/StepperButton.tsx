import { FunctionComponent } from 'react'
import { LoadingButton } from '@mui/lab'

import useStepper from 'infrastructure/components/Register/components/RegisterForm/hooks/useStepper'

type Props = {
  isDisabled: boolean
  isLoading?: boolean
}

const StepperButton:FunctionComponent<Props> = ({ isDisabled, isLoading }) => {
  const {
    activeStep
  } = useStepper()

  return (
    <LoadingButton loading={isLoading} type="submit" disabled={isDisabled} variant="contained">
      {!activeStep ? 'Dalej' : 'Zarejestruj'}
    </LoadingButton>
  )
}

export default StepperButton
