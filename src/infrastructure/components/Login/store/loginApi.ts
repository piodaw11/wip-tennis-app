import TennisBoxService from 'app/store/services/tennisBoxService'
import { LoginForm, LoginResponse } from 'infrastructure/components/Login/store/types/LoginForm'

const loginApi = TennisBoxService.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginForm>({
      query: ({ username, password }) => ({
        url: 'auth/login',
        method: 'POST',
        body: {
          username,
          password
        }
      })
    })
  })
})

export const {
  useLoginMutation
} = loginApi

export default loginApi
