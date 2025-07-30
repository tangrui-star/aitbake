<template>
  <div class="container">
    <!-- Main Content -->
    <div class="main-content">
      <!-- Banner Carousel -->
      <Carousel :items="carouselItems" :autoplay="true" :interval="4000" />

      <!-- Featured Works -->
      <div class="section-header">
        <h3 class="section-title">精选作品</h3>
        <router-link to="/works" style="color: #007AFF; text-decoration: none; font-size: 14px;">查看全部</router-link>
      </div>
      
      <div class="featured-works">
        <div 
          v-for="work in featuredWorks" 
          :key="work.id"
          class="work-card" 
          @click="navigateToWorkDetail(work.id)"
        >
          <div class="work-image" :style="{ background: work.imageBg }"></div>
          <h4>{{ work.title }}</h4>
          <p style="font-size: 12px; color: #666; margin-bottom: 12px;">{{ work.description }}</p>
          <a :href="work.githubLink" style="color: #007AFF; text-decoration: none; font-size: 12px;">📦 GitHub源码</a>
        </div>
      </div>

      <!-- Tool Center -->
      <div class="section-header">
        <h3 class="section-title">工具中心</h3>
        <router-link to="/tools" style="color: #007AFF; text-decoration: none; font-size: 14px;">查看全部</router-link>
      </div>
      <div class="grid">
        <div 
          v-for="tool in featuredTools" 
          :key="tool.id"
          class="tool-card" 
          @click="navigateToToolDetail(tool.id)"
        >
          <div class="tool-icon" :style="{ background: tool.iconBg, color: tool.iconColor }">{{ tool.icon }}</div>
          <h4>{{ tool.title }}</h4>
        </div>
      </div>

      <!-- Project Data Analysis -->
      <Chart />

      <!-- Hot Code Resources -->
      <div class="section-header">
        <h3 class="section-title">热门代码资源</h3>
        <router-link to="/works" style="color: #007AFF; text-decoration: none; font-size: 14px;">全部资源</router-link>
      </div>
      
      <ResourceCard 
        title="高端UI组件库"
        description="包含50+行业领先的React组件,支持主题定制"
        :price="38"
        emoji="🎨"
        imageBg="linear-gradient(135deg, #667eea, #764ba2)"
      />
      
      <ResourceCard 
        title="高级图表组件库"
        description="ECharts高级封装,支持复杂数据可视化"
        :price="25"
        emoji="📊"
        imageBg="linear-gradient(135deg, #4facfe, #00f2fe)"
      />
    </div>

    <!-- Bottom Navigation -->
    <BottomNav />
  </div>
</template>

<script>
import BottomNav from '../components/BottomNav.vue'
import Chart from '../components/Chart.vue'
import ResourceCard from '../components/ResourceCard.vue'
import Carousel from '../components/Carousel.vue'

export default {
  name: 'Home',
  components: {
    BottomNav,
    Chart,
    ResourceCard,
    Carousel
  },
  data() {
    return {
      carouselItems: [
        {
          title: '数据可视化工具',
          description: '轻松打造专业数据分析报表',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
          link: '/works/data-visualization'
        },
        {
          title: 'AI代码助手',
          description: '基于GPT-4的智能编程助手',
          image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=200&fit=crop',
          link: '/works/ai-code-assistant'
        },
        {
          title: '智能Figma插件',
          description: '设计稿自动标注与组件管理',
          image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop',
          link: '/works/figma-plugin'
        }
      ],
      featuredWorks: [
        {
          id: 'ai-code-assistant',
          title: 'AI代码助手',
          description: '基于GPT-4的编程自...',
          imageBg: 'linear-gradient(135deg, #667eea, #764ba2)',
          githubLink: '#'
        },
        {
          id: 'figma-plugin',
          title: '智能Figma插件',
          description: '设计稿自动标注与组件...',
          imageBg: 'linear-gradient(135deg, #f093fb, #f5576c)',
          githubLink: '#'
        }
      ],
      featuredTools: [
        {
          id: 'calculator',
          title: '科学计算器',
          icon: '🧮',
          iconBg: '#E3F2FD',
          iconColor: '#1976D2'
        },
        {
          id: 'json-formatter',
          title: 'JSON格式化',
          icon: '{}',
          iconBg: '#E8F5E8',
          iconColor: '#388E3C'
        },
        {
          id: 'code-converter',
          title: '代码转换器',
          icon: '{}',
          iconBg: '#FFF3E0',
          iconColor: '#F57C00'
        },
        {
          id: 'ai-creator',
          title: 'AI创作',
          icon: '🤖',
          iconBg: '#F3E5F5',
          iconColor: '#7B1FA2'
        }
      ]
    }
  },
  methods: {
    navigateToWorks() {
      this.$router.push('/works')
    },
    navigateToTools() {
      this.$router.push('/tools')
    },
    navigateToWorkDetail(workId) {
      this.$router.push(`/works/${workId}`)
    },
    navigateToToolDetail(toolId) {
      this.$router.push(`/tools/${toolId}`)
    }
  }
}
</script>

<style scoped>
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.featured-works {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 32px;
}

.work-card {
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.work-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.work-card:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.work-card h4 {
  margin-bottom: 8px;
  font-size: 16px;
}

.tool-card {
  background: white;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.tool-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.tool-card:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.tool-card h4 {
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
}

.tool-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 12px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.work-image {
  height: 120px;
  border-radius: 12px;
  margin-bottom: 12px;
}
</style> 