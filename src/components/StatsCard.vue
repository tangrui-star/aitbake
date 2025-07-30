<template>
  <div class="stats-card">
    <div class="stat-item" v-for="stat in stats" :key="stat.label">
      <div class="stat-value">{{ stat.value }}</div>
      <div class="stat-label">{{ stat.label }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatsCard',
  props: {
    stats: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every(stat => 
          typeof stat.value !== 'undefined' && 
          typeof stat.label === 'string'
        )
      }
    }
  }
}
</script>

<style scoped>
.stats-card {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 16px;
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: 24px;
  font-weight: 600;
  color: #007AFF;
}

.stat-label {
  font-size: 14px;
  color: #666;
  margin-top: 4px;
}
</style> 