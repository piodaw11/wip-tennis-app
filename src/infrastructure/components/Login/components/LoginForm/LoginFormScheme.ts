import { string, object, SchemaOf } from 'yup'

type LoginFormValues = {
  password: string
  username: string
}

const LoginFormScheme: SchemaOf<LoginFormValues> = object().shape({
  username: string().required('Pole wymagane'),
  password: string().min(8, 'Podaj prawidłowe hasło').required('Pole wymagane')
})

export default LoginFormScheme

export type {
  LoginFormValues
}
