//二次封装axios
import axios from 'axios'
const request = axios.create({
  baseURL: 'http://localhost'
})
request.interceptors.request.use((config) => {
  return config
})
request.interceptors.response.use(
  (Response) => {
    return Response.data
  },
  (error) => {
    console.log(error)
  }
)
export default request
