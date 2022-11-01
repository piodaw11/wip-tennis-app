import { FunctionComponent } from 'react'

import Layout from 'infrastructure/components/Layout/Layout'
import SideMenu from 'infrastructure/components/MyAccount/components/SideMenu/SideMenu'
import MyProfile from 'infrastructure/components/MyAccount/components/MyProfile/MyProfile'
import useSideMenu from 'infrastructure/components/MyAccount/components/SideMenu/hooks/useSideMenu'
import MyMatches from 'infrastructure/components/MyAccount/components/MyMatches/MyMatches'
import MyResults from 'infrastructure/components/MyAccount/components/MyResults/MyResults'
import MyTable from 'infrastructure/components/MyAccount/components/MyTable/MyTable'
import MyReservations from 'infrastructure/components/MyAccount/components/MyReservations/MyReservations'
import Settings from 'infrastructure/components/MyAccount/components/Settings/Settings'

const Account: FunctionComponent = () => {
  const {
    sideMenu
  } = useSideMenu()

  const activeSideMenu = () => {
    switch (sideMenu) {
      case 0:
        return <MyProfile />
      case 1:
        return <MyMatches />
      case 2:
        return <MyResults />
      case 3:
        return <MyTable />
      case 4:
        return <MyReservations />
      case 100:
        return <Settings />
      default:
        return <MyProfile />
    }
  }
  return (
    <Layout>
      <SideMenu />
      {activeSideMenu()}
    </Layout>
  )
}

export default Account
