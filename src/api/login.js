import axios from 'axios'
let base = ''
export const Login = params => {
  return axios.get(`${base}/login`, { params: params })
}
