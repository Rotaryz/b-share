/**
 * Created by user on 2018/2/24.
 */
import base from './base'
export default class Industries extends base {
  /**
   * 行业列表
   * @param
   * @returns {Promise.<*>}
   */
  static async industries() {
    const url = `${this.baseUrl}/api/industries`
    return await this.get(url)
  }
}
