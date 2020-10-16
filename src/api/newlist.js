import axios from 'axios'
let base = ''
export const GetNewList = params => {
  return axios.get(`${base}/new/list`, { params: params })
}
