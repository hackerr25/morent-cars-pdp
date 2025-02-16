import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/home/Home'
import NotFound from './utils/NotFound'
import AllPopularCars from './components/popularCars/AllPopularCars'
import AllRecommended from './components/recommended/AllRecommended'



const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='/allPopulars' element={<AllPopularCars />} />
    <Route path='/allRecommendation' element={<AllRecommended />} />
    <Route path='*' element={<NotFound />} />
  </Route>
))
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App