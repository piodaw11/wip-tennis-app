type Reservation = {
  date: string | null
  filters: string[] | null
}

type PostReservation = {
  start: string
  end: string
  courtId: number
  bookerId: number
  isPaid: boolean
}

export type {
  Reservation,
  PostReservation
}
