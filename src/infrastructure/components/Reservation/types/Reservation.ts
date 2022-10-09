type Reservation = {
  count: number
  reservations: ReservationData
}

type ReservationData = {
  start: string
  end: string
  courtId: number
  bookerId: number
  isPaid: boolean
  id: number
}

type ReservedHours = {
  id: number
  courtId: number
  start: string
  end: string
}

type UnavailableHours = {
  parsedTime: string
  courtId: number
  id: number
}

export type {
  Reservation,
  ReservationData,
  ReservedHours,
  UnavailableHours
}
