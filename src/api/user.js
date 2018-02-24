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
  static async login(data) {
    const url = `${this.baseLogin}/api/user/login`
    return await this.post(url, data)
  }

  /**
   * 获取手机验证码
   * @param 手机号码
   * @returns {Promise.<*>}
   */
  static async messageBind(data) {
    const url = `${this.baseLogin}/api/user/message-bind`
    return await this.post(url, data)
  }

  /**
   * 商家注册
   * @param data
   * @returns {Promise.<*>}
   */
  static async register(data) {
    const url = `${this.baseLogin}/api/user/register`
    return await this.post(url, data)
  }

  /**
   * 商家忘记密码
   * @param data
   * @returns {Promise.<*>}
   */
  static async resetPassword(data) {
    const url = `${this.baseLogin}/api/user/reset-password`
    return await this.post(url, data)
  }
}
