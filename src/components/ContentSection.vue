<template>
  <div class="content-section">
    <h3 v-if="title" class="section-title">{{ title }}</h3>
    <div class="section-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentSection',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.content-section {
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;
}

.section-content {
  /* 内容区域样式 */
}
</style> 