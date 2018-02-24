/**
 * Created by user on 2018/2/23.
 */
import base from './base'
export default class logIn extends base {
  /**
   * 商家登陆
   * @param 用户信息
   * @returns {Promise.<*>}
   */
  static async findList() {
    const url = `${this.baseUrl}/api/logs/user-live-logs`
    return await this.get(url)
  }
}
