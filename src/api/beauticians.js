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
   * 能力模型
   * @returns {Promise.<*>}
   */
  static async getScores(id = '') {
    let data = {
      user_id: id
    }
    const url = `${this.baseUrl}/api/beauticians/beauticians/ability-score`
    return await this.get(url, data)
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
   * 答题判断下一步操作
   * @returns {Promise.<*>}
   */
  static async checkAnswerNext() {
    const url = `${this.baseUrl}/api/beauticians/question/check-first-answer`
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
   * 查找问题
   * @returns {Promise.<*>}
   */
  static async findQus() {
    const url = `${this.baseUrl}/api/beauticians/question/find-quiz`
    return await this.get(url)
  }

  /**
   * 回答问题
   * @returns {Promise.<*>}
   */
  static async answerQus(id) {
    let data = {
      answer_id: id
    }
    const url = `${this.baseUrl}/api/beauticians/question/choose`
    return await this.get(url, data)
  }

  /**
   * 获取结果
   * @returns {Promise.<*>}
   */
  static async getAnsResult() {
    const url = `${this.baseUrl}/api/beauticians/question/get-result`
    return await this.get(url)
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
  /**
   * 邀请注册
   * @params data
   * @returns {Promise.<*>}
   */
  static async invitRegister(data) {
    const url = `${this.baseUrl}/api/beauticians/invite/invite-register`
    return await this.post(url, data)
  }
  /**
   * 活动规则
   * @params data
   * @returns {Promise.<*>}
   */
  static async activityDetail(data) {
    const url = `${this.baseUrl}/api/beauticians/activity/detail`
    return await this.get(url, data)
  }
}
