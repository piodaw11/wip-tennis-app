import {
  AccountCircle,
  CalendarMonth,
  Scoreboard,
  BookOnline,
  TableChart
} from '@mui/icons-material'

const SideMenuItems = [
  {
    name: 'Profil',
    id: 0,
    icon: <AccountCircle />
  },
  {
    name: 'Mecze',
    id: 1,
    icon: <CalendarMonth />
  },
  {
    name: 'Wyniki',
    id: 2,
    icon: <Scoreboard />
  },
  {
    name: 'Tabele',
    id: 3,
    icon: <TableChart />
  },
  {
    name: 'Rezerwacje',
    id: 4,
    icon: <BookOnline />
  }
]

export default SideMenuItems
