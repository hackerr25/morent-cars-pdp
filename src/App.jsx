import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/home/Home'
import NotFound from './utils/NotFound'
import AllPopularCars from './Cars/popularCars/AllPopularCars'
import AllRecommended from './Cars/recommended/AllRecommended'
import DetailPage from './components/detailpage/DetailPage'
import CarPay from './pages/payment/CarPay'
import LikedCars from './Cars/likedCars/LikedCars'
import Sidebar from './pages/sidebar/Sidebar'
import Profile from './pages/profile/Profile'
import UserProvider from './utils/context/UserContext'
import ProtectedRoute from './utils/ProtectedRoute'
import ThemeProvider from './utils/context/ThemeContext'
import SearchedCars from './pages/searchedCars/SearchedCars';
import { ToastContainer } from 'react-toastify'
import Notification from './pages/notification/Notification'



const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='allPopulars' element={<AllPopularCars />} />
    <Route path='allRecommended' element={<AllRecommended />} />
    <Route path='cars/:id' element={<DetailPage />} />
    <Route element={<ProtectedRoute />} >
      <Route path='car_pay' element={<CarPay />} />
      <Route path='notification' element={<Notification />} />
    </Route>
    <Route path='*' element={<NotFound />} />
    <Route path='sidebar' element={<Sidebar />} />
    <Route path='likedCars' element={<LikedCars />} />
    <Route path='profile' element={<Profile />} />
    <Route path='searched-cars' element={<SearchedCars />} />
  </Route>
))
const App = () => {
  return (
    <UserProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
        <ToastContainer autoClose={2000} />
      </ThemeProvider>
    </UserProvider>
  )
}

export default App