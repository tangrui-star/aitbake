<template>
  <div class="container">
    <div class="header">
      <div class="back-button" @click="$router.go(-1)">
        <span>‹</span>
      </div>
      <div class="header-title">个人设置</div>
    </div>
    <div class="main-content">
      <div class="profile-section">
        <div class="avatar-section">
          <div class="avatar" @click="changeAvatar">
            {{ profileData.name.charAt(0) }}
          </div>
          <div class="avatar-hint">点击更换头像</div>
        </div>
        <div class="form-section">
          <div class="form-group">
            <label>姓名</label>
            <input v-model="profileData.name" type="text" class="form-input" />
          </div>
          <div class="form-group">
            <label>自我介绍</label>
            <textarea v-model="profileData.bio" class="form-textarea"></textarea>
          </div>
          <div class="form-group">
            <label>邮箱</label>
            <input v-model="profileData.email" type="email" class="form-input" />
          </div>
          <div class="form-group">
            <label>技能标签</label>
            <div class="skills-container">
              <div class="skill-tag" v-for="skill in profileData.skills" :key="skill">
                {{ skill }}
                <span class="remove-skill" @click="removeSkill(skill)">×</span>
              </div>
              <input 
                v-model="newSkill" 
                @keyup.enter="addSkill"
                placeholder="添加技能" 
                class="skill-input" 
              />
            </div>
          </div>
          <div class="form-group">
            <label>个人网站</label>
            <input v-model="profileData.website" type="url" class="form-input" />
          </div>
          <div class="form-group">
            <label>GitHub</label>
            <input v-model="profileData.github" type="url" class="form-input" />
          </div>
        </div>
      </div>
      
      <div class="settings-section">
        <h3>应用设置</h3>
        <div class="setting-item">
          <div class="setting-info">
            <div class="setting-title">通知设置</div>
            <div class="setting-desc">接收重要消息通知</div>
          </div>
          <label class="switch">
            <input type="checkbox" v-model="settings.notifications" />
            <span class="slider"></span>
          </label>
        </div>
        <div class="setting-item">
          <div class="setting-info">
            <div class="setting-title">深色模式</div>
            <div class="setting-desc">使用深色主题</div>
          </div>
          <label class="switch">
            <input type="checkbox" v-model="settings.darkMode" />
            <span class="slider"></span>
          </label>
        </div>
        <div class="setting-item">
          <div class="setting-info">
            <div class="setting-title">自动保存</div>
            <div class="setting-desc">自动保存编辑内容</div>
          </div>
          <label class="switch">
            <input type="checkbox" v-model="settings.autoSave" />
            <span class="slider"></span>
          </label>
        </div>
      </div>
      
      <div class="action-buttons">
        <button class="btn btn-primary" @click="saveProfile">保存设置</button>
        <button class="btn btn-secondary" @click="exportData">导出数据</button>
        <button class="btn btn-danger" @click="clearData">清除数据</button>
      </div>
    </div>
    <BottomNav />
  </div>
</template>

<script>
import BottomNav from "../components/BottomNav.vue";

export default {
  name: "ProfileSettings",
  components: {
    BottomNav
  },
  data() {
    return {
      profileData: {
        name: "开发者",
        bio: "热爱编程的全栈开发者，专注于前端技术和用户体验设计",
        email: "developer@example.com",
        skills: ["Vue.js", "React", "Node.js", "Python"],
        website: "https://example.com",
        github: "https://github.com/developer"
      },
      newSkill: "",
      settings: {
        notifications: true,
        darkMode: false,
        autoSave: true
      }
    };
  },
  methods: {
    changeAvatar() {
      if (this.$notify) {
        this.$notify({
          title: "头像更换",
          message: "头像更换功能开发中...",
          type: "info"
        });
      }
    },
    addSkill() {
      if (this.newSkill.trim() && !this.profileData.skills.includes(this.newSkill.trim())) {
        this.profileData.skills.push(this.newSkill.trim());
        this.newSkill = "";
      }
    },
    removeSkill(skill) {
      const index = this.profileData.skills.indexOf(skill);
      if (index > -1) {
        this.profileData.skills.splice(index, 1);
      }
    },
    saveProfile() {
      if (this.$notify) {
        this.$notify({
          title: "保存成功",
          message: "个人设置已保存",
          type: "success"
        });
      }
    },
    exportData() {
      if (this.$notify) {
        this.$notify({
          title: "导出成功",
          message: "数据已导出到本地",
          type: "success"
        });
      }
    },
    clearData() {
      if (confirm("确定要清除所有数据吗？此操作不可恢复。")) {
        if (this.$notify) {
          this.$notify({
            title: "清除成功",
            message: "所有数据已清除",
            type: "success"
          });
        }
      }
    }
  }
};
</script>

<style scoped>
.header {
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

.main-content {
  padding: 20px;
}

.profile-section {
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.avatar-section {
  text-align: center;
  margin-bottom: 24px;
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
  color: white;
  margin: 0 auto 12px;
  cursor: pointer;
  transition: all 0.3s;
}

.avatar:hover {
  transform: scale(1.05);
}

.avatar-hint {
  font-size: 14px;
  color: #666;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #007AFF;
}

.form-textarea {
  min-height: 80px;
  resize: vertical;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.skill-tag {
  background: #E3F2FD;
  color: #1976D2;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.remove-skill {
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
}

.skill-input {
  flex: 1;
  min-width: 120px;
  padding: 6px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  font-size: 14px;
}

.settings-section {
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.settings-section h3 {
  margin-bottom: 20px;
  color: #333;
  font-size: 18px;
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #f0f0f0;
}

.setting-item:last-child {
  border-bottom: none;
}

.setting-info {
  flex: 1;
}

.setting-title {
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
}

.setting-desc {
  font-size: 14px;
  color: #666;
}

.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.3s;
  border-radius: 24px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.3s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #007AFF;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.btn {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary {
  background: #007AFF;
  color: white;
}

.btn-primary:hover {
  background: #0056CC;
  transform: translateY(-1px);
}

.btn-secondary {
  background: #F8F9FA;
  color: #333;
  border: 1px solid #E0E0E0;
}

.btn-secondary:hover {
  background: #E9ECEF;
  transform: translateY(-1px);
}

.btn-danger {
  background: #DC3545;
  color: white;
}

.btn-danger:hover {
  background: #C82333;
  transform: translateY(-1px);
}

.btn:active {
  transform: translateY(0);
}
</style> 