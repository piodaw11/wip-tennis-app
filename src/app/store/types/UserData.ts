type UserData = {
  userId: number | null
  roleId: number | null
  username: string | null
}

type User = {
  data: UserData
  setUserData: (payload: UserData) => void
}

type RegisterStep = {
  step: number
  setStep: (payload: number) => void
}

type UsernameAndPasswordIsCorrect = {
  isCorrect: boolean
  setIsCorrect: (payload: boolean) => void
}

type UserRegistrationData = {
  email: string | null
  phoneNumber: string | null
  firstName: string | null
  lastName: string | null
  password: string | null
}

type userRegistration = {
  userRegistrationData: UserRegistrationData
  setUserRegistrationData: (payload: UserRegistrationData) => void
}

export type {
  User,
  UserData,
  RegisterStep,
  UsernameAndPasswordIsCorrect,
  UserRegistrationData,
  userRegistration
}
