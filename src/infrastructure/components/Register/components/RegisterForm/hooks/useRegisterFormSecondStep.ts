import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { toast } from 'react-toastify'

import { SecondStep } from 'infrastructure/components/Register/components/RegisterForm/types/RegisterFormValues'
import RegisterFormSchemaSecondStep
  from 'infrastructure/components/Register/components/RegisterForm/schema/RegisterFormSchemaSecondStep'
import { useCreateUserMutation } from 'infrastructure/components/Register/store/registerApi'
import useAppSelector from 'app/hooks/useAppSelector'
import useAppDispatch from 'app/hooks/useAppDispatch'
import { setFormStep } from 'infrastructure/components/Register/store/registerSlice'

const UseRegisterFormSecondStep = () => {
  const [createUser, { isLoading, error }] = useCreateUserMutation()
  const { createUserData } = useAppSelector(state => state.register)
  const dispatch = useAppDispatch()

    const onSubmit = (data: SecondStep) => {
      createUser({
        ...data,
        email: String(createUserData?.email),
        phoneNumber: String(createUserData!.phoneNumber)
      })
        .unwrap()
        .then(() => {
          dispatch(setFormStep(2))
        })
        .catch(e => {
            toast.error(e)
        })
    }

  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<SecondStep>({
    resolver: yupResolver(RegisterFormSchemaSecondStep),
    criteriaMode: 'all',
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      password: '',
      passwordRepeat: ''
    }
  })

  return {
    onSubmit,
    control,
    handleSubmit,
    errors,
    isValid,
    isLoading,
    error
  }
}

export default UseRegisterFormSecondStep
