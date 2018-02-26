/**
 * Created by user on 2018/2/23.
 */
import base from './base'
export default class info extends base {
  /**
   * 个人信息
   * @param data
   * @returns {Promise.<*>}
   */
  static async getUserInfo() {
    const url = `${this.baseUrl}/api/info/user-data`
    return await this.get(url)
  }
}
