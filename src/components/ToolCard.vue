<template>
  <div class="tool-card" @click="navigateToToolDetail">
    <div class="tool-icon" :style="{ background: iconBg, color: iconColor }">
      {{ icon }}
    </div>
    <h4>{{ title }}</h4>
    <p>{{ description }}</p>
    <button class="btn btn-primary" style="width: 100%;" @click.stop="openTool">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  name: 'ToolCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    iconBg: {
      type: String,
      default: '#E3F2FD'
    },
    iconColor: {
      type: String,
      default: '#1976D2'
    },
    buttonText: {
      type: String,
      default: '打开工具'
    }
  },
  methods: {
    navigateToToolDetail() {
      // 根据工具标题生成ID
      const toolId = this.title.toLowerCase().replace(/\s+/g, '-')
      this.$router.push(`/tools/${toolId}`)
    },
    openTool() {
      // 直接打开工具功能
      if (this.$notify) {
        this.$notify({
          title: '工具启动',
          message: `${this.title} 正在启动中...`,
          type: 'success'
        })
      }
    }
  }
}
</script>

<style scoped>
.tool-card {
  background: white;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  height: 200px;
}

.tool-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.tool-card h4 {
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
  flex-shrink: 0;
}

.tool-card p {
  line-height: 1.4;
  font-size: 12px;
  color: #666;
  margin-bottom: 16px;
  flex: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.tool-card .btn {
  margin-top: auto;
  flex-shrink: 0;
}

.tool-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 12px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}
</style> 