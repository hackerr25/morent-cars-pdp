import React from 'react'
import PopularCars from '../../Cars/popularCars/PopularCars'
import Recommended from './../../Cars/recommended/Recommended';
import Main from '../main/Main'

const Home = () => {
  return (
    <div>
      <Main />
      <PopularCars />
      <Recommended />
    </div>
  )
}

export default Home;