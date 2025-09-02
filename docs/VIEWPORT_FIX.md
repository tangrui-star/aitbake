# 移动端视口优化修复说明

## 问题描述

在移动端浏览器（特别是微信浏览器）中，当用户滑动页面时，浏览器地址栏会自动隐藏/显示，这会导致：
1. 视口高度（viewport height）发生变化
2. 页面布局出现跳动
3. 用户体验不佳

## 解决方案

### 1. HTML 视口配置优化

**文件**: `index.html`
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover">
```

**改进点**:
- 添加 `user-scalable=no` 禁用用户缩放
- 添加 `viewport-fit=cover` 支持安全区域

### 2. CSS 视口高度管理

**文件**: `src/style.css`

**主要修改**:
```css
/* 使用动态视口高度 */
.container {
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
}

/* 优化滚动行为 */
html, body {
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: none;
  touch-action: pan-y;
}

/* 安全区域支持 */
.bottom-nav {
  padding-bottom: calc(8px + env(safe-area-inset-bottom));
}
```

### 3. JavaScript 视口管理工具

**文件**: `src/utils/viewport.js`

**核心功能**:
- 动态设置视口高度 CSS 变量
- 检测设备类型（移动端、微信浏览器、iOS、Android）
- 处理微信浏览器特殊行为
- 管理安全区域
- 防止多点触控

**主要方法**:
```javascript
// 初始化视口管理
initViewportManager()

// 设置动态视口高度
setViewportHeight()

// 获取视口信息
getViewportInfo()
```

### 4. 应用入口优化

**文件**: `src/main.js`
```javascript
import { initViewportManager, setSafeAreaInsets } from './utils/viewport.js'

// 初始化视口管理
initViewportManager()
setSafeAreaInsets()
```

### 5. 测试页面

**文件**: `src/views/ViewportTest.vue`
- 实时显示视口信息
- 测试滚动行为
- 验证修复效果

**访问路径**: `/viewport-test`

## 技术特性

### 1. 动态视口高度
- 使用 CSS 自定义属性 `--vh` 存储实际视口高度
- 监听窗口大小变化，实时更新视口高度
- 支持屏幕旋转和方向变化

### 2. 微信浏览器优化
- 检测微信浏览器环境
- 禁用下拉刷新功能
- 优化滚动行为
- 处理页面显示/隐藏事件

### 3. iOS Safari 优化
- 检测地址栏状态变化
- 处理页面可见性变化
- 优化触摸交互

### 4. 安全区域支持
- 支持刘海屏和圆角屏幕
- 使用 `env(safe-area-inset-*)` 处理安全区域
- 自动适配不同设备

### 5. 触摸优化
- 防止双击缩放
- 优化触摸高亮效果
- 禁用多点触控

## 兼容性

### 支持的浏览器
- ✅ iOS Safari 12+
- ✅ Android Chrome 70+
- ✅ 微信浏览器（iOS/Android）
- ✅ 其他现代移动浏览器

### 支持的设备
- ✅ iPhone（包括刘海屏）
- ✅ iPad
- ✅ Android 手机
- ✅ 平板设备

## 使用方法

### 1. 自动初始化
项目启动时会自动初始化视口管理，无需手动配置。

### 2. 获取视口信息
```javascript
import { getViewportInfo } from '@/utils/viewport.js'

const info = getViewportInfo()
console.log(info)
```

### 3. 手动设置视口高度
```javascript
import { setViewportHeight } from '@/utils/viewport.js'

setViewportHeight()
```

### 4. 检测设备类型
```javascript
import { isMobile, isWeChat, isIOS, isAndroid } from '@/utils/viewport.js'

if (isMobile()) {
  // 移动端逻辑
}

if (isWeChat()) {
  // 微信浏览器逻辑
}
```

## 测试验证

### 1. 功能测试
访问 `/viewport-test` 页面，检查：
- 视口信息是否正确显示
- 滚动时布局是否稳定
- 地址栏显示/隐藏是否影响布局

### 2. 设备测试
在不同设备上测试：
- iPhone Safari
- Android Chrome
- 微信浏览器
- 其他移动浏览器

### 3. 场景测试
测试以下场景：
- 页面滚动
- 屏幕旋转
- 应用切换
- 页面刷新

## 注意事项

1. **性能考虑**: 视口高度计算在窗口大小变化时触发，频率较高，但计算量很小
2. **兼容性**: 使用现代 CSS 特性，需要较新的浏览器支持
3. **测试**: 建议在真实设备上测试，模拟器可能无法完全模拟地址栏行为
4. **维护**: 随着浏览器更新，可能需要调整相关代码

## 相关文件

- `index.html` - HTML 视口配置
- `src/style.css` - CSS 样式优化
- `src/utils/viewport.js` - 视口管理工具
- `src/main.js` - 应用入口
- `src/App.vue` - 根组件
- `src/views/ViewportTest.vue` - 测试页面
- `src/router/index.js` - 路由配置

## 更新日志

- **2024-01-XX**: 初始版本，解决移动端地址栏自动隐藏问题
- 添加动态视口高度管理
- 优化微信浏览器兼容性
- 支持安全区域
- 添加测试页面
