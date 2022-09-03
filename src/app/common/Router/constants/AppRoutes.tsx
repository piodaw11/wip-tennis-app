import HomePage from 'pages/HomePage/HomePage'
import RegisterPage from 'pages/RegisterPage/RegisterPage'

const AppRoutes = [
  {
    key: 'HomePage',
    path: '',
    element: <HomePage />
  },
  {
    key: 'RegisterPage',
    path: '/register',
    element: <RegisterPage />
  }
]

export default AppRoutes
