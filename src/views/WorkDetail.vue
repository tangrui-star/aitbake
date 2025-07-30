<template>
  <div class="container">
    <div class="header">
      <div class="back-button" @click="$router.go(-1)">
        <span>‹</span>
      </div>
      <div class="header-title">作品详情</div>
      <div class="header-actions">
        <button class="action-btn" @click="toggleFavorite">
          <span :class="isFavorite ? 'star-filled' : 'star-empty'">★</span>
        </button>
        <button class="action-btn" @click="shareProject">
          <span>📤</span>
        </button>
      </div>
    </div>
    
    <div class="main-content">
      <!-- 项目基本信息 -->
      <div class="project-header">
        <div class="project-image" :style="{ background: projectData.imageBg }">
          <div class="project-icon">{{ projectData.icon }}</div>
        </div>
        <div class="project-info">
          <h1>{{ projectData.title }}</h1>
          <p class="project-description">{{ projectData.description }}</p>
          <div class="project-meta">
            <span class="meta-item">
              <span class="meta-icon">👁️</span>
              {{ projectData.views }} 
            </span>
            <span class="meta-item">
              <span class="meta-icon">⭐</span>
              {{ projectData.stars }} 
            </span>
            <span class="meta-item">
              <span class="meta-icon">🔄</span>
              {{ projectData.forks }} 
            </span>
          </div>
        </div>
      </div>

      <!-- 项目统计 -->
      <div class="project-stats">
        <div class="stat-item">
          <div class="stat-value">{{ projectData.stars }}</div>
          <div class="stat-label">星标</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">{{ projectData.forks }}</div>
          <div class="stat-label">复刻</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">{{ projectData.views }}</div>
          <div class="stat-label">浏览</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">{{ projectData.downloads }}</div>
          <div class="stat-label">下载</div>
        </div>
      </div>

      <!-- 技术栈 -->
      <div class="section">
        <h3>技术栈</h3>
        <div class="tech-stack">
          <span class="tech-tag" v-for="tech in projectData.techStack" :key="tech">
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- 项目截图 -->
      <div class="section">
        <h3>项目截图</h3>
        <div class="screenshots">
          <div class="screenshot-item" v-for="(screenshot, index) in projectData.screenshots" :key="index">
            <div class="screenshot-placeholder" :style="{ background: screenshot.color }">
              <span class="screenshot-icon">{{ screenshot.icon }}</span>
            </div>
            <p class="screenshot-desc">{{ screenshot.description }}</p>
          </div>
        </div>
      </div>

      <!-- 功能特性 -->
      <div class="section">
        <h3>功能特性</h3>
        <div class="features-list">
          <div class="feature-item" v-for="feature in projectData.features" :key="feature">
            <span class="feature-icon">✓</span>
            <span>{{ feature }}</span>
          </div>
        </div>
      </div>

      <!-- 更新日志 -->
      <div class="section">
        <h3>更新日志</h3>
        <div class="changelog">
          <div class="version-item" v-for="version in projectData.versions" :key="version.version">
            <div class="version-header">
              <span class="version-number">v{{ version.version }}</span>
              <span class="version-date">{{ version.date }}</span>
            </div>
            <ul class="version-changes">
              <li v-for="change in version.changes" :key="change">{{ change }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 相关链接 -->
      <div class="section">
        <h3>相关链接</h3>
        <div class="project-links">
          <a :href="projectData.githubLink" class="link-item" target="_blank">
            <span class="link-icon">📦</span>
            <span>GitHub 仓库</span>
          </a>
          <a :href="projectData.demoLink" class="link-item" target="_blank">
            <span class="link-icon">🌐</span>
            <span>在线演示</span>
          </a>
          <a :href="projectData.docsLink" class="link-item" target="_blank">
            <span class="link-icon">📚</span>
            <span>文档说明</span>
          </a>
        </div>
      </div>

      <!-- 评论区 -->
      <div class="section">
        <h3>评论 ({{ projectData.comments.length }})</h3>
        <div class="comments">
          <div class="comment-item" v-for="comment in projectData.comments" :key="comment.id">
            <div class="comment-avatar">{{ comment.author.charAt(0) }}</div>
            <div class="comment-content">
              <div class="comment-header">
                <span class="comment-author">{{ comment.author }}</span>
                <span class="comment-date">{{ comment.date }}</span>
              </div>
              <p class="comment-text">{{ comment.text }}</p>
            </div>
          </div>
        </div>
        <div class="comment-form">
          <textarea v-model="newComment" placeholder="写下你的评论..." class="comment-input"></textarea>
          <button @click="addComment" class="btn btn-primary">发表评论</button>
        </div>
      </div>

      <!-- 操作按钮 -->
      <div class="action-buttons">
        <button class="btn btn-primary" @click="viewDemo">查看演示</button>
        <button class="btn btn-secondary" @click="downloadProject">下载源码</button>
        <button class="btn btn-outline" @click="reportIssue">报告问题</button>
      </div>
    </div>
    <BottomNav />
  </div>
</template>

<script>
import BottomNav from "../components/BottomNav.vue";

export default {
  name: "WorkDetail",
  components: {
    BottomNav
  },
  data() {
    return {
      isFavorite: false,
      newComment: "",
      projectData: {
        title: "AI代码助手",
        description: "基于GPT-4的编程自动化工具，支持代码生成、重构和优化",
        icon: "🤖",
        imageBg: "linear-gradient(135deg, #667eea, #764ba2)",
        stars: 128,
        forks: 32,
        views: 2048,
        downloads: 156,
        techStack: ["Vue.js", "Node.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
        screenshots: [
          { icon: "💻", color: "#4F46E5", description: "主界面" },
          { icon: "⚙️", color: "#7C3AED", description: "设置面板" },
          { icon: "📊", color: "#059669", description: "数据分析" }
        ],
        features: [
          "智能代码生成",
          "代码重构建议",
          "多语言支持",
          "实时语法检查",
          "代码片段管理",
          "团队协作功能"
        ],
        versions: [
          {
            version: "2.1.0",
            date: "2024-01-15",
            changes: [
              "新增代码重构功能",
              "优化AI响应速度",
              "修复已知问题"
            ]
          },
          {
            version: "2.0.0",
            date: "2024-01-01",
            changes: [
              "全新UI设计",
              "支持更多编程语言",
              "性能大幅提升"
            ]
          }
        ],
        githubLink: "https://github.com/example/ai-code-assistant",
        demoLink: "https://demo.example.com",
        docsLink: "https://docs.example.com",
        comments: [
          {
            id: 1,
            author: "开发者小王",
            date: "2024-01-10",
            text: "这个工具真的很棒，帮我节省了很多时间！"
          },
          {
            id: 2,
            author: "前端工程师",
            date: "2024-01-08",
            text: "代码生成质量很高，推荐使用。"
          }
        ]
      }
    };
  },
  mounted() {
    const workId = this.$route.params.id;
    this.loadProjectData(workId);
  },
  methods: {
    loadProjectData(workId) {
      const projects = {
        "ai-code-assistant": {
          title: "AI代码助手",
          description: "基于GPT-4的编程自动化工具，支持代码生成、重构和优化",
          icon: "🤖",
          imageBg: "linear-gradient(135deg, #667eea, #764ba2)",
          stars: 128,
          forks: 32,
          views: 2048,
          downloads: 156,
          techStack: ["Vue.js", "Node.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
          screenshots: [
            { icon: "💻", color: "#4F46E5", description: "主界面" },
            { icon: "⚙️", color: "#7C3AED", description: "设置面板" },
            { icon: "📊", color: "#059669", description: "数据分析" }
          ],
          features: [
            "智能代码生成",
            "代码重构建议",
            "多语言支持",
            "实时语法检查",
            "代码片段管理",
            "团队协作功能"
          ],
          versions: [
            {
              version: "2.1.0",
              date: "2024-01-15",
              changes: [
                "新增代码重构功能",
                "优化AI响应速度",
                "修复已知问题"
              ]
            },
            {
              version: "2.0.0",
              date: "2024-01-01",
              changes: [
                "全新UI设计",
                "支持更多编程语言",
                "性能大幅提升"
              ]
            }
          ],
          githubLink: "https://github.com/example/ai-code-assistant",
          demoLink: "https://demo.example.com",
          docsLink: "https://docs.example.com",
          comments: [
            {
              id: 1,
              author: "开发者小王",
              date: "2024-01-10",
              text: "这个工具真的很棒，帮我节省了很多时间！"
            },
            {
              id: 2,
              author: "前端工程师",
              date: "2024-01-08",
              text: "代码生成质量很高，推荐使用。"
            }
          ]
        },
        "figma-plugin": {
          title: "智能Figma插件",
          description: "设计稿自动标注与组件化工具，提升设计效率",
          icon: "🎨",
          imageBg: "linear-gradient(135deg, #f093fb, #f5576c)",
          stars: 89,
          forks: 15,
          views: 1567,
          downloads: 89,
          techStack: ["Figma API", "TypeScript", "React", "Webpack"],
          screenshots: [
            { icon: "🎨", color: "#EC4899", description: "设计界面" },
            { icon: "📐", color: "#8B5CF6", description: "标注工具" },
            { icon: "🧩", color: "#06B6D4", description: "组件库" }
          ],
          features: [
            "自动标注功能",
            "组件化设计",
            "设计规范检查",
            "团队协作",
            "版本管理",
            "导出多种格式"
          ],
          versions: [
            {
              version: "1.5.0",
              date: "2024-01-12",
              changes: [
                "新增自动标注功能",
                "优化组件库管理",
                "提升性能表现"
              ]
            }
          ],
          githubLink: "https://github.com/example/figma-plugin",
          demoLink: "https://figma.com/community/plugin/example",
          docsLink: "https://docs.example.com",
          comments: [
            {
              id: 1,
              author: "UI设计师",
              date: "2024-01-09",
              text: "标注功能很实用，大大提高了工作效率！"
            }
          ]
        },
        "data-visualization": {
          title: "数据可视化平台",
          description: "基于ECharts的高级数据可视化解决方案",
          icon: "📊",
          imageBg: "linear-gradient(135deg, #4facfe, #00f2fe)",
          stars: 256,
          forks: 67,
          views: 3456,
          downloads: 234,
          techStack: ["ECharts", "Vue.js", "D3.js", "Canvas", "WebGL"],
          screenshots: [
            { icon: "📈", color: "#3B82F6", description: "图表展示" },
            { icon: "🎯", color: "#EF4444", description: "数据分析" },
            { icon: "🔄", color: "#10B981", description: "实时更新" }
          ],
          features: [
            "丰富的图表类型",
            "实时数据更新",
            "交互式操作",
            "自定义主题",
            "导出功能",
            "移动端适配"
          ],
          versions: [
            {
              version: "3.0.0",
              date: "2024-01-20",
              changes: [
                "新增3D图表支持",
                "优化移动端体验",
                "新增更多图表类型"
              ]
            }
          ],
          githubLink: "https://github.com/example/data-viz",
          demoLink: "https://demo.example.com",
          docsLink: "https://docs.example.com",
          comments: [
            {
              id: 1,
              author: "数据分析师",
              date: "2024-01-18",
              text: "图表类型很丰富，满足了我的各种需求。"
            }
          ]
        }
      };
      if (projects[workId]) {
        this.projectData = projects[workId];
      }
    },
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
      if (this.$notify) {
        this.$notify({
          title: this.isFavorite ? "已收藏" : "已取消收藏",
          message: `${this.projectData.title} ${this.isFavorite ? '已添加到收藏夹' : '已从收藏夹移除'}`,
          type: "success"
        });
      }
    },
    shareProject() {
      if (this.$notify) {
        this.$notify({
          title: "分享成功",
          message: `${this.projectData.title} 已分享到社交媒体`,
          type: "success"
        });
      }
    },
    viewDemo() {
      window.open(this.projectData.demoLink, '_blank');
    },
    downloadProject() {
      if (this.$notify) {
        this.$notify({
          title: "下载开始",
          message: `${this.projectData.title} 源码正在下载中...`,
          type: "success"
        });
      }
    },
    reportIssue() {
      if (this.$notify) {
        this.$notify({
          title: "问题反馈",
          message: "已跳转到GitHub Issues页面",
          type: "info"
        });
      }
    },
    addComment() {
      if (this.newComment.trim()) {
        const comment = {
          id: Date.now(),
          author: "当前用户",
          date: new Date().toLocaleDateString(),
          text: this.newComment.trim()
        };
        this.projectData.comments.unshift(comment);
        this.newComment = "";
        if (this.$notify) {
          this.$notify({
            title: "评论成功",
            message: "您的评论已发表",
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

.star-filled {
  color: #FFD700;
}

.star-empty {
  color: #ccc;
}

.main-content {
  padding: 20px;
}

.project-header {
  display: flex;
  gap: 20px;
  margin-bottom: 24px;
}

.project-image {
  width: 120px;
  height: 120px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.project-icon {
  font-size: 48px;
  color: white;
}

.project-info {
  flex: 1;
}

.project-info h1 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
}

.project-description {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 16px;
}

.project-meta {
  display: flex;
  gap: 16px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: #666;
}

.meta-icon {
  font-size: 16px;
}

.project-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 24px;
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: 24px;
  font-weight: 600;
  color: #007AFF;
}

.stat-label {
  font-size: 14px;
  color: #666;
  margin-top: 4px;
}

.section {
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.section h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  background: #E3F2FD;
  color: #1976D2;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 14px;
}

.screenshots {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 16px;
}

.screenshot-item {
  text-align: center;
}

.screenshot-placeholder {
  width: 100%;
  height: 80px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}

.screenshot-icon {
  font-size: 32px;
  color: white;
}

.screenshot-desc {
  font-size: 14px;
  color: #666;
}

.features-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 12px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: #333;
}

.feature-icon {
  color: #4CAF50;
  font-weight: bold;
}

.changelog {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.version-item {
  border-left: 3px solid #007AFF;
  padding-left: 16px;
}

.version-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.version-number {
  font-weight: 600;
  color: #007AFF;
}

.version-date {
  font-size: 14px;
  color: #666;
}

.version-changes {
  margin: 0;
  padding-left: 16px;
}

.version-changes li {
  margin-bottom: 4px;
  color: #666;
}

.project-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.link-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #F8F9FA;
  border-radius: 8px;
  text-decoration: none;
  color: #333;
  transition: all 0.3s;
}

.link-item:hover {
  background: #E9ECEF;
  transform: translateX(4px);
}

.link-icon {
  font-size: 20px;
}

.comments {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;
}

.comment-item {
  display: flex;
  gap: 12px;
}

.comment-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  flex-shrink: 0;
}

.comment-content {
  flex: 1;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.comment-author {
  font-weight: 600;
  color: #333;
}

.comment-date {
  font-size: 14px;
  color: #666;
}

.comment-text {
  color: #666;
  line-height: 1.5;
  margin: 0;
}

.comment-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.comment-input {
  width: 100%;
  min-height: 80px;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  resize: vertical;
}

.comment-input:focus {
  outline: none;
  border-color: #007AFF;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
  margin-bottom: 80px; /* 为底部导航栏留出空间 */
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

.btn-outline {
  background: transparent;
  color: #007AFF;
  border: 1px solid #007AFF;
}

.btn-outline:hover {
  background: #007AFF;
  color: white;
  transform: translateY(-1px);
}

.btn:active {
  transform: translateY(0);
}
</style> 