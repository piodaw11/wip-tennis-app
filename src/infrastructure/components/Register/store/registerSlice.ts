import { createSlice } from '@reduxjs/toolkit'

import registerApi from 'infrastructure/components/Register/store/registerApi'

type State = {
  createUserData: {
    password?: string,
    email?: string,
    phoneNumber?: string,
    firstName?: string,
    lastName?: string
  } | null,
  createdUserId: number | null,
  formStep: number
}

const initialState: State = {
  createUserData: null,
  createdUserId: null,
  formStep: 0
}

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setFormStep: (state, { payload }) => {
      state.formStep = payload
    }
  },
    extraReducers: (builder) => {
      builder.addMatcher(
        registerApi.endpoints.checkDataExistance.matchFulfilled,
        (state, { payload }) => {
          state.createUserData = payload
        }
      )
      builder.addMatcher(
        registerApi.endpoints.createUser.matchFulfilled,
        (state, { payload }) => {
          state.createdUserId = payload.id
        }
      )
    }
})

export const {
  setFormStep
} = registerSlice.actions

export default registerSlice
