import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/home/Home'
import NotFound from './utils/NotFound'
import AllPopularCars from './Cars/popularCars/AllPopularCars'
import AllRecommended from './Cars/recommended/AllRecommended'
import DetailPage from './components/detailpage/DetailPage'
import CarPay from './pages/payment/CarPay'



const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='/allPopulars' element={<AllPopularCars />} />
    <Route path='/allRecommendation' element={<AllRecommended />} />
    <Route path='/cars/:id' element={<DetailPage />} />
    <Route path='/car_pay' element={<CarPay />} />
    <Route path='*' element={<NotFound />} />
  </Route>
))
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App