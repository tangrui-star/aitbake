<template>
  <div class="resource-card">
    <div class="resource-image" :style="{ background: imageBg }">
      {{ emoji }}
    </div>
    <div class="resource-content">
      <div class="resource-title">{{ title }}</div>
      <div class="resource-description">{{ description }}</div>
      <div class="resource-price">¥{{ price }}</div>
    </div>
    <button class="resource-btn">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  name: 'ResourceCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    emoji: {
      type: String,
      default: '📦'
    },
    imageBg: {
      type: String,
      default: 'linear-gradient(135deg, #667eea, #764ba2)'
    },
    buttonText: {
      type: String,
      default: '下载源码'
    }
  }
}
</script>

<style scoped>
.resource-card {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.resource-image {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
}

.resource-content {
  flex: 1;
}

.resource-title {
  font-weight: bold;
  margin-bottom: 4px;
  font-size: 16px;
}

.resource-description {
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
  line-height: 1.4;
}

.resource-price {
  color: #FF6B35;
  font-weight: bold;
  font-size: 18px;
}

.resource-btn {
  padding: 8px 16px;
  background: #007AFF;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  white-space: nowrap;
}
</style> 