import tennisBoxService from 'app/store/services/tennisBoxService'
import { UserRegistrationData } from 'app/store/types'
import { FirstStepRegisterForm } from 'infrastructure/components/Register/store/types'

const registerApi = tennisBoxService.injectEndpoints({
  endpoints: (builder) => ({
    checkDataExistance: builder.mutation<FirstStepRegisterForm, FirstStepRegisterForm>({
      query: ({ email, phoneNumber }) => ({
        url: 'user/check-data-existance',
        method: 'PATCH',
        body: {
          email,
          phoneNumber
        }
      })
    }),
    createUser: builder.mutation<{ id: number }, UserRegistrationData>({
      query: (userRegistrationData) => ({
        url: 'user',
        method: 'POST',
        body: {
          ...userRegistrationData,
          phone: userRegistrationData.phoneNumber
        }
      })
    })
  })
})

export const {
  useCheckDataExistanceMutation,
  useCreateUserMutation
} = registerApi

export default registerApi
