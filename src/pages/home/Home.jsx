import React from 'react'
import Main from '../../components/main/Main'
import PopularCars from '../../Cars/popularCars/PopularCars'
import Recommended from './../../Cars/recommended/Recommended';

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