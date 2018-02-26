/**
 * Created by user on 2018/2/23.
 */
import base from './base'
export default class beauticians extends base {
  /**
   * 选择专业类型
   * @returns {Promise.<*>}
   */
  static async getMajors() {
    const url = `${this.baseUrl}/api/beauticians/question/show-categoty`
    return await this.get(url)
  }
}
