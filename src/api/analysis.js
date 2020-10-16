import axios from 'axios'
let base = ''
export const GetPrice = params => {
  return axios.post(`${base}/getPrice`, { params: params })
}
