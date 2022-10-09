import { TypedUseSelectorHook, useSelector } from 'react-redux'

import store from 'app/store'

type AppState = ReturnType<typeof store.getState>

const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export default useAppSelector
