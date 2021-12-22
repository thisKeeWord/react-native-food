import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState([])
  const [error, setError] = useState('')

  const searchApi = async (term) => {
    error && setError('')

    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'los angeles'
        }
      })

      setResults(response.data.businesses)
    } catch (error) {
      setError('An error occurred. Please try again later.')
    }
  }

  useEffect(() => {
    searchApi
  }, [])

  return [searchApi, results, error]
}