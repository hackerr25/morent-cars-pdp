import React from 'react'
import PopularCars from '../../Cars/popularCars/PopularCars'
import Main from '../main/Main'

const Home = () => {
  return (
    <div>
      <Main />
      <PopularCars />
      <Recommended />
      <p>Github pull request</p>
    </div>
  )
}

export default Home;