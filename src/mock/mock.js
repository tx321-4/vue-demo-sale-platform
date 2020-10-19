import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { NewList } from './data/newlist'
import { OrderList } from './data/orderlist'

export default {
  bootstrap () {
    let mock = new MockAdapter(axios)
    // mock success eqeuest
    mock.onGet('/success').reply(200, {
      msg: 'success'
    })

    // mock error request
    mock.onGet('/error').reply(500, {
      msg: 'failure'
    })

    // 新闻列表
    mock.onGet('/new/list').reply(config => {
      const result = NewList

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, result])
        }, 1000)
      })
    })
    // 登录
    mock.onGet('/login').reply(config => {
      const result = {
        'username': 'yudongdong',
        'userId': 123123
      }
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, result])
        }, 1000)
      })
    })

    mock.onPost('/getPrice').reply(config => {
      const result = {
        'amount': 678
      }
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, result])
        }, 1000)
      })
    })
    mock.onPost('/createOrder').reply(config => {
      const result = {}
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, result])
        }, 1000)
      })
    })

    mock.onPost('/checkOrder').reply(config => {
      const result = {}
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, result])
        }, 1000)
      })
    })
    mock.onPost('/getOrderList').reply(config => {
      const result = OrderList
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, result])
        }, 1000)
      })
    })
  }
}
