import { createSlice } from '@reduxjs/toolkit'
import AccountApi from 'infrastructure/components/MyAccount/store/AccountApi'

type State = {
  sideMenu: number
  settingsMenu: number
  date: string | null
  filters: string[] | null
  booker_id: number | null
  myReservations: {
    count?: number
    reservations?: {
      id: number
      courtId: number
      start: string
      end: string
      isPaid: boolean
    }[]
  } | null
}

const initialState: State = {
  sideMenu: 0,
  settingsMenu: 0,
  date: null,
  filters: null,
  booker_id: null,
  myReservations: null
}

const accountSlice = createSlice({
  name: 'myaccount',
  initialState,
  reducers: {
    setSideMenu: (state, { payload }) => {
      state.sideMenu = payload
    },
    setSettingsMenu: (state, { payload }) => {
      state.settingsMenu = payload
    },
    setMyReservations: (state, { payload }) => {
      state.myReservations = payload
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      AccountApi.endpoints.getMyReservations.matchFulfilled,
      (state, { payload }) => {
        state.date = payload.date
        state.filters = payload.filters
        state.booker_id = payload.booker_id
      }
    )
  }
})

export const {
  setSideMenu,
  setSettingsMenu,
  setMyReservations
} = accountSlice.actions

export default accountSlice
