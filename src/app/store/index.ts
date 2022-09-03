import create from 'zustand'
import type { User } from 'app/store/types'
import produce from 'immer'

type State = {
  user: User
}

const useStore = create<State>((set) => ({
  user: {
    data: {
      id: null,
      roleId: null,
      username: null
    },
    setUserData: (payload) => set(produce(state => {
      state.user.data = payload
    }))
  }
}))

export default useStore
