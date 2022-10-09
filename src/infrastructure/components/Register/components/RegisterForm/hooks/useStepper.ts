import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import StepTitles from 'infrastructure/components/Register/components/RegisterForm/constants/StepTitles'
import useAppSelector from 'app/hooks/useAppSelector'
import useAppDispatch from 'app/hooks/useAppDispatch'
import { setFormStep } from 'infrastructure/components/Register/store/registerSlice'

const useStepper = () => {
  const [stepTitle, setStepTitle] = useState(StepTitles.first)
  const { formStep } = useAppSelector(state => state.register)
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const handleRedirect = () => {
    navigate('/logowanie')
  }

  const handleEmailAndPasswordValidationNext = () => {
    dispatch(setFormStep(formStep + 1))
  }

  const handleBack = () => {
    dispatch(setFormStep(formStep - 1))
  }

  const setStep = (step: number) => {
    dispatch(setFormStep(step))
  }

  useEffect(() => {
    switch (formStep) {
      case 1:
        setStepTitle(StepTitles.first)
        break
      case 2:
        setStepTitle(StepTitles.second)
        break
      case 3:
        setStepTitle(StepTitles.third)
        break
      default:
        setStepTitle(StepTitles.first)
    }
  }, [formStep])

  return {
    stepTitle,
    setStep,
    activeStep: formStep,
    handleBack,
    handleRedirect,
    handleEmailAndPasswordValidationNext
  }
}

export default useStepper
