import { useDispatch } from 'react-redux'

import store from 'app/store'

type AppDispatch = typeof store.dispatch

const useAppDispatch = () => useDispatch<AppDispatch>()

export default useAppDispatch
