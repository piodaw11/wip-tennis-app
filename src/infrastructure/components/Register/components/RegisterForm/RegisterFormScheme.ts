import { string, object, SchemaOf, ref } from 'yup'

type RegisterFormValues = {
  email: string
  password: string
  password2: string
}

const RegisterFormScheme: SchemaOf<RegisterFormValues> = object().shape({
  email: string().email('Podaj właściwy adres e-mail').required('Pole wymagane'),
  password: string().min(8, 'Podaj dłuższe hasło').required('Pole wymagane'),
  password2: string().oneOf([ref('password'), null], 'Hasła muszą być takie same').required('Pole wymagane')
})

export default RegisterFormScheme
export type {
  RegisterFormValues
}
