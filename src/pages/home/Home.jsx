import React from 'react'
import PopularCars from '../../components/popularCars/PopularCars'
import Main from '../../components/main/Main'
import Recommended from '../../components/recommended/Recommended'

const Home = () => {
  return (
    <div>
      <Main />
      <PopularCars />
      <Recommended />
    </div>
  )
}

export default Home