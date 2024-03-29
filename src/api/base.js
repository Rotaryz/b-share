import wepy from 'wepy'
import http from 'common/js/http'

export default class base {
  static baseUrl = wepy.$instance.globalData.baseUrl
  static baseLogin = wepy.$instance.globalData.baseLogin
  static get = http.get.bind(http)
  static put = http.put.bind(http)
  static post = http.post.bind(http)
  static delete = http.delete.bind(http)
  static updateImg = http.upload.bind(http)
}

export const ERR_OK = 0
