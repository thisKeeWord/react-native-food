import axios from 'axios'
import getEnvVars from '../../environment'

const { apiKey } = getEnvVars()

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${apiKey}`
  }
})
