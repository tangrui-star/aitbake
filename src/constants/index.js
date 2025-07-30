/**
 * 常量配置文件
 * 统一管理项目中的常量
 */

/**
 * 应用配置
 */
export const APP_CONFIG = {
  NAME: 'CodeLab.Me',
  VERSION: '1.0.0',
  DESCRIPTION: '开发者工具平台',
  AUTHOR: 'CodeLab Team',
  WEBSITE: 'https://codelab.me'
}

/**
 * 路由配置
 */
export const ROUTES = {
  HOME: '/',
  WORKS: '/works',
  TOOLS: '/tools',
  CONTACT: '/contact',
  PROFILE_SETTINGS: '/profile-settings',
  WORK_DETAIL: '/works/:id',
  TOOL_DETAIL: '/tools/:id'
}

/**
 * 页面标题
 */
export const PAGE_TITLES = {
  HOME: '首页',
  WORKS: '作品',
  TOOLS: '工具',
  CONTACT: '联系',
  PROFILE_SETTINGS: '个人设置',
  WORK_DETAIL: '作品详情',
  TOOL_DETAIL: '工具详情'
}

/**
 * 通知类型
 */
export const NOTIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info'
}

/**
 * 按钮类型
 */
export const BUTTON_TYPES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  OUTLINE: 'outline',
  DANGER: 'danger'
}

/**
 * 按钮尺寸
 */
export const BUTTON_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

/**
 * 项目分类
 */
export const PROJECT_CATEGORIES = {
  ALL: 'all',
  WEB: 'web',
  MOBILE: 'mobile',
  DESKTOP: 'desktop',
  AI: 'ai',
  DATA: 'data',
  TOOL: 'tool'
}

/**
 * 工具分类
 */
export const TOOL_CATEGORIES = {
  ALL: 'all',
  CALCULATOR: 'calculator',
  CONVERTER: 'converter',
  FORMATTER: 'formatter',
  GENERATOR: 'generator',
  ANALYZER: 'analyzer',
  VISUALIZER: 'visualizer'
}

/**
 * 用户角色
 */
export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  GUEST: 'guest'
}

/**
 * 文件类型
 */
export const FILE_TYPES = {
  IMAGE: 'image',
  DOCUMENT: 'document',
  VIDEO: 'video',
  AUDIO: 'audio',
  ARCHIVE: 'archive'
}

/**
 * 支持的文件扩展名
 */
export const SUPPORTED_EXTENSIONS = {
  IMAGE: ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'],
  DOCUMENT: ['.pdf', '.doc', '.docx', '.txt', '.md'],
  VIDEO: ['.mp4', '.avi', '.mov', '.wmv'],
  AUDIO: ['.mp3', '.wav', '.flac', '.aac'],
  ARCHIVE: ['.zip', '.rar', '.7z', '.tar', '.gz']
}

/**
 * 本地存储键名
 */
export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER_INFO: 'userInfo',
  THEME: 'theme',
  LANGUAGE: 'language',
  FAVORITES: 'favorites',
  SETTINGS: 'settings'
}

/**
 * 主题配置
 */
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  AUTO: 'auto'
}

/**
 * 语言配置
 */
export const LANGUAGES = {
  ZH_CN: 'zh-CN',
  EN_US: 'en-US'
}

/**
 * 分页配置
 */
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [10, 20, 50, 100]
}

/**
 * 验证规则
 */
export const VALIDATION_RULES = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^1[3-9]\d{9}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
  USERNAME: /^[a-zA-Z0-9_]{3,20}$/
}

/**
 * 错误消息
 */
export const ERROR_MESSAGES = {
  NETWORK_ERROR: '网络连接失败，请检查网络',
  SERVER_ERROR: '服务器错误，请稍后重试',
  UNAUTHORIZED: '登录已过期，请重新登录',
  FORBIDDEN: '没有权限访问该资源',
  NOT_FOUND: '请求的资源不存在',
  VALIDATION_ERROR: '输入数据格式不正确',
  FILE_TOO_LARGE: '文件大小超出限制',
  UNSUPPORTED_FILE_TYPE: '不支持的文件类型'
}

/**
 * 成功消息
 */
export const SUCCESS_MESSAGES = {
  SAVE_SUCCESS: '保存成功',
  DELETE_SUCCESS: '删除成功',
  UPLOAD_SUCCESS: '上传成功',
  LOGIN_SUCCESS: '登录成功',
  LOGOUT_SUCCESS: '登出成功',
  REGISTER_SUCCESS: '注册成功'
}

/**
 * 加载文本
 */
export const LOADING_TEXTS = {
  LOADING: '加载中...',
  SAVING: '保存中...',
  UPLOADING: '上传中...',
  PROCESSING: '处理中...',
  SEARCHING: '搜索中...'
}

/**
 * 图标映射
 */
export const ICONS = {
  // 导航图标
  HOME: '🏠',
  WORKS: '💼',
  TOOLS: '🛠️',
  CONTACT: '📞',
  SETTINGS: '⚙️',
  
  // 操作图标
  ADD: '➕',
  EDIT: '✏️',
  DELETE: '🗑️',
  SAVE: '💾',
  SHARE: '📤',
  DOWNLOAD: '📥',
  UPLOAD: '📤',
  SEARCH: '🔍',
  FILTER: '🔧',
  SORT: '📊',
  
  // 状态图标
  SUCCESS: '✅',
  ERROR: '❌',
  WARNING: '⚠️',
  INFO: 'ℹ️',
  LOADING: '⏳',
  
  // 文件图标
  FILE: '📄',
  FOLDER: '📁',
  IMAGE: '🖼️',
  VIDEO: '🎥',
  AUDIO: '🎵',
  
  // 社交图标
  GITHUB: '🐙',
  TWITTER: '🐦',
  LINKEDIN: '💼',
  EMAIL: '📧',
  WEBSITE: '🌐'
}

/**
 * 颜色配置
 */
export const COLORS = {
  PRIMARY: '#007AFF',
  SECONDARY: '#6C757D',
  SUCCESS: '#28A745',
  DANGER: '#DC3545',
  WARNING: '#FFC107',
  INFO: '#17A2B8',
  LIGHT: '#F8F9FA',
  DARK: '#343A40',
  
  // 渐变色彩
  GRADIENTS: {
    PRIMARY: 'linear-gradient(135deg, #667eea, #764ba2)',
    SUCCESS: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    WARNING: 'linear-gradient(135deg, #f093fb, #f5576c)',
    INFO: 'linear-gradient(135deg, #4facfe, #00f2fe)'
  }
}

/**
 * 动画配置
 */
export const ANIMATIONS = {
  DURATION: {
    FAST: 150,
    NORMAL: 300,
    SLOW: 500
  },
  EASING: {
    EASE_IN: 'ease-in',
    EASE_OUT: 'ease-out',
    EASE_IN_OUT: 'ease-in-out'
  }
}

/**
 * 响应式断点
 */
export const BREAKPOINTS = {
  XS: 0,
  SM: 576,
  MD: 768,
  LG: 992,
  XL: 1200,
  XXL: 1400
}

export default {
  APP_CONFIG,
  ROUTES,
  PAGE_TITLES,
  NOTIFICATION_TYPES,
  BUTTON_TYPES,
  BUTTON_SIZES,
  PROJECT_CATEGORIES,
  TOOL_CATEGORIES,
  USER_ROLES,
  FILE_TYPES,
  SUPPORTED_EXTENSIONS,
  STORAGE_KEYS,
  THEMES,
  LANGUAGES,
  PAGINATION,
  VALIDATION_RULES,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  LOADING_TEXTS,
  ICONS,
  COLORS,
  ANIMATIONS,
  BREAKPOINTS
} 