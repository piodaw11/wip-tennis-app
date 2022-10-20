import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

import reservationApi from 'infrastructure/components/NewReservation/store/reservationApi'

type State = {
  date: string | null
  filters: string[] | null
  postReservationId: number | null
  selectedHours: {
    start: string
    end: string
  } | null
  courtId: number | null
  clickedDate: string | null
  reservation: {
    count?: number
    reservations?: {
      bookerId: number
      courtId: number
      start: string
      end: string
      id: number
      isPaid: boolean
      middleHours: string[]
    }[]
  } | null
}

const initialState: State = {
  date: null,
  postReservationId: null,
  filters: null,
  selectedHours: null,
  courtId: null,
  reservation: null,
  clickedDate: dayjs().format('YYYY-MM-DD')
}

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    setSelectedHours: (state, { payload }) => {
      state.selectedHours = payload
    },
    setCourtNo: (state, { payload }) => {
      state.courtId = payload
    },
    setReservation: (state, { payload }) => {
      state.reservation = payload
    },
    setClickedDate: (state, { payload }) => {
      state.clickedDate = payload
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      reservationApi.endpoints.getReservation.matchFulfilled,
      (state, { payload }) => {
        state.date = payload.date
        state.filters = payload.filters
      }
    )
    builder.addMatcher(
      reservationApi.endpoints.postReservation.matchFulfilled,
      (state, { payload }) => {
        state.postReservationId = payload.id
      }
    )
  }
})

export const {
  setSelectedHours,
  setCourtNo,
  setReservation,
  setClickedDate
} = reservationSlice.actions

export default reservationSlice
