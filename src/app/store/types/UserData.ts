type UserData = {
  id: number | null
  roleId: number | null
  username: string | null
}

type User = {
  data: UserData
  setUserData: (payload: UserData) => void
}

export type {
  User,
  UserData
}
