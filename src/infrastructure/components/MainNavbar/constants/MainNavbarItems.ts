import PageName from 'infrastructure/enums/PageName'
import Routing from 'infrastructure/enums/Routing'

const MainNavbarItems = [
  {
    url: Routing.Home,
    label: PageName.Home,
    isPublic: true,
  },
  {
    url: Routing.Reservation,
    label: PageName.Reservation,
    isPublic: true,
  },
  {
    url: Routing.League,
    label: PageName.League,
    isPublic: true,
  }
]

export default MainNavbarItems