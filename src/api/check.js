import axios from 'axios'
let base = ''
export const CheckOrder = params => {
  return axios.post(`${base}/checkOrder`, { params: params })
}
