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
  static async getMyMoney(page = 1) {
    let data = {
      page: page
    }
    const url = `${this.baseUrl}/api/info/user-money`
    return await this.get(url, data)
  }

  /**
   * 任务列表
   * @returns {Promise.<*>}
   */
  static async getAbilityList() {
    const url = `${this.baseUrl}/api/info/task-progress`
    return await this.get(url)
  }
  /**
   * 实名认证列表
   * @returns {Promise.<*>}
   */
  static async realNameList() {
    const url = `${this.baseUrl}/api/info/real-list`
    return await this.get(url)
  }
  /**
   * 实名认证
   * @returns {Promise.<*>}
   */
  static async realName(data) {
    const url = `${this.baseUrl}/api/info/real-name`
    return await this.post(url, data)
  }
}
