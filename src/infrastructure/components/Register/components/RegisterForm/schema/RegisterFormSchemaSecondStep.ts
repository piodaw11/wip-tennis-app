import { string, object, SchemaOf, ref } from 'yup'

import { SecondStep } from 'infrastructure/components/Register/components/RegisterForm/types/RegisterFormValues'

const RegisterFormSchemaSecondStep: SchemaOf<SecondStep> = object().shape({
  password: string()
    .min(8, 'Podaj dłuższe hasło')
    .required('Pole wymagane'),
  passwordRepeat: string()
    .oneOf([ref('password'), null], 'Hasła muszą być takie same')
    .required('Pole wymagane'),
  firstName: string().required('Pole wymagane'),
  lastName: string().required('Pole wymagane')
})

export default RegisterFormSchemaSecondStep
