<template>
  <div class="container">
    <!-- Main Content -->
    <div class="main-content">
      <!-- Profile Section -->
      <div class="profile-section">
        <div class="avatar">👨‍💻</div>
        <h2>tangrui</h2>
        <div class="title-tag">AI工具开发者 & 全栈工程师</div>
        <p style="color: #666; line-height: 1.6; margin-bottom: 24px;">
          专注AI工具开发与创新应用,打造提升效率的开发者工具
        </p>
      </div>

      <!-- Contact Information -->
      <div class="contact-section">
        <div class="contact-info">
          <div class="contact-icon">📍</div>
          <span>四川省成都市</span>
        </div>
        <div class="contact-info">
          <div class="contact-icon">📧</div>
          <span>zhang.ming@example.com</span>
        </div>
        <div class="contact-info">
          <div class="contact-icon">🌐</div>
          <span>codelab.me</span>
        </div>
      </div>

      <!-- Professional Skills -->
      <div class="skills-section">
        <h3 class="section-title">专业技能</h3>
        <div class="skill-item">
          <span class="skill-name">前端开发</span>
          <span class="skill-percentage">92%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: 92%;"></div>
        </div>

        <div class="skill-item">
          <span class="skill-name">后端开发</span>
          <span class="skill-percentage">85%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: 85%;"></div>
        </div>

        <div class="skill-item">
          <span class="skill-name">AI开发</span>
          <span class="skill-percentage">80%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: 80%;"></div>
        </div>

        <div class="skill-item">
          <span class="skill-name">UI/UX设计</span>
          <span class="skill-percentage">75%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: 75%;"></div>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="additional-info">
        <h3 class="section-title">关于我</h3>
        <p style="color: #666; line-height: 1.6; margin-bottom: 16px;">
          我是一名充满激情的全栈开发者，专注于AI工具和开发者效率工具的研发。
          拥有3年以上的前端和后端开发经验，熟悉现代Web技术栈。
        </p>
        <p style="color: #666; line-height: 1.6;">
          致力于通过技术创新提升开发者的工作效率，让编程变得更加高效和愉悦。
        </p>
      </div>

      <!-- Settings Section -->
      <div class="settings-section">
        <h3 class="section-title">设置</h3>
        <div class="settings-list">
          <div class="setting-item" @click="openProfileSettings">
            <div class="setting-icon">👤</div>
            <div class="setting-content">
              <div class="setting-title">个人资料</div>
              <div class="setting-subtitle">修改头像、名称、自我介绍</div>
            </div>
            <div class="setting-arrow">›</div>
          </div>
          
          <div class="setting-item" @click="openNotificationSettings">
            <div class="setting-icon">🔔</div>
            <div class="setting-content">
              <div class="setting-title">通知设置</div>
              <div class="setting-subtitle">管理推送通知和提醒</div>
            </div>
            <div class="setting-arrow">›</div>
          </div>
          
          <div class="setting-item" @click="openPrivacySettings">
            <div class="setting-icon">🔒</div>
            <div class="setting-content">
              <div class="setting-title">隐私设置</div>
              <div class="setting-subtitle">管理数据隐私和安全</div>
            </div>
            <div class="setting-arrow">›</div>
          </div>
          
          <div class="setting-item" @click="openAbout">
            <div class="setting-icon">ℹ️</div>
            <div class="setting-content">
              <div class="setting-title">关于应用</div>
              <div class="setting-subtitle">版本信息和帮助</div>
            </div>
            <div class="setting-arrow">›</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Navigation -->
    <BottomNav />
  </div>
</template>

<script>
import BottomNav from '../components/BottomNav.vue'

export default {
  name: 'Contact',
  components: {
    BottomNav
  },
  methods: {
    openProfileSettings() {
      this.$router.push('/profile-settings')
    },
    openNotificationSettings() {
      if (this.$notify) {
        this.$notify({
          title: '通知设置',
          message: '正在打开通知设置页面...',
          type: 'info'
        })
      }
    },
    openPrivacySettings() {
      if (this.$notify) {
        this.$notify({
          title: '隐私设置',
          message: '正在打开隐私设置页面...',
          type: 'info'
        })
      }
    },
    openAbout() {
      if (this.$notify) {
        this.$notify({
          title: '关于应用',
          message: 'CodeLab.Me v1.0.0 - 开发者工具平台',
          type: 'info'
        })
      }
    }
  }
}
</script>

<style scoped>
.profile-section {
  text-align: center;
  margin-bottom: 32px;
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin: 0 auto 16px;
}

.title-tag {
  background: #f0f0f0;
  color: #666;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  display: inline-block;
  margin-bottom: 16px;
}

.profile-section h2 {
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: bold;
}

.contact-section {
  margin-bottom: 32px;
}

.skills-section {
  margin-bottom: 32px;
}

.additional-info {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
}

.settings-section {
  margin-bottom: 24px;
}

.settings-list {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.setting-item {
  display: flex;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.setting-item:last-child {
  border-bottom: none;
}

.setting-item:hover {
  background-color: #f8f9fa;
  transform: translateX(4px);
}

.setting-item:active {
  background-color: #e9ecef;
  transform: translateX(0);
}

.setting-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin-right: 16px;
  flex-shrink: 0;
}

.setting-content {
  flex: 1;
}

.setting-title {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
}

.setting-subtitle {
  font-size: 12px;
  color: #666;
}

.setting-arrow {
  font-size: 18px;
  color: #999;
  margin-left: 12px;
}

.contact-info {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  background: white;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.contact-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin-right: 16px;
  flex-shrink: 0;
}

.skills-section {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
}

.skill-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.skill-name {
  font-size: 14px;
  color: #333;
}

.skill-percentage {
  font-size: 12px;
  color: #666;
}

.progress-bar {
  height: 6px;
  background: #f0f0f0;
  border-radius: 3px;
  margin-bottom: 16px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #007AFF, #4CAF50);
  border-radius: 3px;
  transition: width 0.8s ease;
  animation: progressAnimation 1s ease-out;
}

@keyframes progressAnimation {
  from {
    width: 0%;
  }
  to {
    width: var(--progress-width);
  }
}
</style> 