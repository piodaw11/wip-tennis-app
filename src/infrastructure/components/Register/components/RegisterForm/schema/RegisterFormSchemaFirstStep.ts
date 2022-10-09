import { string, object, SchemaOf } from 'yup'

import { FirstStep } from 'infrastructure/components/Register/components/RegisterForm/types/RegisterFormValues'

const RegisterFormSchemaFirstStep: SchemaOf<FirstStep> = object().shape({
  email: string()
    .email('Podaj właściwy adres e-mail')
    .required('Pole wymagane'),
  phoneNumber: string()
    .min(9, 'Podaj numer jest za krótki')
    .max(9, 'Podaj numer jest za długi')
    .required('Pole wymagane')
})

export default RegisterFormSchemaFirstStep
