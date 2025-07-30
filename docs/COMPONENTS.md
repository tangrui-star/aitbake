# CodeLab.Me 组件文档

## 概述

本文档详细介绍了 CodeLab.Me 项目中所有可用的公共组件，包括使用方法、属性配置和示例代码。

## 基础组件

### PageHeader - 页面头部组件

用于所有详情页面的头部导航，包含返回按钮、标题和操作按钮。

#### 属性

| 属性名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| `title` | String | - | 页面标题（必需） |
| `actions` | Array | `[]` | 操作按钮数组 |

#### 事件

| 事件名 | 参数 | 描述 |
|--------|------|------|
| `back` | - | 点击返回按钮时触发 |

#### 示例

```vue
<template>
  <PageHeader 
    title="作品详情"
    :actions="headerActions"
  />
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  data() {
    return {
      headerActions: [
        {
          key: 'favorite',
          icon: '★',
          title: '收藏',
          iconClass: 'star-filled',
          handler: this.toggleFavorite
        },
        {
          key: 'share',
          icon: '📤',
          title: '分享',
          handler: this.shareProject
        }
      ]
    }
  },
  methods: {
    toggleFavorite() {
      // 收藏逻辑
    },
    shareProject() {
      // 分享逻辑
    }
  }
}
</script>
```

### StatsCard - 统计卡片组件

用于显示各种统计数据，如星标、浏览、下载等。

#### 属性

| 属性名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| `stats` | Array | - | 统计数据数组（必需） |

#### stats 数组格式

```javascript
[
  {
    label: '星标',
    value: 128
  },
  {
    label: '浏览',
    value: 2048
  }
]
```

#### 示例

```vue
<template>
  <StatsCard :stats="projectStats" />
</template>

<script>
import StatsCard from '@/components/StatsCard.vue'

export default {
  components: {
    StatsCard
  },
  data() {
    return {
      projectStats: [
        { label: '星标', value: 128 },
        { label: '复刻', value: 32 },
        { label: '浏览', value: 2048 },
        { label: '下载', value: 156 }
      ]
    }
  }
}
</script>
```

### ContentSection - 内容区块组件

用于包装各种内容区域，提供统一的样式和布局。

#### 属性

| 属性名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| `title` | String | `''` | 区块标题 |

#### 插槽

| 插槽名 | 描述 |
|--------|------|
| `default` | 区块内容 |

#### 示例

```vue
<template>
  <ContentSection title="功能特性">
    <div class="features-list">
      <div v-for="feature in features" :key="feature">
        {{ feature }}
      </div>
    </div>
  </ContentSection>
</template>

<script>
import ContentSection from '@/components/ContentSection.vue'

export default {
  components: {
    ContentSection
  },
  data() {
    return {
      features: ['功能1', '功能2', '功能3']
    }
  }
}
</script>
```

### AppButton - 通用按钮组件

支持多种样式和状态的按钮组件。

#### 属性

| 属性名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| `text` | String | - | 按钮文本（必需） |
| `type` | String | `'primary'` | 按钮类型：`primary`, `secondary`, `outline`, `danger` |
| `size` | String | `'medium'` | 按钮尺寸：`small`, `medium`, `large` |
| `icon` | String | `''` | 按钮图标 |
| `disabled` | Boolean | `false` | 是否禁用 |
| `fullWidth` | Boolean | `false` | 是否全宽 |

#### 事件

| 事件名 | 参数 | 描述 |
|--------|------|------|
| `click` | Event | 点击按钮时触发 |

#### 示例

```vue
<template>
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
    <AppButton 
      text="查看文档"
      type="outline"
      @click="handleViewDocs"
    />
  </div>
</template>

<script>
import AppButton from '@/components/AppButton.vue'

export default {
  components: {
    AppButton
  },
  methods: {
    handleUse() {
      // 使用逻辑
    },
    handleDownload() {
      // 下载逻辑
    },
    handleViewDocs() {
      // 查看文档逻辑
    }
  }
}
</script>
```

### RatingStars - 星级评分组件

用于显示和收集用户评分。

#### 属性

| 属性名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| `value` | Number | `0` | 当前评分值 |
| `maxStars` | Number | `5` | 最大星级数 |
| `readonly` | Boolean | `false` | 是否只读 |
| `showScore` | Boolean | `false` | 是否显示分数 |

#### 事件

| 事件名 | 参数 | 描述 |
|--------|------|------|
| `input` | Number | 评分值改变时触发 |
| `change` | Number | 评分值改变时触发 |

#### 示例

```vue
<template>
  <div class="rating-section">
    <h3>用户评分</h3>
    <RatingStars 
      v-model="rating"
      :readonly="false"
      :show-score="true"
      @change="handleRatingChange"
    />
  </div>
</template>

<script>
import RatingStars from '@/components/RatingStars.vue'

export default {
  components: {
    RatingStars
  },
  data() {
    return {
      rating: 4.5
    }
  },
  methods: {
    handleRatingChange(newRating) {
      console.log('评分改变:', newRating)
    }
  }
}
</script>
```

## 业务组件

### Carousel - 轮播图组件

用于首页轮播图展示。

#### 属性

| 属性名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| `items` | Array | `[]` | 轮播项数组 |
| `autoplay` | Boolean | `true` | 是否自动播放 |
| `interval` | Number | `3000` | 自动播放间隔（毫秒） |

#### 事件

| 事件名 | 参数 | 描述 |
|--------|------|------|
| `item-click` | Object | 点击轮播项时触发 |

#### 示例

```vue
<template>
  <Carousel 
    :items="carouselItems"
    :autoplay="true"
    :interval="5000"
    @item-click="handleCarouselClick"
  />
</template>

<script>
import Carousel from '@/components/Carousel.vue'

export default {
  components: {
    Carousel
  },
  data() {
    return {
      carouselItems: [
        {
          title: '数据可视化工具',
          description: '轻松打造专业数据分析报表',
          image: 'https://example.com/image1.jpg',
          link: '/works/data-visualization'
        }
      ]
    }
  },
  methods: {
    handleCarouselClick(item) {
      this.$router.push(item.link)
    }
  }
}
</script>
```

### ToolCard - 工具卡片组件

用于工具列表页面的卡片展示。

#### 属性

| 属性名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| `tool` | Object | - | 工具数据对象（必需） |

#### 事件

| 事件名 | 参数 | 描述 |
|--------|------|------|
| `click` | Object | 点击卡片时触发 |

#### 示例

```vue
<template>
  <div class="tools-grid">
    <ToolCard 
      v-for="tool in tools"
      :key="tool.id"
      :tool="tool"
      @click="handleToolClick"
    />
  </div>
</template>

<script>
import ToolCard from '@/components/ToolCard.vue'

export default {
  components: {
    ToolCard
  },
  data() {
    return {
      tools: [
        {
          id: 'calculator',
          title: '科学计算器',
          description: '支持高级数学计算',
          icon: '🧮',
          iconBg: '#E3F2FD',
          iconColor: '#1976D2',
          category: 'calculator'
        }
      ]
    }
  },
  methods: {
    handleToolClick(tool) {
      this.$router.push(`/tools/${tool.id}`)
    }
  }
}
</script>
```

### ResourceCard - 资源卡片组件

用于作品列表页面的卡片展示。

#### 属性

| 属性名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| `project` | Object | - | 项目数据对象（必需） |

#### 事件

| 事件名 | 参数 | 描述 |
|--------|------|------|
| `click` | Object | 点击卡片时触发 |

#### 示例

```vue
<template>
  <div class="projects-grid">
    <ResourceCard 
      v-for="project in projects"
      :key="project.id"
      :project="project"
      @click="handleProjectClick"
    />
  </div>
</template>

<script>
import ResourceCard from '@/components/ResourceCard.vue'

export default {
  components: {
    ResourceCard
  },
  data() {
    return {
      projects: [
        {
          id: 'ai-code-assistant',
          title: 'AI代码助手',
          description: '基于GPT-4的编程自动化工具',
          icon: '🤖',
          imageBg: 'linear-gradient(135deg, #667eea, #764ba2)',
          stars: 128,
          forks: 32,
          views: 2048
        }
      ]
    }
  },
  methods: {
    handleProjectClick(project) {
      this.$router.push(`/works/${project.id}`)
    }
  }
}
</script>
```

### Chart - 图表组件

用于数据可视化展示。

#### 属性

| 属性名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| `data` | Object | - | 图表数据（必需） |
| `type` | String | `'bar'` | 图表类型：`bar`, `line`, `pie` |
| `options` | Object | `{}` | 图表配置选项 |

#### 示例

```vue
<template>
  <Chart 
    :data="chartData"
    type="bar"
    :options="chartOptions"
  />
</template>

<script>
import Chart from '@/components/Chart.vue'

export default {
  components: {
    Chart
  },
  data() {
    return {
      chartData: {
        labels: ['Vue.js', 'React', 'Angular', 'Svelte'],
        datasets: [{
          label: '项目数量',
          data: [45, 32, 28, 15],
          backgroundColor: ['#42b883', '#61dafb', '#dd0031', '#ff3e00']
        }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>
```

### Notification - 通知组件

用于显示全局通知消息。

#### 属性

| 属性名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| `show` | Boolean | `false` | 是否显示 |
| `title` | String | `''` | 通知标题 |
| `message` | String | `''` | 通知内容 |
| `type` | String | `'info'` | 通知类型：`success`, `error`, `warning`, `info` |
| `duration` | Number | `3000` | 显示时长（毫秒） |

#### 事件

| 事件名 | 参数 | 描述 |
|--------|------|------|
| `close` | - | 关闭通知时触发 |

#### 示例

```vue
<template>
  <Notification 
    :show="notification.show"
    :title="notification.title"
    :message="notification.message"
    :type="notification.type"
    @close="hideNotification"
  />
</template>

<script>
export default {
  data() {
    return {
      notification: {
        show: false,
        title: '',
        message: '',
        type: 'info'
      }
    }
  },
  methods: {
    showNotification(config) {
      this.notification = { ...config, show: true }
    },
    hideNotification() {
      this.notification.show = false
    }
  }
}
</script>
```

### LoadingSpinner - 加载动画组件

用于显示加载状态。

#### 属性

| 属性名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| `show` | Boolean | `false` | 是否显示 |
| `text` | String | `'加载中...'` | 加载文本 |

#### 示例

```vue
<template>
  <LoadingSpinner 
    :show="loading"
    text="正在加载数据..."
  />
</template>

<script>
import LoadingSpinner from '@/components/LoadingSpinner.vue'

export default {
  components: {
    LoadingSpinner
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    async loadData() {
      this.loading = true
      try {
        await this.fetchData()
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
```

## 工具函数

### 格式化函数

```javascript
import { formatNumber, formatDate } from '@/utils'

// 格式化数字
const formattedNumber = formatNumber(1234567) // "1,234,567"

// 格式化日期
const formattedDate = formatDate(new Date(), 'YYYY-MM-DD') // "2024-01-20"
```

### 存储工具

```javascript
import { storage } from '@/utils'

// 保存数据
storage.set('userInfo', { name: '开发者', email: 'dev@example.com' })

// 获取数据
const userInfo = storage.get('userInfo')

// 删除数据
storage.remove('userInfo')

// 清空所有数据
storage.clear()
```

### 通知工具

```javascript
import { notify } from '@/utils'

// 成功通知
notify.success('操作成功')

// 错误通知
notify.error('操作失败')

// 警告通知
notify.warning('请注意')

// 信息通知
notify.info('提示信息')
```

### 加载工具

```javascript
import { loading } from '@/utils'

// 显示加载
loading.show('正在处理...')

// 隐藏加载
loading.hide()
```

## 常量使用

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

// 使用通知类型
notify.success('成功', NOTIFICATION_TYPES.SUCCESS)

// 使用按钮类型
<AppButton type={BUTTON_TYPES.PRIMARY} text="确定" />

// 使用颜色
<div :style="{ color: COLORS.PRIMARY }">文本</div>
```

## 最佳实践

### 1. 组件命名

- 使用 PascalCase 命名组件
- 文件名与组件名保持一致
- 使用描述性的名称

### 2. 属性验证

```javascript
props: {
  title: {
    type: String,
    required: true,
    validator: (value) => value.length > 0
  }
}
```

### 3. 事件命名

- 使用 kebab-case 命名事件
- 事件名应该描述动作
- 提供有意义的事件参数

### 4. 样式隔离

- 使用 `scoped` 样式
- 避免全局样式污染
- 使用 CSS 变量保持一致性

### 5. 性能优化

- 合理使用 `v-if` 和 `v-show`
- 避免在模板中使用复杂表达式
- 使用 `computed` 属性缓存计算结果

### 6. 错误处理

```javascript
methods: {
  async handleAction() {
    try {
      this.loading = true
      await this.performAction()
      notify.success('操作成功')
    } catch (error) {
      notify.error('操作失败')
      console.error(error)
    } finally {
      this.loading = false
    }
  }
}
```

## 组件测试

### 单元测试示例

```javascript
import { mount } from '@vue/test-utils'
import AppButton from '@/components/AppButton.vue'

describe('AppButton', () => {
  it('renders button text correctly', () => {
    const wrapper = mount(AppButton, {
      props: {
        text: 'Click me'
      }
    })
    
    expect(wrapper.text()).toContain('Click me')
  })

  it('emits click event when clicked', () => {
    const wrapper = mount(AppButton, {
      props: {
        text: 'Click me'
      }
    })
    
    wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })
})
```

## 更新日志

### v1.0.0 (2024-01-20)
- 新增 PageHeader 组件
- 新增 StatsCard 组件
- 新增 ContentSection 组件
- 新增 AppButton 组件
- 新增 RatingStars 组件
- 完善工具函数库
- 添加常量配置
- 创建完整文档 