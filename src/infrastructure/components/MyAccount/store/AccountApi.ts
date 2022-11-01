import tennisBoxService from 'app/store/services/tennisBoxService'
import { MyReservations } from 'infrastructure/components/MyAccount/store/types/MyReservations'
import RoutingApi from 'infrastructure/enums/RoutingApi'

const AccountApi = tennisBoxService.injectEndpoints({
  endpoints: (builder) => ({
    getMyReservations: builder.query<MyReservations, MyReservations>({
      query: ({ date, filters, booker_id, limit }) => ({
        url: RoutingApi.Reservation,
        params: {
          date,
          filters: JSON.stringify(filters),
          booker_id,
          limit
        }
      })
    })
  })
})

export const {
  useLazyGetMyReservationsQuery
} = AccountApi

export default AccountApi
