/**
 * Created by user on 2018/2/23.
 */
import base from './base'
export default class info extends base {
  /**
   * 个人信息
   * @returns {Promise.<*>}
   */
  static async getUserInfo() {
    const url = `${this.baseUrl}/api/info/user-data`
    return await this.get(url)
  }

  /**
   * 更新个人信息
   * @param data
   * @returns {Promise.<*>}
   */
  static async updateUserInfo(data, id) {
    const url = `${this.baseUrl}/api/info/user-data/${id}`
    return await this.put(url, data)
  }

  /**
   * 我的钱包
   * @returns {Promise.<*>}
   */
  static async getMyMoney() {
    const url = `${this.baseUrl}/api/info/user-money`
    return await this.get(url)
  }
}
