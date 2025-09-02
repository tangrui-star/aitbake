<template>
  <div class="container">
    <div class="main-content">
      <h2 class="section-title">视口测试页面</h2>
      
      <!-- 视口信息显示 -->
      <div class="card">
        <h3>当前视口信息</h3>
        <div class="info-item">
          <span class="label">屏幕宽度:</span>
          <span class="value">{{ viewportInfo.width }}px</span>
        </div>
        <div class="info-item">
          <span class="label">屏幕高度:</span>
          <span class="value">{{ viewportInfo.height }}px</span>
        </div>
        <div class="info-item">
          <span class="label">是否为移动设备:</span>
          <span class="value">{{ viewportInfo.isMobile ? '是' : '否' }}</span>
        </div>
        <div class="info-item">
          <span class="label">是否为微信浏览器:</span>
          <span class="value">{{ viewportInfo.isWeChat ? '是' : '否' }}</span>
        </div>
        <div class="info-item">
          <span class="label">操作系统:</span>
          <span class="value">{{ getOSName() }}</span>
        </div>
      </div>
      
      <!-- 安全区域信息 -->
      <div class="card">
        <h3>安全区域信息</h3>
        <div class="info-item">
          <span class="label">顶部安全区域:</span>
          <span class="value">{{ viewportInfo.safeAreaInsets.top }}px</span>
        </div>
        <div class="info-item">
          <span class="label">底部安全区域:</span>
          <span class="value">{{ viewportInfo.safeAreaInsets.bottom }}px</span>
        </div>
        <div class="info-item">
          <span class="label">左侧安全区域:</span>
          <span class="value">{{ viewportInfo.safeAreaInsets.left }}px</span>
        </div>
        <div class="info-item">
          <span class="label">右侧安全区域:</span>
          <span class="value">{{ viewportInfo.safeAreaInsets.right }}px</span>
        </div>
      </div>
      
      <!-- 测试区域 -->
      <div class="card">
        <h3>滚动测试区域</h3>
        <p>请尝试滚动页面，观察地址栏是否会影响布局。</p>
        <div class="test-content">
          <div v-for="i in 20" :key="i" class="test-item">
            测试内容 {{ i }} - 这是一个测试项目，用于验证滚动行为
          </div>
        </div>
      </div>
      
      <!-- 操作按钮 -->
      <div class="card">
        <h3>测试操作</h3>
        <button class="btn btn-primary" @click="refreshViewportInfo">刷新视口信息</button>
        <button class="btn btn-secondary" @click="testNotification">测试通知</button>
      </div>
    </div>
    
    <BottomNav />
  </div>
</template>

<script>
import BottomNav from '../components/BottomNav.vue'
import { getViewportInfo } from '../utils/viewport.js'

export default {
  name: 'ViewportTest',
  components: {
    BottomNav
  },
  data() {
    return {
      viewportInfo: {
        width: 0,
        height: 0,
        isMobile: false,
        isWeChat: false,
        isIOS: false,
        isAndroid: false,
        safeAreaInsets: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      }
    }
  },
  mounted() {
    this.refreshViewportInfo()
    
    // 监听窗口大小变化
    window.addEventListener('resize', this.refreshViewportInfo)
    window.addEventListener('orientationchange', this.refreshViewportInfo)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.refreshViewportInfo)
    window.removeEventListener('orientationchange', this.refreshViewportInfo)
  },
  methods: {
    refreshViewportInfo() {
      this.viewportInfo = getViewportInfo()
    },
    
    getOSName() {
      if (this.viewportInfo.isIOS) return 'iOS'
      if (this.viewportInfo.isAndroid) return 'Android'
      return '其他'
    },
    
    testNotification() {
      this.$notify({
        title: '测试通知',
        message: '这是一个测试通知，用于验证通知系统是否正常工作。',
        type: 'success'
      })
    }
  }
}
</script>

<style scoped>
.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
}

.info-item:last-child {
  border-bottom: none;
}

.label {
  font-weight: 500;
  color: #666;
}

.value {
  color: #007AFF;
  font-weight: bold;
}

.test-content {
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
}

.test-item {
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
  color: #666;
}

.test-item:last-child {
  border-bottom: none;
}

.btn {
  margin-right: 12px;
  margin-bottom: 12px;
}
</style>
