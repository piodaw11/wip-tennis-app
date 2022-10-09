import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const clientBoxService = createApi({
  reducerPath: '/tennis-box',
  baseQuery: fetchBaseQuery({ baseUrl: '/tennis-box' }),
  endpoints: () => ({})
})

export default clientBoxService
