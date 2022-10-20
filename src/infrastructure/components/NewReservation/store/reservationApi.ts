import tennisBoxService from 'app/store/services/tennisBoxService'
import { PostReservation, Reservation } from 'infrastructure/components/NewReservation/store/types/Reservation'
import RoutingApi from 'infrastructure/enums/RoutingApi'

const reservationApi = tennisBoxService.injectEndpoints({
  endpoints: (builder) => ({
    getReservation: builder.query<Reservation, Reservation>({
      query: ({ date, filters }) => ({
        url: RoutingApi.Reservation,
        params: {
          date,
          filters: JSON.stringify(filters)
        }
      })
    }),
    postReservation: builder.mutation<{ id: number }, PostReservation>({
      query: ({ start, end, courtId, bookerId, isPaid }) => ({
        url: RoutingApi.Reservation,
        method: 'POST',
        body: {
          start,
          end,
          courtId,
          bookerId,
          isPaid
        }
      })
    })
  })
})

export const {
  useLazyGetReservationQuery,
  usePostReservationMutation
} = reservationApi

export default reservationApi
