/**
 * API服务层
 * 统一管理所有API请求
 */

import { notify, loading } from '@/utils'

// API基础配置
const API_BASE_URL = process.env.VUE_APP_API_BASE_URL || 'https://api.codelab.me'
const API_TIMEOUT = 10000

/**
 * 请求拦截器
 */
const requestInterceptor = (config) => {
  // 添加认证头
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  
  // 添加时间戳防止缓存
  if (config.method === 'get') {
    config.params = {
      ...config.params,
      _t: Date.now()
    }
  }
  
  return config
}

/**
 * 响应拦截器
 */
const responseInterceptor = (response) => {
  const { data, status } = response
  
  if (status >= 200 && status < 300) {
    return data
  } else {
    throw new Error(`HTTP ${status}: ${data.message || '请求失败'}`)
  }
}

/**
 * 错误处理
 */
const errorHandler = (error) => {
  console.error('API Error:', error)
  
  if (error.response) {
    const { status, data } = error.response
    
    switch (status) {
      case 401:
        notify.error('登录已过期，请重新登录')
        // 跳转到登录页
        window.location.href = '/login'
        break
      case 403:
        notify.error('没有权限访问该资源')
        break
      case 404:
        notify.error('请求的资源不存在')
        break
      case 500:
        notify.error('服务器内部错误')
        break
      default:
        notify.error(data?.message || '请求失败')
    }
  } else if (error.request) {
    notify.error('网络连接失败，请检查网络')
  } else {
    notify.error(error.message || '请求失败')
  }
  
  return Promise.reject(error)
}

/**
 * 通用请求方法
 */
async function request(url, options = {}) {
  const {
    method = 'GET',
    data = null,
    params = null,
    headers = {},
    timeout = API_TIMEOUT,
    showLoading = true,
    showError = true
  } = options

  // 显示加载状态
  if (showLoading) {
    loading.show()
  }

  try {
    // 构建请求配置
    const config = {
      method: method.toUpperCase(),
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      timeout
    }

    // 添加请求体
    if (data && method !== 'GET') {
      config.body = JSON.stringify(data)
    }

    // 添加查询参数
    if (params && method === 'GET') {
      const searchParams = new URLSearchParams(params)
      url += `?${searchParams.toString()}`
    }

    // 应用请求拦截器
    const interceptedConfig = requestInterceptor(config)

    // 发送请求
    const response = await fetch(`${API_BASE_URL}${url}`, interceptedConfig)
    
    // 应用响应拦截器
    const result = responseInterceptor(response)
    
    return result
  } catch (error) {
    if (showError) {
      errorHandler(error)
    }
    throw error
  } finally {
    if (showLoading) {
      loading.hide()
    }
  }
}

/**
 * API方法集合
 */
export const api = {
  // GET请求
  get(url, params = null, options = {}) {
    return request(url, { method: 'GET', params, ...options })
  },

  // POST请求
  post(url, data = null, options = {}) {
    return request(url, { method: 'POST', data, ...options })
  },

  // PUT请求
  put(url, data = null, options = {}) {
    return request(url, { method: 'PUT', data, ...options })
  },

  // DELETE请求
  delete(url, options = {}) {
    return request(url, { method: 'DELETE', ...options })
  },

  // PATCH请求
  patch(url, data = null, options = {}) {
    return request(url, { method: 'PATCH', data, ...options })
  }
}

/**
 * 项目相关API
 */
export const projectAPI = {
  // 获取项目列表
  getProjects(params = {}) {
    return api.get('/projects', params)
  },

  // 获取项目详情
  getProject(id) {
    return api.get(`/projects/${id}`)
  },

  // 创建项目
  createProject(data) {
    return api.post('/projects', data)
  },

  // 更新项目
  updateProject(id, data) {
    return api.put(`/projects/${id}`, data)
  },

  // 删除项目
  deleteProject(id) {
    return api.delete(`/projects/${id}`)
  },

  // 获取项目评论
  getProjectComments(projectId, params = {}) {
    return api.get(`/projects/${projectId}/comments`, params)
  },

  // 添加项目评论
  addProjectComment(projectId, data) {
    return api.post(`/projects/${projectId}/comments`, data)
  }
}

/**
 * 工具相关API
 */
export const toolAPI = {
  // 获取工具列表
  getTools(params = {}) {
    return api.get('/tools', params)
  },

  // 获取工具详情
  getTool(id) {
    return api.get(`/tools/${id}`)
  },

  // 创建工具
  createTool(data) {
    return api.post('/tools', data)
  },

  // 更新工具
  updateTool(id, data) {
    return api.put(`/tools/${id}`, data)
  },

  // 删除工具
  deleteTool(id) {
    return api.delete(`/tools/${id}`)
  },

  // 获取工具评价
  getToolReviews(toolId, params = {}) {
    return api.get(`/tools/${toolId}/reviews`, params)
  },

  // 添加工具评价
  addToolReview(toolId, data) {
    return api.post(`/tools/${toolId}/reviews`, data)
  }
}

/**
 * 用户相关API
 */
export const userAPI = {
  // 用户登录
  login(data) {
    return api.post('/auth/login', data)
  },

  // 用户注册
  register(data) {
    return api.post('/auth/register', data)
  },

  // 用户登出
  logout() {
    return api.post('/auth/logout')
  },

  // 获取用户信息
  getUserInfo() {
    return api.get('/user/profile')
  },

  // 更新用户信息
  updateUserInfo(data) {
    return api.put('/user/profile', data)
  },

  // 获取用户收藏
  getUserFavorites(params = {}) {
    return api.get('/user/favorites', params)
  },

  // 添加收藏
  addFavorite(data) {
    return api.post('/user/favorites', data)
  },

  // 取消收藏
  removeFavorite(id) {
    return api.delete(`/user/favorites/${id}`)
  }
}

/**
 * 文件上传API
 */
export const uploadAPI = {
  // 上传文件
  uploadFile(file, onProgress = null) {
    const formData = new FormData()
    formData.append('file', file)

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      
      xhr.upload.addEventListener('progress', (event) => {
        if (onProgress && event.lengthComputable) {
          const progress = (event.loaded / event.total) * 100
          onProgress(progress)
        }
      })

      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const response = JSON.parse(xhr.responseText)
            resolve(response)
          } catch (error) {
            reject(new Error('响应解析失败'))
          }
        } else {
          reject(new Error(`上传失败: ${xhr.status}`))
        }
      })

      xhr.addEventListener('error', () => {
        reject(new Error('网络错误'))
      })

      xhr.open('POST', `${API_BASE_URL}/upload`)
      
      // 添加认证头
      const token = localStorage.getItem('token')
      if (token) {
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
      }

      xhr.send(formData)
    })
  }
}

export default api 