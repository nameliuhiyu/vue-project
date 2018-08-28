import * as sessionStorageUtil from './sessionStorageUtil'
import * as adapterStorageUtil from './adapterStorageUtil'
import {obj2query} from './objectUtil'

function getURL (path) {
  if (!path) return
  let PrefixUrl = path.indexOf('http') < 0 ? (sessionStorageUtil.get('prefix') || '') : ''
  let startStr = path.indexOf('?') > -1 && path.indexOf('=') > -1 ? '&' : '?'
  return `${PrefixUrl}${path}${startStr}time=${(new Date()).getTime()}&src=m_web`
}

function getSessionToken () {
  return sessionStorageUtil.get('mtl_session');
}
function httpReq (method, url, params, data, authFlag) {
  console.log('开始请求:' + url)
  let token = getSessionToken()

  if (!method || !url) {
    return Promise.reject(new Error('请求方法和请求链接不能为空'))
  }
  // 创建一个 Request 对应，自定义 Headers

  let options = {
    headers: {
      // "Access-Control-Allow-Origin":"http://127.0.0.1:8111",
    },
    method: method,
    mode: 'cors'
  }
  if (token) {
    options.headers.token = token;
  }
  if (method && /post/i.test(method) && data) {
    let serializeData = obj2query(data)
    options.body = serializeData || ''
    options.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  }
  return new Promise((resolve, reject) => {
    fetch(getURL(url), options).then(res => {
      transformResponseHeader(res.headers)
      if (res.headers.get('Content-Type') && res.headers.get('Content-Type').indexOf('text/html') > -1) {
        return res.text()
      } else {
        return res.json()
      }
    }).then(res => {
      if (typeof res === 'string') {
        resolve(res)
      } else if (res.statusCode >= 0) {
        resolve(res)
      }
    }).catch(err => {
      reject(err)
    })
  })
}

function transformResponseHeader (headers) {
  //保存后台接口响应的的header 
  if (headers.get('savedate')) {
    adapterStorageUtil.set('save_date', headers.get('savedate'))
  }
}

/**
 * post 请求
 *
 * @param {*} url 请求链接
 * @param {*} data 请求参数
 * @param {*} authFlag 授权标志位
 */
function httpPost (url, data, authFlag) {
  return httpReq('post', url, {}, data, authFlag)
}

/**
 *get请求
 *
 * @param {*} url 请求链接
 * @param {*} params 请求参数
 * @param {*} authFlag 授权标志位
 */
function httpGet (url, params, authFlag) {
  return httpReq('get', url, params, {}, authFlag)
}

/**
 * put请求 类似Get 参数放在url 上，更新
 *
 * @param {*} url 请求链接
 * @param {*} params 请求参数
 * @param {*} authFlag 授权标志位
 */
function httpPut (url, params, authFlag) {
  return httpReq('put', url, params, {}, authFlag)
}

/**
 * 此处换个名字，因为delete 是关键字
 *
 * @param {*} url 请求链接
 * @param {*} params 请求参数
 * @param {*} authFlag 授权标志位
 */
function httpDelete (url, params, authFlag) {
  return httpReq('delete', url, params, {}, authFlag)
}

export {
  httpPost,
  httpGet,
  httpPut,
  httpDelete
}
