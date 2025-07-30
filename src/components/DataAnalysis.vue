<template>
  <div class="data-analysis">
    <div class="analysis-header">
      <h3>项目数据分析</h3>
      <div class="time-filter">
        <button 
          v-for="period in timePeriods" 
          :key="period.value"
          :class="{ active: selectedPeriod === period.value }"
          @click="selectPeriod(period.value)"
        >
          {{ period.label }}
        </button>
      </div>
    </div>
    
    <!-- 数据概览卡片 -->
    <div class="stats-grid">
      <div class="stat-card" v-for="stat in stats" :key="stat.label">
        <div class="stat-icon" :style="{ backgroundColor: stat.color }">
          {{ stat.icon }}
        </div>
        <div class="stat-content">
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
          <div class="stat-change" :class="{ positive: stat.change > 0, negative: stat.change < 0 }">
            {{ stat.change > 0 ? '+' : '' }}{{ stat.change }}%
          </div>
        </div>
      </div>
    </div>
    
    <!-- 热门项目排行 -->
    <div class="ranking-section">
      <h4>热门项目排行</h4>
      <div class="ranking-list">
        <div 
          v-for="(project, index) in topProjects" 
          :key="project.id"
          class="ranking-item"
        >
          <div class="ranking-number" :class="{ top3: index < 3 }">{{ index + 1 }}</div>
          <div class="project-info">
            <div class="project-name">{{ project.name }}</div>
            <div class="project-stats">
              <span>{{ project.visits }} 访问</span>
              <span>{{ project.downloads }} 下载</span>
            </div>
          </div>
          <div class="project-trend">
            <span class="trend-arrow" :class="{ up: project.trend > 0, down: project.trend < 0 }">
              {{ project.trend > 0 ? '↗' : '↘' }}
            </span>
            {{ Math.abs(project.trend) }}%
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataAnalysis',
  data() {
    return {
      selectedPeriod: 'week',
      timePeriods: [
        { label: '今日', value: 'today' },
        { label: '本周', value: 'week' },
        { label: '本月', value: 'month' },
        { label: '本年', value: 'year' }
      ],
      stats: [
        { label: '总访问量', value: '12,847', change: 12.5, icon: '👁️', color: '#4CAF50' },
        { label: '总下载量', value: '3,291', change: 8.2, icon: '⬇️', color: '#2196F3' },
        { label: '活跃用户', value: '1,234', change: -2.1, icon: '👥', color: '#FF9800' },
        { label: '转化率', value: '25.6%', change: 5.3, icon: '📈', color: '#9C27B0' }
      ],
      topProjects: [
        { id: 1, name: '智能Figma插件', visits: 2847, downloads: 892, trend: 15.2 },
        { id: 2, name: 'Vue3组件库', visits: 2156, downloads: 654, trend: 8.7 },
        { id: 3, name: 'React工具集', visits: 1892, downloads: 521, trend: -3.1 },
        { id: 4, name: 'Python数据分析', visits: 1654, downloads: 432, trend: 12.4 },
        { id: 5, name: '移动端UI框架', visits: 1432, downloads: 398, trend: 6.8 }
      ]
    }
  },
  methods: {
    selectPeriod(period) {
      this.selectedPeriod = period
      this.updateData()
    },
    
    updateData() {
      // 模拟数据更新
      this.stats.forEach(stat => {
        stat.change = (Math.random() - 0.5) * 20
        stat.value = Math.floor(Math.random() * 10000).toLocaleString()
      })
      
      this.topProjects.forEach(project => {
        project.visits = Math.floor(Math.random() * 3000) + 1000
        project.downloads = Math.floor(Math.random() * 500) + 200
        project.trend = (Math.random() - 0.5) * 20
      })
    }
  }
}
</script>

<style scoped>
.data-analysis {
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.analysis-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.analysis-header h3 {
  margin: 0;
  color: #333;
}

.time-filter {
  display: flex;
  gap: 8px;
}

.time-filter button {
  padding: 6px 12px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.3s;
}

.time-filter button.active {
  background: #4CAF50;
  color: white;
  border-color: #4CAF50;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.stat-card {
  display: flex;
  align-items: center;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid;
}

.stat-card:nth-child(1) { border-left-color: #4CAF50; }
.stat-card:nth-child(2) { border-left-color: #2196F3; }
.stat-card:nth-child(3) { border-left-color: #FF9800; }
.stat-card:nth-child(4) { border-left-color: #9C27B0; }

.stat-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin-right: 12px;
}

.stat-content {
  flex: 1;
}

.stat-value {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 12px;
  color: #666;
  margin-bottom: 4px;
}

.stat-change {
  font-size: 12px;
  font-weight: 500;
}

.stat-change.positive {
  color: #4CAF50;
}

.stat-change.negative {
  color: #f44336;
}

.ranking-section h4 {
  margin: 0 0 16px 0;
  color: #333;
  font-size: 16px;
}

.ranking-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.ranking-item {
  display: flex;
  align-items: center;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
  transition: transform 0.2s;
}

.ranking-item:hover {
  transform: translateY(-2px);
}

.ranking-number {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ddd;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  margin-right: 12px;
}

.ranking-number.top3 {
  background: #FFD700;
  color: #333;
}

.project-info {
  flex: 1;
}

.project-name {
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
}

.project-stats {
  font-size: 12px;
  color: #666;
}

.project-stats span {
  margin-right: 12px;
}

.project-trend {
  font-size: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
}

.trend-arrow.up {
  color: #4CAF50;
}

.trend-arrow.down {
  color: #f44336;
}

@media (max-width: 768px) {
  .analysis-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style> 