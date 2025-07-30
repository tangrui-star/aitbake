<template>
  <div v-if="show" class="loading-overlay">
    <div class="loading-spinner">
      <div class="spinner"></div>
      <div class="loading-text">{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: '加载中...'
    }
  }
}
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loading-spinner {
  background: white;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #007AFF;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 12px;
}

.loading-text {
  color: #666;
  font-size: 14px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style> 