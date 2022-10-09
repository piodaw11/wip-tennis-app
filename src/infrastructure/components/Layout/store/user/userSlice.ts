// @todo wyniesc typy
import { createSlice } from '@reduxjs/toolkit'

import userApi from 'infrastructure/components/Layout/store/user/userApi'

type UserState = {
  user: {
    username: string,
    userId: number
  } | null
}

const initialState: UserState = {
  user: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      userApi.endpoints.getMe.matchFulfilled,
      (state, { payload }) => {
        state.user = payload
      }
    )
  }
})

export default userSlice
