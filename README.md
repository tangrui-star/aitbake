# CodeLab.Me - 开发者工具平台

一个现代化的开发者工具平台，提供项目展示、工具管理和用户交互等功能。

## 🚀 特性

- **📱 移动端优先** - 专为移动设备优化的响应式设计
- **🎨 现代化UI** - 简洁美观的用户界面
- **⚡ 高性能** - 基于Vue 3和Vite构建，快速加载
- **🔧 组件化架构** - 高度可复用的组件系统
- **📊 数据可视化** - 内置图表和数据分析功能
- **🔔 实时通知** - 全局通知系统
- **💾 本地存储** - 智能的本地数据管理
- **🌐 多语言支持** - 国际化支持

## 📦 技术栈

- **前端框架**: Vue 3
- **构建工具**: Vite
- **路由管理**: Vue Router 4
- **状态管理**: Vue 3 Composition API
- **样式方案**: CSS3 + Flexbox/Grid
- **图表库**: Chart.js
- **图标**: Emoji + CSS

## 🏗️ 项目结构

```
src/
├── api/                    # API服务层
│   └── index.js           # API统一管理
├── components/             # 公共组件
│   ├── PageHeader.vue     # 页面头部组件
│   ├── StatsCard.vue      # 统计卡片组件
│   ├── ContentSection.vue # 内容区块组件
│   ├── AppButton.vue      # 通用按钮组件
│   ├── RatingStars.vue    # 星级评分组件
│   ├── Carousel.vue       # 轮播图组件
│   ├── ToolCard.vue       # 工具卡片组件
│   ├── ResourceCard.vue   # 资源卡片组件
│   ├── Chart.vue          # 图表组件
│   ├── Notification.vue   # 通知组件
│   ├── LoadingSpinner.vue # 加载动画组件
│   └── BottomNav.vue      # 底部导航组件
├── views/                  # 页面组件
│   ├── Home.vue           # 首页
│   ├── Works.vue          # 作品页
│   ├── Tools.vue          # 工具页
│   ├── Contact.vue        # 联系页
│   ├── WorkDetail.vue     # 作品详情页
│   ├── ToolDetail.vue     # 工具详情页
│   └── ProfileSettings.vue # 个人设置页
├── router/                 # 路由配置
│   └── index.js
├── utils/                  # 工具函数
│   └── index.js
├── constants/              # 常量配置
│   └── index.js
├── App.vue                 # 根组件
└── main.js                 # 入口文件
```

## 🎯 核心组件

### 基础组件

- **PageHeader** - 统一的页面头部，支持返回按钮和操作按钮
- **StatsCard** - 统计数据显示卡片，支持多种数据格式
- **ContentSection** - 内容区块包装器，提供统一的样式
- **AppButton** - 通用按钮组件，支持多种样式和状态
- **RatingStars** - 星级评分组件，支持交互和只读模式

### 业务组件

- **Carousel** - 轮播图组件，支持自动播放和点击事件
- **ToolCard** - 工具卡片组件，用于工具列表展示
- **ResourceCard** - 资源卡片组件，用于项目列表展示
- **Chart** - 图表组件，基于Chart.js实现
- **Notification** - 全局通知组件
- **LoadingSpinner** - 加载动画组件

## 🛠️ 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000 查看应用

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 📚 组件使用指南

### 基础组件使用

```vue
<template>
  <div>
    <!-- 页面头部 -->
    <PageHeader 
      title="作品详情"
      :actions="headerActions"
    />
    
    <!-- 统计卡片 -->
    <StatsCard :stats="projectStats" />
    
    <!-- 内容区块 -->
    <ContentSection title="功能特性">
      <div v-for="feature in features" :key="feature">
        {{ feature }}
      </div>
    </ContentSection>
    
    <!-- 按钮组 -->
    <div class="button-group">
      <AppButton 
        text="立即使用"
        type="primary"
        icon="🚀"
        @click="handleUse"
      />
      <AppButton 
        text="下载工具"
        type="secondary"
        icon="📥"
        @click="handleDownload"
      />
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import StatsCard from '@/components/StatsCard.vue'
import ContentSection from '@/components/ContentSection.vue'
import AppButton from '@/components/AppButton.vue'

export default {
  components: {
    PageHeader,
    StatsCard,
    ContentSection,
    AppButton
  },
  data() {
    return {
      headerActions: [
        {
          key: 'favorite',
          icon: '★',
          title: '收藏',
          handler: this.toggleFavorite
        }
      ],
      projectStats: [
        { label: '星标', value: 128 },
        { label: '浏览', value: 2048 }
      ],
      features: ['功能1', '功能2', '功能3']
    }
  },
  methods: {
    toggleFavorite() {
      // 收藏逻辑
    },
    handleUse() {
      // 使用逻辑
    },
    handleDownload() {
      // 下载逻辑
    }
  }
}
</script>
```

### 工具函数使用

```javascript
import { 
  formatNumber, 
  formatDate, 
  storage, 
  notify, 
  loading 
} from '@/utils'

// 格式化数字
const formatted = formatNumber(1234567) // "1,234,567"

// 格式化日期
const date = formatDate(new Date(), 'YYYY-MM-DD')

// 本地存储
storage.set('userInfo', { name: '开发者' })
const userInfo = storage.get('userInfo')

// 通知
notify.success('操作成功')
notify.error('操作失败')

// 加载状态
loading.show('正在处理...')
loading.hide()
```

### 常量使用

```javascript
import { 
  APP_CONFIG, 
  ROUTES, 
  NOTIFICATION_TYPES, 
  BUTTON_TYPES,
  COLORS 
} from '@/constants'

// 使用应用配置
console.log(APP_CONFIG.NAME) // "CodeLab.Me"

// 使用路由常量
this.$router.push(ROUTES.HOME)

// 使用按钮类型
<AppButton type={BUTTON_TYPES.PRIMARY} text="确定" />
```

## 🔧 API接口

项目提供了完整的API服务层，支持：

- **项目管理** - 项目的CRUD操作
- **工具管理** - 工具的CRUD操作
- **用户管理** - 用户认证和信息管理
- **收藏管理** - 用户收藏功能
- **文件上传** - 支持多种文件类型上传
- **搜索功能** - 全局搜索支持
- **统计分析** - 平台和用户数据统计

详细API文档请参考 [API.md](./docs/API.md)

## 🎨 设计规范

### 颜色系统

```css
/* 主色调 */
--primary-color: #007AFF;
--secondary-color: #6C757D;
--success-color: #28A745;
--danger-color: #DC3545;
--warning-color: #FFC107;
--info-color: #17A2B8;

/* 渐变色彩 */
--gradient-primary: linear-gradient(135deg, #667eea, #764ba2);
--gradient-success: linear-gradient(135deg, #4facfe, #00f2fe);
--gradient-warning: linear-gradient(135deg, #f093fb, #f5576c);
```

### 间距系统

```css
/* 基础间距 */
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
```

### 字体系统

```css
/* 字体大小 */
--font-size-xs: 12px;
--font-size-sm: 14px;
--font-size-md: 16px;
--font-size-lg: 18px;
--font-size-xl: 24px;
--font-size-xxl: 32px;
```

## 📱 移动端适配

项目采用移动端优先的设计理念：

- **响应式布局** - 使用Flexbox和Grid实现
- **触摸优化** - 所有交互元素都针对触摸操作优化
- **性能优化** - 图片懒加载、代码分割等
- **离线支持** - 支持PWA特性

## 🧪 测试

### 单元测试

```bash
npm run test:unit
```

### 组件测试

```bash
npm run test:component
```

### E2E测试

```bash
npm run test:e2e
```

## 📦 构建和部署

### 开发环境

```bash
npm run dev
```

### 生产构建

```bash
npm run build
```

### 代码检查

```bash
npm run lint
```

### 代码格式化

```bash
npm run format
```

## 🤝 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系我们

- **邮箱**: support@codelab.me
- **网站**: https://codelab.me
- **GitHub**: https://github.com/codelab/codelab-me

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者和设计师！

---

**CodeLab.Me** - 让开发更简单，让工具更智能 🚀 