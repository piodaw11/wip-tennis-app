import HomePage from 'pages/HomePage/HomePage'
import LoginPage from 'pages/LoginPage/LoginPage'
import RegisterPage from 'pages/RegisterPage/RegisterPage'
import Reservation from 'pages/Reservation/Reservation'

const AppRoutes = [
  {
    key: 'HomePage',
    path: '',
    element: <HomePage />
  },
  {
    key: 'RegisterPage',
    path: '/rejestracja',
    element: <RegisterPage />
  },
  {
    key: 'LoginPage',
    path: '/logowanie',
    element: <LoginPage />
  },
  {
    key: 'ReservationPage',
    path: '/rezerwacja',
    element: <Reservation />
  }
]

export default AppRoutes
