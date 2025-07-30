<template>
  <transition name="notification">
    <div v-if="show" class="notification" :class="type">
      <div class="notification-icon">
        {{ icon }}
      </div>
      <div class="notification-content">
        <div class="notification-title">{{ title }}</div>
        <div class="notification-message">{{ message }}</div>
      </div>
      <button class="notification-close" @click="close">
        ×
      </button>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info',
      validator: value => ['success', 'error', 'warning', 'info'].includes(value)
    },
    duration: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      timer: null
    }
  },
  computed: {
    icon() {
      const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
      }
      return icons[this.type] || icons.info
    }
  },
  watch: {
    show(newVal) {
      if (newVal && this.duration > 0) {
        this.startTimer()
      }
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    startTimer() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.close()
      }, this.duration)
    }
  },
  beforeUnmount() {
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }
}
</script>

<style scoped>
.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 300px;
  max-width: 400px;
  background: white;
  border-left: 4px solid;
}

.notification.success {
  border-left-color: #4CAF50;
}

.notification.error {
  border-left-color: #f44336;
}

.notification.warning {
  border-left-color: #FF9800;
}

.notification.info {
  border-left-color: #2196F3;
}

.notification-icon {
  font-size: 20px;
  margin-right: 12px;
  flex-shrink: 0;
}

.notification-content {
  flex: 1;
  min-width: 0;
}

.notification-title {
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
  font-size: 14px;
}

.notification-message {
  color: #666;
  font-size: 12px;
  line-height: 1.4;
}

.notification-close {
  background: none;
  border: none;
  font-size: 18px;
  color: #999;
  cursor: pointer;
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  flex-shrink: 0;
}

.notification-close:hover {
  color: #666;
}

.notification-enter-active,
.notification-leave-active {
  transition: all 0.3s ease;
}

.notification-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.notification-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

@media (max-width: 768px) {
  .notification {
    left: 20px;
    right: 20px;
    min-width: auto;
    max-width: none;
  }
}
</style> 