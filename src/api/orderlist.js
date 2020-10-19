import axios from 'axios'
let base = ''
export const getOrderList = params => {
  return axios.post(`${base}/getOrderList`, { params: params })
}
