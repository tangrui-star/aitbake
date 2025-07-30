<template>
  <div class="chart-container">
    <div class="chart-header">
      <h3>项目数据分析</h3>
      <div class="time-filters">
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
    
    <!-- 数据概览 -->
    <div class="stats-overview">
      <div class="stat-item">
        <div class="stat-value">{{ totalVisits }}</div>
        <div class="stat-label">总访问量</div>
        <div class="stat-change positive">+{{ visitsGrowth }}%</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">{{ totalDownloads }}</div>
        <div class="stat-label">总下载量</div>
        <div class="stat-change positive">+{{ downloadsGrowth }}%</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">{{ conversionRate }}%</div>
        <div class="stat-label">转化率</div>
        <div class="stat-change negative">{{ conversionChange }}%</div>
      </div>
    </div>
    
    <div class="chart-content">
      <div class="chart-legend">
        <div class="legend-item">
          <div class="legend-color" style="background: #FF6B35;"></div>
          <span>访问量</span>
        </div>
        <div class="legend-item">
          <div class="legend-color" style="background: #007AFF;"></div>
          <span>下载量</span>
        </div>
      </div>
      <div class="chart-bars">
        <div 
          class="bar-group" 
          v-for="(item, index) in chartData" 
          :key="index"
          @mouseenter="showTooltip(item, $event)"
          @mouseleave="hideTooltip"
        >
          <div class="bar-label">{{ item.day }}</div>
          <div class="bar-container">
            <div class="bar bar-orange" :style="{ height: Math.min(item.visits * 1.5, 80) + 'px' }"></div>
            <div class="bar bar-blue" :style="{ height: Math.min(item.downloads * 1.5, 80) + 'px' }"></div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 工具提示 -->
    <div v-if="tooltip.show" class="tooltip" :style="tooltip.style">
      <div class="tooltip-content">
        <div class="tooltip-date">{{ tooltip.data.day }}日</div>
        <div class="tooltip-item">
          <span>访问量: {{ tooltip.data.visits }}</span>
        </div>
        <div class="tooltip-item">
          <span>下载量: {{ tooltip.data.downloads }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chart',
  data() {
    return {
      selectedPeriod: 'week',
      timePeriods: [
        { label: '今日', value: 'today' },
        { label: '本周', value: 'week' },
        { label: '本月', value: 'month' },
        { label: '本年', value: 'year' }
      ],
      chartData: [
        { day: '01', visits: 15, downloads: 25 },
        { day: '05', visits: 25, downloads: 35 },
        { day: '10', visits: 35, downloads: 45 },
        { day: '15', visits: 45, downloads: 55 },
        { day: '20', visits: 55, downloads: 65 },
        { day: '25', visits: 65, downloads: 75 },
        { day: '30', visits: 75, downloads: 85 }
      ],
      tooltip: {
        show: false,
        data: {},
        style: {}
      }
    }
  },
  computed: {
    totalVisits() {
      return this.chartData.reduce((sum, item) => sum + item.visits, 0)
    },
    totalDownloads() {
      return this.chartData.reduce((sum, item) => sum + item.downloads, 0)
    },
    conversionRate() {
      return this.totalVisits > 0 ? Math.round((this.totalDownloads / this.totalVisits) * 100) : 0
    },
    visitsGrowth() {
      return Math.round(Math.random() * 20 + 10)
    },
    downloadsGrowth() {
      return Math.round(Math.random() * 15 + 8)
    },
    conversionChange() {
      return Math.round(Math.random() * 10 - 5)
    }
  },
  methods: {
    selectPeriod(period) {
      this.selectedPeriod = period
      this.updateChartData()
    },
    
    updateChartData() {
      // 根据选择的时间段更新数据
      const periods = {
        today: 7,
        week: 7,
        month: 30,
        year: 12
      }
      
      const count = periods[this.selectedPeriod]
      this.chartData = Array.from({ length: count }, (_, i) => ({
        day: String(i + 1).padStart(2, '0'),
        visits: Math.floor(Math.random() * 50 + 10),
        downloads: Math.floor(Math.random() * 30 + 5)
      }))
    },
    
    showTooltip(item, event) {
      const rect = event.target.getBoundingClientRect()
      this.tooltip = {
        show: true,
        data: item,
        style: {
          left: rect.left + rect.width / 2 + 'px',
          top: rect.top - 80 + 'px'
        }
      }
    },
    
    hideTooltip() {
      this.tooltip.show = false
    }
  }
}
</script>

<style scoped>
.chart-container {
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.chart-header h3 {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}

.time-filters {
  display: flex;
  gap: 8px;
}

.time-filters button {
  padding: 4px 8px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.3s;
}

.time-filters button.active {
  background: #007AFF;
  color: white;
  border-color: #007AFF;
}

.stats-overview {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 20px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
}

.stat-item {
  text-align: center;
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

.chart-content {
  height: 200px;
}

.chart-legend {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #666;
}

.legend-color {
  width: 12px;
  height: 12px;
  border-radius: 2px;
}

.chart-bars {
  display: flex;
  justify-content: space-between;
  align-items: end;
  height: 120px;
  padding: 0 10px;
  position: relative;
}

.bar-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.bar-label {
  font-size: 10px;
  color: #666;
  margin-bottom: 8px;
}

.bar-container {
  display: flex;
  gap: 2px;
  width: 100%;
  max-width: 24px;
  height: 100px;
  align-items: end;
}

.bar {
  flex: 1;
  border-radius: 3px;
  min-height: 6px;
  transition: height 0.3s ease;
  max-height: 100px;
}

.bar-orange {
  background: #FF6B35;
}

.bar-blue {
  background: #007AFF;
}

.tooltip {
  position: fixed;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  pointer-events: none;
  transform: translateX(-50%);
}

.tooltip-content {
  white-space: nowrap;
}

.tooltip-date {
  font-weight: 600;
  margin-bottom: 4px;
}

.tooltip-item {
  margin-bottom: 2px;
}

@media (max-width: 768px) {
  .stats-overview {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .time-filters {
    flex-wrap: wrap;
  }
}
</style> 