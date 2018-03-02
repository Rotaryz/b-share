/**
 * Created by user on 2018/2/23.
 */
import base from './base'
export default class beauticians extends base {
  /**
   * 人气榜
   * @returns {Promise.<*>}
   */
  static async getRanks(page = 1, limit = 10) {
    let data = {
      page,
      limit
    }
    const url = `${this.baseUrl}/api/beauticians/beauticians/ranking`
    return await this.get(url, data)
  }

  /**
   * 美导信息
   * @returns {Promise.<*>}
   */
  static async getInformation(id) {
    const url = `${this.baseUrl}/api/beauticians/beauticians/userinfo/${id}`
    return await this.get(url)
  }

  /**
   * 关注美导
   * @returns {Promise.<*>}
   */
  static async addFriend(id) {
    const url = `${this.baseUrl}/api/beauticians/beauticians/add-friend/${id}`
    return await this.get(url)
  }

  /**
   * 取消关注
   * @returns {Promise.<*>}
   */
  static async delFriend(id) {
    const url = `${this.baseUrl}/api/beauticians/beauticians/del-friend/${id}`
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

  /**
   * 邀请详情
   * @params data
   * @returns {Promise.<*>}
   */
  static async invitDetail() {
    const url = `${this.baseUrl}/api/beauticians/invite/detail`
    return await this.get(url)
  }
  /**
   * 获得的红包
   * @params data
   * @returns {Promise.<*>}
   */
  static async invitRewardList(page = 1, limit = 10) {
    let data = {
      page,
      limit
    }
    const url = `${this.baseUrl}/api/beauticians/invite/reward-list`
    return await this.get(url, data)
  }
  /**
   * 成功邀请记录
   * @params data
   * @returns {Promise.<*>}
   */
  static async invitRegisterList(page = 1, limit = 10) {
    let data = {
      page,
      limit
    }
    const url = `${this.baseUrl}/api/beauticians/invite/invited-register-list`
    return await this.get(url, data)
  }
  /**
   * 红包在路上
   * @params data
   * @returns {Promise.<*>}
   */
  static async invitWaitRewardList(page = 1, limit = 10) {
    let data = {
      page,
      limit
    }
    const url = `${this.baseUrl}/api/beauticians/invite/wait-reward-list`
    return await this.get(url, data)
  }
}
