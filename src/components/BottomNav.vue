<template>
  <div class="bottom-nav">
    <router-link to="/" class="nav-item" :class="{ active: $route.path === '/' }">
      <div class="icon">🏠</div>
      <div class="label">首页</div>
    </router-link>
    <router-link to="/works" class="nav-item" :class="{ active: $route.path === '/works' }">
      <div class="icon">📦</div>
      <div class="label">作品</div>
    </router-link>
    <router-link to="/tools" class="nav-item" :class="{ active: $route.path === '/tools' }">
      <div class="icon">🔧</div>
      <div class="label">工具</div>
    </router-link>
    <router-link to="/contact" class="nav-item" :class="{ active: $route.path === '/contact' }">
      <div class="icon">👤</div>
      <div class="label">联系</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'BottomNav'
}
</script>

<style scoped>
.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  transition: color 0.3s ease;
  text-decoration: none;
  color: #666;
}

.nav-item.active {
  color: #007AFF;
}

.nav-item .icon {
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
}

.nav-item .label {
  font-size: 12px;
}
</style> 