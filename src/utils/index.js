/**
 * 工具函数集合
 */

/**
 * 格式化数字，添加千分位分隔符
 * @param {number} num - 要格式化的数字
 * @returns {string} 格式化后的字符串
 */
export function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

/**
 * 格式化日期
 * @param {Date|string} date - 日期对象或日期字符串
 * @param {string} format - 格式化模式，默认为 'YYYY-MM-DD'
 * @returns {string} 格式化后的日期字符串
 */
export function formatDate(date, format = 'YYYY-MM-DD') {
  const d = new Date(date)
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  
  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
}

/**
 * 防抖函数
 * @param {Function} func - 要防抖的函数
 * @param {number} wait - 等待时间（毫秒）
 * @returns {Function} 防抖后的函数
 */
export function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * 节流函数
 * @param {Function} func - 要节流的函数
 * @param {number} limit - 限制时间（毫秒）
 * @returns {Function} 节流后的函数
 */
export function throttle(func, limit) {
  let inThrottle
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

/**
 * 深拷贝对象
 * @param {any} obj - 要拷贝的对象
 * @returns {any} 拷贝后的对象
 */
export function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj.getTime())
  if (obj instanceof Array) return obj.map(item => deepClone(item))
  if (typeof obj === 'object') {
    const clonedObj = {}
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key])
      }
    }
    return clonedObj
  }
}

/**
 * 生成随机ID
 * @param {number} length - ID长度，默认为8
 * @returns {string} 随机ID
 */
export function generateId(length = 8) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

/**
 * 验证邮箱格式
 * @param {string} email - 邮箱地址
 * @returns {boolean} 是否为有效邮箱
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * 验证手机号格式（中国大陆）
 * @param {string} phone - 手机号
 * @returns {boolean} 是否为有效手机号
 */
export function isValidPhone(phone) {
  const phoneRegex = /^1[3-9]\d{9}$/
  return phoneRegex.test(phone)
}

/**
 * 获取URL参数
 * @param {string} name - 参数名
 * @returns {string|null} 参数值
 */
export function getUrlParam(name) {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(name)
}

/**
 * 设置URL参数
 * @param {string} name - 参数名
 * @param {string} value - 参数值
 */
export function setUrlParam(name, value) {
  const url = new URL(window.location)
  url.searchParams.set(name, value)
  window.history.replaceState({}, '', url)
}

/**
 * 本地存储工具类
 */
export const storage = {
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.error('Storage set error:', e)
    }
  },
  
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (e) {
      console.error('Storage get error:', e)
      return defaultValue
    }
  },
  
  remove(key) {
    try {
      localStorage.removeItem(key)
    } catch (e) {
      console.error('Storage remove error:', e)
    }
  },
  
  clear() {
    try {
      localStorage.clear()
    } catch (e) {
      console.error('Storage clear error:', e)
    }
  }
}

/**
 * 通知工具类
 */
export const notify = {
  success(message, title = '成功') {
    if (window.$notify) {
      window.$notify({ title, message, type: 'success' })
    }
  },
  
  error(message, title = '错误') {
    if (window.$notify) {
      window.$notify({ title, message, type: 'error' })
    }
  },
  
  warning(message, title = '警告') {
    if (window.$notify) {
      window.$notify({ title, message, type: 'warning' })
    }
  },
  
  info(message, title = '提示') {
    if (window.$notify) {
      window.$notify({ title, message, type: 'info' })
    }
  }
}

/**
 * 加载工具类
 */
export const loading = {
  show(text = '加载中...') {
    if (window.$loading) {
      window.$loading(text)
    }
  },
  
  hide() {
    if (window.$hideLoading) {
      window.$hideLoading()
    }
  }
} 