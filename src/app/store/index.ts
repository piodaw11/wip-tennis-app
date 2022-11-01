import { configureStore } from '@reduxjs/toolkit'

import tennisBoxService from 'app/store/services/tennisBoxService'
import userSlice from 'infrastructure/components/Layout/store/user/userSlice'
import registerSlice from 'infrastructure/components/Register/store/registerSlice'
import reservationSlice from 'infrastructure/components/NewReservation/store/reservationSlice'
import accountSlice from 'infrastructure/components/MyAccount/store/accountSlice'

const store = configureStore({
  reducer: {
    [tennisBoxService.reducerPath]: tennisBoxService.reducer,
    [userSlice.name]: userSlice.reducer,
    [registerSlice.name]: registerSlice.reducer,
    [reservationSlice.name]: reservationSlice.reducer,
    [accountSlice.name]: accountSlice.reducer
  }
})

export default store
