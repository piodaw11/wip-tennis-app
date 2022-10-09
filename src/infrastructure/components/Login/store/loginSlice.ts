import { createSlice } from '@reduxjs/toolkit'

import loginApi from 'infrastructure/components/Login/store/loginApi'

type State = {
  accessToken: string | null
}

const initialState: State = {
  accessToken: null
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      loginApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.accessToken = payload.accessToken
      }
    )
  }
})

export default loginSlice
