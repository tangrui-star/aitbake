<template>
  <div class="container">
    <!-- Main Content -->
    <div class="main-content">
      <!-- Section Title -->
      <h2 class="section-title">开发工具中心</h2>
      
      <!-- Category Tabs -->
      <div class="category-tabs-container">
        <div class="category-tabs">
          <button 
            v-for="category in categories" 
            :key="category.id"
            class="category-tab"
            :class="{ active: selectedCategory === category.id }"
            @click="selectCategory(category.id)"
          >
            {{ category.name }}
          </button>
        </div>
      </div>

      <!-- Tool Grid -->
      <div class="tool-grid">
        <ToolCard 
          v-for="tool in filteredTools"
          :key="tool.id"
          :title="tool.title"
          :description="tool.description"
          :icon="tool.icon"
          :iconBg="tool.iconBg"
          :iconColor="tool.iconColor"
        />
      </div>
    </div>

    <!-- Bottom Navigation -->
    <BottomNav />
  </div>
</template>

<script>
import BottomNav from '../components/BottomNav.vue'
import ToolCard from '../components/ToolCard.vue'

export default {
  name: 'Tools',
  components: {
    BottomNav,
    ToolCard
  },
  data() {
    return {
      selectedCategory: 'all',
      categories: [
        { id: 'all', name: '所有工具' },
        { id: 'code', name: '代码工具' },
        { id: 'data', name: '数据处理' },
        { id: 'design', name: '设计工具' },
        { id: 'ai', name: 'AI工具' }
      ],
      tools: [
        {
          id: 1,
          title: '科学计算器',
          description: '支持高级数学计算, 包括矩阵运算、微积分和方程求解',
          icon: '🧮',
          iconBg: '#E3F2FD',
          iconColor: '#1976D2',
          category: 'code'
        },
        {
          id: 2,
          title: 'JSON格式化',
          description: 'JSON数据美化、压缩、验证和转换, 支持多种格式导出',
          icon: '{}',
          iconBg: '#E8F5E8',
          iconColor: '#388E3C',
          category: 'data'
        },
        {
          id: 3,
          title: '代码转换器',
          description: '在不同编程语言之间转换代码, 支持语法高亮和错误检查',
          icon: '{}',
          iconBg: '#FFF3E0',
          iconColor: '#F57C00',
          category: 'code'
        },
        {
          id: 4,
          title: 'AI创作',
          description: '智能内容生成工具, 支持代码、文案、图表等多种类型创作',
          icon: '🤖',
          iconBg: '#F3E5F5',
          iconColor: '#7B1FA2',
          category: 'ai'
        },
        {
          id: 5,
          title: '图像优化器',
          description: '网页图片批量压缩与优化，支持多种格式转换',
          icon: '🖼️',
          iconBg: '#FFF8E1',
          iconColor: '#F57F17',
          category: 'design'
        },
        {
          id: 6,
          title: '性能分析',
          description: '网站与应用性能测试，提供详细的性能报告',
          icon: '📊',
          iconBg: '#FFEBEE',
          iconColor: '#D32F2F',
          category: 'data'
        },
        {
          id: 7,
          title: '加密工具',
          description: '支持多种加密算法，提供安全的密码生成和加密服务',
          icon: '🔒',
          iconBg: '#E0F2F1',
          iconColor: '#00695C',
          category: 'code'
        },
        {
          id: 8,
          title: 'Markdown编辑器',
          description: '实时预览的Markdown编辑器，支持语法高亮和导出',
          icon: '📝',
          iconBg: '#F1F8E9',
          iconColor: '#689F38',
          category: 'code'
        }
      ]
    }
  },
  computed: {
    filteredTools() {
      if (this.selectedCategory === 'all') {
        return this.tools
      }
      return this.tools.filter(tool => tool.category === this.selectedCategory)
    }
  },
  methods: {
    selectCategory(categoryId) {
      this.selectedCategory = categoryId
      
      // 显示通知
      if (this.$notify) {
        this.$notify({
          title: '分类切换',
          message: `已切换到${this.categories.find(c => c.id === categoryId).name}`,
          type: 'info'
        })
      }
    }
  }
}
</script>

<style scoped>
.category-tabs-container {
  margin-bottom: 24px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.category-tabs-container::-webkit-scrollbar {
  height: 4px;
}

.category-tabs-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 2px;
}

.category-tabs-container::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 2px;
}

.category-tabs-container::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

.category-tabs {
  display: flex;
  gap: 12px;
  padding: 4px 0;
  min-width: max-content;
}

.category-tab {
  padding: 8px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  background: white;
  color: #666;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.category-tab:hover {
  border-color: #007AFF;
  color: #007AFF;
}

.category-tab.active {
  background: #007AFF;
  color: white;
  border-color: #007AFF;
  transform: scale(1.05);
}

.tool-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
</style> 