/**
 * Created by user on 2018/2/23.
 */
import base from './base'
export default class beauticians extends base {
  /**
   * 人气榜
   * @returns {Promise.<*>}
   */
  static async getRanks() {
    const url = `${this.baseUrl}/api/beauticians/beauticians/ranking`
    return await this.get(url)
  }

  /**
   * 选择专业类型
   * @returns {Promise.<*>}
   */
  static async getMajors() {
    const url = `${this.baseUrl}/api/beauticians/question/show-categoty`
    return await this.get(url)
  }

  /**
   * 开始答题
   * @params data
   * @returns {Promise.<*>}
   */
  static async beginAnswer(id, name) {
    let data = {
      category_id: id,
      category_name: name
    }
    const url = `${this.baseUrl}/api/beauticians/question/begin-fight`
    return await this.get(url, data)
  }
}
