import Index from 'pages/HomePage/HomePage'
import Index from 'pages/logowanie/LoginPage'
import RegisterPage from 'pages/rejestracja/RegisterPage'
import Index from 'pages/rezerwacja/Reservation'

const AppRoutes = [
  {
    key: 'HomePage',
    path: '',
    element: <Index />
  },
  {
    key: 'RegisterPage',
    path: '/rejestracja',
    element: <RegisterPage />
  },
  {
    key: 'LoginPage',
    path: '/logowanie',
    element: <Index />
  },
  {
    key: 'ReservationPage',
    path: '/rezerwacja',
    element: <Index />
  }
]

export default AppRoutes
