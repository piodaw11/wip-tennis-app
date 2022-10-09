import tennisBoxService from 'app/store/services/tennisBoxService'

const userApi = tennisBoxService.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query<{ username: string, userId: number, roleId: number }, { authToken?: string }>({
      query: ({ authToken }) => ({
        url: 'user/me',
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      })
    })
  })
})

export const {
  useGetMeQuery
} = userApi

export default userApi
