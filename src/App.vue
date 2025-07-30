<template>
  <div id="app">
    <router-view />
    <Notification 
      :show="notification.show"
      :title="notification.title"
      :message="notification.message"
      :type="notification.type"
      @close="hideNotification"
    />
    <LoadingSpinner 
      :show="loading.show"
      :text="loading.text"
    />
  </div>
</template>

<script>
import Notification from './components/Notification.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'

export default {
  name: 'App',
  components: {
    Notification,
    LoadingSpinner
  },
  data() {
    return {
      notification: {
        show: false,
        title: '',
        message: '',
        type: 'info'
      },
      loading: {
        show: false,
        text: '加载中...'
      }
    }
  },
  mounted() {
    // 全局通知方法
    this.$notify = this.showNotification
    // 全局加载方法
    this.$loading = this.showLoading
    this.$hideLoading = this.hideLoading
    
    // 示例：显示欢迎通知
    setTimeout(() => {
      this.showNotification({
        title: '欢迎使用 CodeLab.Me',
        message: '开发者工具平台已准备就绪！',
        type: 'success'
      })
    }, 1000)
  },
  methods: {
    showNotification({ title, message, type = 'info', duration = 3000 }) {
      this.notification = {
        show: true,
        title,
        message,
        type
      }
      
      // 自动隐藏
      setTimeout(() => {
        this.hideNotification()
      }, duration)
    },
    
    hideNotification() {
      this.notification.show = false
    },
    
    showLoading(text = '加载中...') {
      this.loading.text = text
      this.loading.show = true
    },
    
    hideLoading() {
      this.loading.show = false
    }
  }
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f5f5f5;
}
</style> 