import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'

import { useCheckDataExistanceMutation } from 'infrastructure/components/Register/store/registerApi'
import RegisterFormSchemaFirstStep
  from 'infrastructure/components/Register/components/RegisterForm/schema/RegisterFormSchemaFirstStep'
import { FirstStepRegisterForm } from 'infrastructure/components/Register/store/types'
import useAppDispatch from 'app/hooks/useAppDispatch'
import { setFormStep } from 'infrastructure/components/Register/store/registerSlice'

const useFirstStepManager = () => {
  const dispatch = useAppDispatch()
  const [checkDataExistance, { isLoading, error }] = useCheckDataExistanceMutation()

  const onSubmit = (data: FirstStepRegisterForm) => {
    checkDataExistance(data)
      .unwrap()
      .then(() => {
        dispatch(setFormStep(1))
      })
      .catch(e => {
        toast.error(e)
      })
  }
  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<FirstStepRegisterForm>({
    resolver: yupResolver(RegisterFormSchemaFirstStep),
    criteriaMode: 'all',
    mode: 'onChange',
    defaultValues: {
      email: '',
      phoneNumber: ''
    }
  })

  return {
    control,
    handleSubmit,
    errors,
    isValid,
    isLoading,
    onSubmit,
    error
  }
}

export default useFirstStepManager
