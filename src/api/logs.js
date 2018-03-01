/**
 * Created by user on 2018/2/23.
 */
import base from './base'
export default class find extends base {
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

  /**
   * 发表日志
   * @param
   * @returns {Promise.<*>}
   */
  static async sendFind(data) {
    const url = `${this.baseUrl}/api/logs/user-live-logs`
    return await this.post(url, data)
  }

  /**
   * 删除日志
   * @param
   * @returns {Promise.<*>}
   */
  static async delFind(id) {
    const url = `${this.baseUrl}/api/logs/user-live-logs/${id}`
    return await this.delete(url)
  }

  /**
   * 日志详情
   * @param
   * @returns {Promise.<*>}
   */
  static async findDetail(id) {
    const url = `${this.baseUrl}/api/logs/user-live-logs/${id}`
    return await this.get(url)
  }

  /**
   * 评论日志
   * @param
   * @returns {Promise.<*>}
   */
  static async findComment(data) {
    const url = `${this.baseUrl}/api/logs/comment`
    return await this.post(url, data)
  }
}
