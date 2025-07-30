<template>
  <div class="page-header">
    <div class="back-button" @click="goBack">
      <span>‹</span>
    </div>
    <div class="header-title">{{ title }}</div>
    <div class="header-actions" v-if="actions && actions.length">
      <button 
        v-for="action in actions" 
        :key="action.key"
        class="action-btn" 
        @click="action.handler"
        :title="action.title"
      >
        <span :class="action.iconClass">{{ action.icon }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    actions: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: white;
  border-bottom: 1px solid #f0f0f0;
}

.back-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s;
}

.back-button:hover {
  background: white;
  transform: scale(1.1);
}

.header-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.header-actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s;
}

.action-btn:hover {
  background: white;
  transform: scale(1.1);
}
</style> 