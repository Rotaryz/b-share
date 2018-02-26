/**
 * Created by user on 2018/2/23.
 */
import base from './base'
export default class logIn extends base {
  /**
   * 发现日志列表
   * @param
   * @returns {Promise.<*>}
   */
  static async findList(data) {
    const url = `${this.baseUrl}/api/logs/user-live-logs`
    return await this.get(url, data)
  }
  /**
   * 点赞列表
   * @param
   * @returns {Promise.<*>}
   */
  static async like(data) {
    const url = `${this.baseUrl}/api/logs/like`
    return await this.post(url, data)
  }
}
