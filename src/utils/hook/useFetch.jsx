import { useEffect, useState } from 'react'

export const useFetch = ({ path = "" }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://912964747b35f950.mokky.dev/${path}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error:', error))
  }, [])


  return { data }
}

export default useFetch