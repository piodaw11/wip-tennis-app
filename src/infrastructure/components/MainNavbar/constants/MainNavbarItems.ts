import PageName from 'infrastructure/enums/PageName'

const MainNavbarItems = [
  {
    url: '/',
    label: PageName.Home,
    isPublic: true
  },
  {
    url: '/rezerwacja',
    label: PageName.Reservation,
    isPublic: true
  },
  {
    url: '/liga',
    label: PageName.League,
    isPublic: true
  }
]

export default MainNavbarItems
