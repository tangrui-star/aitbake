<template>
  <div class="container">
    <!-- Main Content -->
    <div class="main-content">
      <!-- Section Title -->
      <h2 class="section-title">我的作品集</h2>
      
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

      <!-- Project Cards -->
      <div class="project-list">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="project-card" 
          @click="navigateToWorkDetail(project.id)"
        >
          <div class="project-image" :style="{ background: project.imageBg }"></div>
          <h3>{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-tags">
            <span 
              v-for="tag in project.tags" 
              :key="tag"
              class="tag"
              :style="{ background: tag.bg, color: tag.color }"
            >
              {{ tag.name }}
            </span>
          </div>
          <div class="project-links">
            <a href="#" style="color: #007AFF; text-decoration: none; font-size: 14px;">📦 GitHub源码</a>
            <a href="#" style="color: #007AFF; text-decoration: none; font-size: 14px;">🌐 在线演示</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Navigation -->
    <BottomNav />
  </div>
</template>

<script>
import BottomNav from '../components/BottomNav.vue'

export default {
  name: 'Works',
  components: {
    BottomNav
  },
  data() {
    return {
      selectedCategory: 'all',
      categories: [
        { id: 'all', name: '全部作品' },
        { id: 'web', name: 'Web应用' },
        { id: 'plugin', name: '工具插件' },
        { id: 'ai', name: 'AI工具' },
        { id: 'data', name: '数据可视化' }
      ],
      projects: [
        {
          id: 'ai-code-assistant',
          title: 'AI代码助手',
          description: '基于GPT-4的编程自动化工具,支持多语言代码生成、调试和优化,提供智能代码补全和重构建议。',
          imageBg: 'linear-gradient(135deg, #667eea, #764ba2)',
          category: 'ai',
          tags: [
            { name: 'React', bg: '#E3F2FD', color: '#1976D2' },
            { name: 'Node.js', bg: '#E8F5E8', color: '#388E3C' },
            { name: 'OpenAI API', bg: '#F3E5F5', color: '#7B1FA2' }
          ]
        },
        {
          id: 'figma-plugin',
          title: '智能Figma插件',
          description: '设计稿自动标注与组件化工具，支持智能布局分析和设计规范生成。',
          imageBg: 'linear-gradient(135deg, #f093fb, #f5576c)',
          category: 'plugin',
          tags: [
            { name: 'Figma API', bg: '#E3F2FD', color: '#1976D2' },
            { name: 'TypeScript', bg: '#E8F5E8', color: '#388E3C' },
            { name: 'UI/UX', bg: '#F3E5F5', color: '#7B1FA2' }
          ]
        },
        {
          id: 'data-visualization',
          title: '数据可视化平台',
          description: '基于ECharts的高级数据可视化解决方案，支持复杂图表和实时数据更新。',
          imageBg: 'linear-gradient(135deg, #4facfe, #00f2fe)',
          category: 'data',
          tags: [
            { name: 'Vue.js', bg: '#E3F2FD', color: '#1976D2' },
            { name: 'ECharts', bg: '#E8F5E8', color: '#388E3C' },
            { name: '数据可视化', bg: '#F3E5F5', color: '#7B1FA2' }
          ]
        },
        {
          id: 'web-dashboard',
          title: '管理后台系统',
          description: '现代化的企业级管理后台，支持多租户、权限管理和数据统计。',
          imageBg: 'linear-gradient(135deg, #667eea, #764ba2)',
          category: 'web',
          tags: [
            { name: 'Vue.js', bg: '#E3F2FD', color: '#1976D2' },
            { name: 'Element UI', bg: '#E8F5E8', color: '#388E3C' },
            { name: '后台管理', bg: '#F3E5F5', color: '#7B1FA2' }
          ]
        },
        {
          id: 'mobile-app',
          title: '移动端应用',
          description: '跨平台移动应用开发，支持iOS和Android双平台，采用React Native技术栈。',
          imageBg: 'linear-gradient(135deg, #f093fb, #f5576c)',
          category: 'web',
          tags: [
            { name: 'React Native', bg: '#E3F2FD', color: '#1976D2' },
            { name: '移动端', bg: '#E8F5E8', color: '#388E3C' },
            { name: '跨平台', bg: '#F3E5F5', color: '#7B1FA2' }
          ]
        }
      ]
    }
  },
  computed: {
    filteredProjects() {
      if (this.selectedCategory === 'all') {
        return this.projects
      }
      return this.projects.filter(project => project.category === this.selectedCategory)
    }
  },
  methods: {
    navigateToWorkDetail(workId) {
      this.$router.push(`/works/${workId}`)
    },
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
}

.project-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.project-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.project-card:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.project-card h3 {
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: bold;
}

.project-description {
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
  line-height: 1.5;
}

.project-image {
  height: 160px;
  border-radius: 12px;
  margin-bottom: 16px;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.tag {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
}

.project-links {
  display: flex;
  gap: 16px;
}
</style> 