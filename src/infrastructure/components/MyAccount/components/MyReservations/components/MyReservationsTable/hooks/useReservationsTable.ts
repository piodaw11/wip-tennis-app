import { ChangeEvent, MouseEvent, useState } from 'react'
import useAppSelector from 'app/hooks/useAppSelector'
import dayjs from 'dayjs'
import {
  HeaderData
} from 'infrastructure/components/MyAccount/components/MyReservations/components/MyReservationsTable/types/HeaderData'

type Order = 'asc' | 'desc';

const useReservationsTable = () => {
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState('date')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const { myReservations } = useAppSelector((state) => state.myaccount)

  const createData = (
    id: number,
    start: string,
    end: string,
    duration: string,
    date: string,
    court: number
  ): HeaderData => ({ id, start, end, duration, date, court })

  const rows = myReservations?.reservations?.map((reservation) => createData(
    reservation.id,
    dayjs.tz(reservation.start, 'Europe/Warsaw').format('HH:mm'),
    dayjs.tz(reservation.end, 'Europe/Warsaw').add(30, 'm').format('HH:mm'),
    `${(dayjs(reservation.end).diff(dayjs(reservation.start), 'minute') + 30) / 60}h`,
    dayjs(reservation.start).format('YYYY-MM-DD'),
    reservation.courtId
  )) || []

  const handleRequestSort = (
    event: MouseEvent<unknown>,
    property: string
  ) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  function descendingComparator<T>(a: T, b: T, ordersBy: keyof T) {
    if (b[ordersBy] < a[ordersBy]) {
      return -1
    }
    if (b[ordersBy] > a[ordersBy]) {
      return 1
    }
    return 0
  }

  function getComparator<Key extends keyof any>(
    orders: Order,
    ordersBy: Key
  ): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
  ) => number {
    return orders === 'desc'
      ? (a, b) => descendingComparator(a, b, ordersBy)
      : (a, b) => -descendingComparator(a, b, ordersBy)
  }

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  return {
    order,
    orderBy,
    page,
    rowsPerPage,
    rows,
    emptyRows,
    handleRequestSort,
    handleChangePage,
    handleChangeRowsPerPage,
    getComparator
  }
}

export default useReservationsTable
