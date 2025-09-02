/**
 * 移动端视口管理工具
 * 解决移动端浏览器地址栏自动隐藏导致的布局问题
 */

// 检测是否为移动设备
export function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

// 检测是否为微信浏览器
export function isWeChat() {
  return /micromessenger/i.test(navigator.userAgent)
}

// 检测是否为iOS设备
export function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent)
}

// 检测是否为Android设备
export function isAndroid() {
  return /Android/.test(navigator.userAgent)
}

// 设置动态视口高度
export function setViewportHeight() {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
  
  // 同时设置其他视口单位
  document.documentElement.style.setProperty('--vw', `${window.innerWidth * 0.01}px`)
  document.documentElement.style.setProperty('--vmin', `${Math.min(window.innerHeight, window.innerWidth) * 0.01}px`)
  document.documentElement.style.setProperty('--vmax', `${Math.max(window.innerHeight, window.innerWidth) * 0.01}px`)
}

// 初始化视口管理
export function initViewportManager() {
  // 立即设置一次
  setViewportHeight()
  
  // 监听窗口大小变化
  window.addEventListener('resize', setViewportHeight)
  window.addEventListener('orientationchange', () => {
    // 延迟执行，等待屏幕旋转完成
    setTimeout(setViewportHeight, 100)
  })
  
  // 微信浏览器特殊处理
  if (isWeChat()) {
    handleWeChatViewport()
  }
  
  // iOS Safari特殊处理
  if (isIOS()) {
    handleIOSViewport()
  }
}

// 微信浏览器视口处理
function handleWeChatViewport() {
  // 禁用微信浏览器的下拉刷新
  document.addEventListener('touchstart', preventMultiTouch, { passive: false })
  document.addEventListener('touchmove', preventMultiTouch, { passive: false })
  
  // 处理微信浏览器的滚动行为
  document.body.style.overflow = 'hidden'
  document.documentElement.style.overflow = 'hidden'
  
  // 延迟恢复滚动，避免地址栏影响
  setTimeout(() => {
    document.body.style.overflow = 'auto'
    document.documentElement.style.overflow = 'auto'
  }, 100)
  
  // 监听微信浏览器的页面显示/隐藏
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      setTimeout(setViewportHeight, 100)
    }
  })
}

// iOS Safari视口处理
function handleIOSViewport() {
  // 处理iOS Safari的地址栏隐藏/显示
  let lastHeight = window.innerHeight
  
  const handleResize = () => {
    const currentHeight = window.innerHeight
    if (Math.abs(currentHeight - lastHeight) > 50) {
      // 地址栏状态发生变化
      setTimeout(setViewportHeight, 100)
      lastHeight = currentHeight
    }
  }
  
  window.addEventListener('resize', handleResize)
  
  // 处理iOS的页面显示/隐藏
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      setTimeout(setViewportHeight, 200)
    }
  })
}

// 防止多点触控
function preventMultiTouch(e) {
  if (e.touches.length > 1) {
    e.preventDefault()
  }
}

// 获取安全区域信息
export function getSafeAreaInsets() {
  const computedStyle = getComputedStyle(document.documentElement)
  
  return {
    top: parseInt(computedStyle.getPropertyValue('--safe-area-inset-top')) || 0,
    right: parseInt(computedStyle.getPropertyValue('--safe-area-inset-right')) || 0,
    bottom: parseInt(computedStyle.getPropertyValue('--safe-area-inset-bottom')) || 0,
    left: parseInt(computedStyle.getPropertyValue('--safe-area-inset-left')) || 0
  }
}

// 设置安全区域CSS变量
export function setSafeAreaInsets() {
  const insets = getSafeAreaInsets()
  
  document.documentElement.style.setProperty('--safe-area-inset-top', `${insets.top}px`)
  document.documentElement.style.setProperty('--safe-area-inset-right', `${insets.right}px`)
  document.documentElement.style.setProperty('--safe-area-inset-bottom', `${insets.bottom}px`)
  document.documentElement.style.setProperty('--safe-area-inset-left', `${insets.left}px`)
}

// 清理视口管理
export function destroyViewportManager() {
  window.removeEventListener('resize', setViewportHeight)
  window.removeEventListener('orientationchange', setViewportHeight)
  document.removeEventListener('touchstart', preventMultiTouch)
  document.removeEventListener('touchmove', preventMultiTouch)
}

// 获取当前视口信息
export function getViewportInfo() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: isMobile(),
    isWeChat: isWeChat(),
    isIOS: isIOS(),
    isAndroid: isAndroid(),
    safeAreaInsets: getSafeAreaInsets()
  }
}
