import axios from 'axios'
//
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { message } from 'antd'

class Request {
  instance: AxiosInstance
  baseConfig: AxiosRequestConfig = {
    baseURL: '/api',
    timeout: 60000
  }
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(Object.assign(this.baseConfig, config))

    // 拦截操作
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        return config
      },
      (err: any) => {
        return Promise.reject(err)
      }
    )
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        console.log(res)

        return res
      },
      (err: any) => {
        console.log(err)

        let messages

        switch (err.response.status) {
          case 400:
            messages = '请求错误(400)'
            break
          case 401:
            messages = '未授权，请重新登录(401)'
            // 这里可以做清空storage并跳转到登录页的操作
            break
          case 403:
            messages = '拒绝访问(403)'
            break
          case 404:
            messages = '请求出错(404)'
            break
          case 408:
            messages = '请求超时(408)'
            break
          case 500:
            messages = '服务器错误(500)'
            break
          case 501:
            messages = '服务未实现(501)'
            break
          case 502:
            messages = '网络错误(502)'
            break
          case 503:
            messages = '服务不可用(503)'
            break
          case 504:
            messages = '网络超时(504)'
            break
          case 505:
            messages = 'HTTP版本不受支持(505)'
            break
          default:
        }
        // 提示
        message.error(err.message)
        return Promise.reject(err.message)
      }
    )
  }

  public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    // 这里去做判断 很多请求参数需要进行重新处理
    const now = new Date()
    // const dataWrapper: PostParams = {
    //   distinctRequestId: strRandom(32),
    //   timestamp: Math.ceil(now.valueOf() / 1000),
    //   env,
    //   log_origin: 'rest',
    //   lang: 'zh_cn',
    //   origin_system: appName,
    //   platform_name: 'system',
    //   soa_come_from: 'msgw',
    //   appcode: appCode,
    //   cloned: '1'
    // }
    // const postURL = url + '?' + qs.stringify(dataWrapper)
    // let params = base64Encode(JSON.stringify([...data]))
    // params = encodeURIComponent(params)
    // const ticket = Cookies.get('ticket')
    // const postData: PostData = { params, ticket }
    const res = this.instance
      .post(config.url as string, { as: 32, ass: 3 })
      .then((res) => {
        console.log(res)
        if (res) {
          return Promise.resolve(res)
        } else {
          //   if (res.data.code === 'ticketExpire') {
          //     localStorage.removeItem('router')
          //     // Cookies.remove('ticket')
          //     // Cookies.remove('user')
          //     // Cookies.remove('app')
          //     // // const beforeTemp = localStorage.getItem('beforeTemp')
          //     // window.location.href =
          //     //   server + '/redirect/sso?service=' + appName + '&env=' + env
          //   } else {
          return Promise.reject(new Error(res))
          //   }
        }
      })
      .catch((err: Error) => {
        return Promise.reject(err)
      })
    return res
  }
}
export default Request
