<template>
  <div class="container">
    <div class="header">
      <div class="back-button" @click="$router.go(-1)">
        <span>‹</span>
      </div>
      <div class="header-title">工具详情</div>
      <div class="header-actions">
        <button class="action-btn" @click="toggleFavorite">
          <span :class="isFavorite ? 'star-filled' : 'star-empty'">★</span>
        </button>
        <button class="action-btn" @click="shareTool">
          <span>📤</span>
        </button>
      </div>
    </div>
    
    <div class="main-content">
      <!-- 工具基本信息 -->
      <div class="tool-header">
        <div class="tool-icon" :style="{ background: toolData.iconBg, color: toolData.iconColor }">
          {{ toolData.icon }}
        </div>
        <div class="tool-info">
          <h1>{{ toolData.title }}</h1>
          <p class="tool-description">{{ toolData.description }}</p>
          <div class="tool-meta">
            <span class="meta-item">
              <span class="meta-icon">👁️</span>
              {{ toolData.views }} 
            </span>
            <span class="meta-item">
              <span class="meta-icon">⭐</span>
              {{ toolData.rating }} 
            </span>
            <span class="meta-item">
              <span class="meta-icon">📥</span>
              {{ toolData.downloads }} 
            </span>
          </div>
        </div>
      </div>

      <!-- 工具统计 -->
      <div class="tool-stats">
        <div class="stat-item">
          <div class="stat-value">{{ toolData.rating }}</div>
          <div class="stat-label">评分</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">{{ toolData.views }}</div>
          <div class="stat-label">使用次数</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">{{ toolData.downloads }}</div>
          <div class="stat-label">下载量</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">{{ toolData.reviews }}</div>
          <div class="stat-label">评价数</div>
        </div>
      </div>

      <!-- 功能特性 -->
      <div class="section">
        <h3>功能特性</h3>
        <div class="features-list">
          <div class="feature-item" v-for="feature in toolData.features" :key="feature">
            <span class="feature-icon">✓</span>
            <span>{{ feature }}</span>
          </div>
        </div>
      </div>

      <!-- 工具截图 -->
      <div class="section">
        <h3>工具截图</h3>
        <div class="screenshots">
          <div class="screenshot-item" v-for="(screenshot, index) in toolData.screenshots" :key="index">
            <div class="screenshot-placeholder" :style="{ background: screenshot.color }">
              <span class="screenshot-icon">{{ screenshot.icon }}</span>
            </div>
            <p class="screenshot-desc">{{ screenshot.description }}</p>
          </div>
        </div>
      </div>

      <!-- 使用说明 -->
      <div class="section">
        <h3>使用说明</h3>
        <div class="usage-steps">
          <div class="step-item" v-for="(step, index) in toolData.usageSteps" :key="index">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-content">
              <h4>{{ step.title }}</h4>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 技术规格 -->
      <div class="section">
        <h3>技术规格</h3>
        <div class="specs-grid">
          <div class="spec-item" v-for="spec in toolData.specifications" :key="spec.name">
            <span class="spec-label">{{ spec.name }}</span>
            <span class="spec-value">{{ spec.value }}</span>
          </div>
        </div>
      </div>

      <!-- 用户评价 -->
      <div class="section">
        <h3>用户评价 ({{ toolData.reviews }})</h3>
        <div class="reviews">
          <div class="review-item" v-for="review in toolData.userReviews" :key="review.id">
            <div class="review-header">
              <div class="reviewer-info">
                <div class="reviewer-avatar">{{ review.author.charAt(0) }}</div>
                <div class="reviewer-details">
                  <span class="reviewer-name">{{ review.author }}</span>
                  <div class="review-rating">
                    <span class="star" v-for="i in 5" :key="i" :class="i <= review.rating ? 'filled' : 'empty'">★</span>
                  </div>
                </div>
              </div>
              <span class="review-date">{{ review.date }}</span>
            </div>
            <p class="review-text">{{ review.text }}</p>
          </div>
        </div>
      </div>

      <!-- 相关工具 -->
      <div class="section">
        <h3>相关工具</h3>
        <div class="related-tools">
          <div class="related-tool" v-for="tool in toolData.relatedTools" :key="tool.id">
            <div class="related-tool-icon" :style="{ background: tool.iconBg, color: tool.iconColor }">
              {{ tool.icon }}
            </div>
            <div class="related-tool-info">
              <h4>{{ tool.title }}</h4>
              <p>{{ tool.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 操作按钮 -->
      <div class="action-buttons">
        <button class="btn btn-primary" @click="openTool">立即使用</button>
        <button class="btn btn-secondary" @click="downloadTool">下载工具</button>
        <button class="btn btn-outline" @click="viewDocs">查看文档</button>
      </div>
    </div>
    <BottomNav />
  </div>
</template>

<script>
import BottomNav from "../components/BottomNav.vue";

export default {
  name: "ToolDetail",
  components: {
    BottomNav
  },
  data() {
    return {
      isFavorite: false,
      toolData: {
        title: "科学计算器",
        description: "支持高级数学计算, 包括矩阵运算、微积分和方程求解",
        icon: "🧮",
        iconBg: "#E3F2FD",
        iconColor: "#1976D2",
        rating: 4.8,
        views: 15420,
        downloads: 8920,
        reviews: 156,
        features: [
          "矩阵运算",
          "微积分计算",
          "方程求解",
          "图形绘制",
          "单位转换",
          "科学记数法"
        ],
        screenshots: [
          { icon: "🧮", color: "#4F46E5", description: "主界面" },
          { icon: "📊", color: "#7C3AED", description: "图形绘制" },
          { icon: "⚙️", color: "#059669", description: "设置面板" }
        ],
        usageSteps: [
          {
            title: "选择计算模式",
            description: "根据您的需求选择基础计算、科学计算或高级数学模式"
          },
          {
            title: "输入表达式",
            description: "在输入框中输入数学表达式，支持多种数学符号和函数"
          },
          {
            title: "获取结果",
            description: "点击计算按钮，系统将显示详细的计算过程和最终结果"
          }
        ],
        specifications: [
          { name: "支持语言", value: "中文/英文" },
          { name: "计算精度", value: "16位小数" },
          { name: "内存容量", value: "无限制" },
          { name: "响应时间", value: "< 100ms" },
          { name: "兼容性", value: "全平台支持" },
          { name: "更新频率", value: "每月更新" }
        ],
        userReviews: [
          {
            id: 1,
            author: "数学老师",
            rating: 5,
            date: "2024-01-15",
            text: "功能非常强大，界面简洁易用，是教学的好帮手！"
          },
          {
            id: 2,
            author: "工程师",
            rating: 4,
            date: "2024-01-12",
            text: "计算精度很高，支持复杂的数学运算，推荐使用。"
          },
          {
            id: 3,
            author: "学生",
            rating: 5,
            date: "2024-01-10",
            text: "帮助我解决了很多数学难题，图形绘制功能很棒！"
          }
        ],
        relatedTools: [
          {
            id: 1,
            title: "单位转换器",
            description: "支持各种物理单位的转换",
            icon: "📏",
            iconBg: "#FFF3E0",
            iconColor: "#F57C00"
          },
          {
            id: 2,
            title: "几何计算器",
            description: "专门用于几何图形的计算",
            icon: "📐",
            iconBg: "#E8F5E8",
            iconColor: "#388E3C"
          }
        ]
      }
    };
  },
  mounted() {
    const toolId = this.$route.params.id;
    this.loadToolData(toolId);
  },
  methods: {
    loadToolData(toolId) {
      const tools = {
        "calculator": {
          title: "科学计算器",
          description: "支持高级数学计算, 包括矩阵运算、微积分和方程求解",
          icon: "🧮",
          iconBg: "#E3F2FD",
          iconColor: "#1976D2",
          rating: 4.8,
          views: 15420,
          downloads: 8920,
          reviews: 156,
          features: [
            "矩阵运算",
            "微积分计算",
            "方程求解",
            "图形绘制",
            "单位转换",
            "科学记数法"
          ],
          screenshots: [
            { icon: "🧮", color: "#4F46E5", description: "主界面" },
            { icon: "📊", color: "#7C3AED", description: "图形绘制" },
            { icon: "⚙️", color: "#059669", description: "设置面板" }
          ],
          usageSteps: [
            {
              title: "选择计算模式",
              description: "根据您的需求选择基础计算、科学计算或高级数学模式"
            },
            {
              title: "输入表达式",
              description: "在输入框中输入数学表达式，支持多种数学符号和函数"
            },
            {
              title: "获取结果",
              description: "点击计算按钮，系统将显示详细的计算过程和最终结果"
            }
          ],
          specifications: [
            { name: "支持语言", value: "中文/英文" },
            { name: "计算精度", value: "16位小数" },
            { name: "内存容量", value: "无限制" },
            { name: "响应时间", value: "< 100ms" },
            { name: "兼容性", value: "全平台支持" },
            { name: "更新频率", value: "每月更新" }
          ],
          userReviews: [
            {
              id: 1,
              author: "数学老师",
              rating: 5,
              date: "2024-01-15",
              text: "功能非常强大，界面简洁易用，是教学的好帮手！"
            },
            {
              id: 2,
              author: "工程师",
              rating: 4,
              date: "2024-01-12",
              text: "计算精度很高，支持复杂的数学运算，推荐使用。"
            },
            {
              id: 3,
              author: "学生",
              rating: 5,
              date: "2024-01-10",
              text: "帮助我解决了很多数学难题，图形绘制功能很棒！"
            }
          ],
          relatedTools: [
            {
              id: 1,
              title: "单位转换器",
              description: "支持各种物理单位的转换",
              icon: "📏",
              iconBg: "#FFF3E0",
              iconColor: "#F57C00"
            },
            {
              id: 2,
              title: "几何计算器",
              description: "专门用于几何图形的计算",
              icon: "📐",
              iconBg: "#E8F5E8",
              iconColor: "#388E3C"
            }
          ]
        },
        "json-formatter": {
          title: "JSON格式化",
          description: "JSON数据美化、压缩、验证和转换, 支持多种格式导出",
          icon: "{}",
          iconBg: "#E8F5E8",
          iconColor: "#388E3C",
          rating: 4.6,
          views: 8920,
          downloads: 5670,
          reviews: 89,
          features: [
            "语法高亮",
            "格式化美化",
            "压缩优化",
            "格式验证",
            "多格式导出",
            "批量处理"
          ],
          screenshots: [
            { icon: "{}", color: "#388E3C", description: "格式化界面" },
            { icon: "🔍", color: "#1976D2", description: "语法检查" },
            { icon: "📤", color: "#7B1FA2", description: "导出选项" }
          ],
          usageSteps: [
            {
              title: "粘贴JSON数据",
              description: "将您的JSON数据粘贴到输入框中"
            },
            {
              title: "选择操作",
              description: "选择格式化、压缩或验证等操作"
            },
            {
              title: "获取结果",
              description: "系统将处理您的数据并显示结果"
            }
          ],
          specifications: [
            { name: "支持格式", value: "JSON/XML/YAML" },
            { name: "处理速度", value: "实时处理" },
            { name: "文件大小", value: "最大10MB" },
            { name: "编码支持", value: "UTF-8/UTF-16" },
            { name: "浏览器", value: "全平台支持" },
            { name: "更新频率", value: "每周更新" }
          ],
          userReviews: [
            {
              id: 1,
              author: "前端开发者",
              rating: 5,
              date: "2024-01-14",
              text: "非常好用的JSON工具，格式化效果很棒！"
            },
            {
              id: 2,
              author: "后端工程师",
              rating: 4,
              date: "2024-01-11",
              text: "验证功能很准确，帮助我发现了不少错误。"
            }
          ],
          relatedTools: [
            {
              id: 1,
              title: "XML格式化",
              description: "XML文档的格式化工具",
              icon: "📄",
              iconBg: "#E3F2FD",
              iconColor: "#1976D2"
            },
            {
              id: 2,
              title: "YAML转换器",
              description: "YAML格式转换工具",
              icon: "📝",
              iconBg: "#FFF3E0",
              iconColor: "#F57C00"
            }
          ]
        },
        "code-converter": {
          title: "代码转换器",
          description: "在不同编程语言之间转换代码, 支持语法高亮和错误检查",
          icon: "{}",
          iconBg: "#FFF3E0",
          iconColor: "#F57C00",
          rating: 4.4,
          views: 12340,
          downloads: 7890,
          reviews: 234,
          features: [
            "多语言支持",
            "语法高亮",
            "错误检查",
            "批量转换",
            "代码优化",
            "注释保留"
          ],
          screenshots: [
            { icon: "💻", color: "#F57C00", description: "转换界面" },
            { icon: "🔍", color: "#1976D2", description: "语法检查" },
            { icon: "⚡", color: "#388E3C", description: "优化建议" }
          ],
          usageSteps: [
            {
              title: "选择源语言",
              description: "选择您要转换的源代码语言"
            },
            {
              title: "粘贴代码",
              description: "将源代码粘贴到输入框中"
            },
            {
              title: "选择目标语言",
              description: "选择要转换成的目标编程语言"
            },
            {
              title: "开始转换",
              description: "点击转换按钮，系统将自动转换代码"
            }
          ],
          specifications: [
            { name: "支持语言", value: "20+种语言" },
            { name: "转换准确率", value: "95%+" },
            { name: "处理速度", value: "实时转换" },
            { name: "代码长度", value: "最大50KB" },
            { name: "错误检测", value: "智能检测" },
            { name: "更新频率", value: "每日更新" }
          ],
          userReviews: [
            {
              id: 1,
              author: "全栈开发者",
              rating: 4,
              date: "2024-01-13",
              text: "转换效果不错，但有些复杂语法还需要手动调整。"
            },
            {
              id: 2,
              author: "学生",
              rating: 5,
              date: "2024-01-09",
              text: "帮助我学习不同语言的语法，很有用！"
            }
          ],
          relatedTools: [
            {
              id: 1,
              title: "代码美化",
              description: "代码格式化和美化工具",
              icon: "✨",
              iconBg: "#F3E5F5",
              iconColor: "#7B1FA2"
            },
            {
              id: 2,
              title: "语法检查",
              description: "多语言语法检查工具",
              icon: "🔍",
              iconBg: "#E8F5E8",
              iconColor: "#388E3C"
            }
          ]
        },
        "ai-creator": {
          title: "AI创作",
          description: "智能内容生成工具, 支持代码、文案、图表等多种类型创作",
          icon: "🤖",
          iconBg: "#F3E5F5",
          iconColor: "#7B1FA2",
          rating: 4.7,
          views: 18760,
          downloads: 12340,
          reviews: 456,
          features: [
            "代码生成",
            "文案创作",
            "图表生成",
            "智能优化",
            "多语言支持",
            "实时预览"
          ],
          screenshots: [
            { icon: "🤖", color: "#7B1FA2", description: "AI界面" },
            { icon: "📝", color: "#1976D2", description: "文案创作" },
            { icon: "📊", color: "#388E3C", description: "图表生成" }
          ],
          usageSteps: [
            {
              title: "选择创作类型",
              description: "选择代码生成、文案创作或图表生成"
            },
            {
              title: "输入需求描述",
              description: "详细描述您的创作需求和要求"
            },
            {
              title: "生成内容",
              description: "AI将根据您的需求生成相应的内容"
            },
            {
              title: "优化调整",
              description: "对生成的内容进行优化和调整"
            }
          ],
          specifications: [
            { name: "AI模型", value: "GPT-4/Claude" },
            { name: "响应时间", value: "3-5秒" },
            { name: "支持类型", value: "代码/文案/图表" },
            { name: "语言支持", value: "多语言" },
            { name: "内容质量", value: "高质量" },
            { name: "更新频率", value: "实时更新" }
          ],
          userReviews: [
            {
              id: 1,
              author: "产品经理",
              rating: 5,
              date: "2024-01-16",
              text: "文案生成质量很高，大大提高了工作效率！"
            },
            {
              id: 2,
              author: "开发者",
              rating: 4,
              date: "2024-01-12",
              text: "代码生成功能很实用，但需要进一步优化。"
            }
          ],
          relatedTools: [
            {
              id: 1,
              title: "AI助手",
              description: "智能问答和对话工具",
              icon: "💬",
              iconBg: "#E3F2FD",
              iconColor: "#1976D2"
            },
            {
              id: 2,
              title: "内容编辑器",
              description: "富文本内容编辑工具",
              icon: "✏️",
              iconBg: "#FFF3E0",
              iconColor: "#F57C00"
            }
          ]
        }
      };
      if (tools[toolId]) {
        this.toolData = tools[toolId];
      }
    },
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
      if (this.$notify) {
        this.$notify({
          title: this.isFavorite ? "已收藏" : "已取消收藏",
          message: `${this.toolData.title} ${this.isFavorite ? '已添加到收藏夹' : '已从收藏夹移除'}`,
          type: "success"
        });
      }
    },
    shareTool() {
      if (this.$notify) {
        this.$notify({
          title: "分享成功",
          message: `${this.toolData.title} 已分享到社交媒体`,
          type: "success"
        });
      }
    },
    openTool() {
      if (this.$notify) {
        this.$notify({
          title: "工具启动",
          message: `${this.toolData.title} 正在启动中...`,
          type: "success"
        });
      }
    },
    downloadTool() {
      if (this.$notify) {
        this.$notify({
          title: "下载开始",
          message: `${this.toolData.title} 正在下载中...`,
          type: "success"
        });
      }
    },
    viewDocs() {
      if (this.$notify) {
        this.$notify({
          title: "文档跳转",
          message: "正在跳转到工具文档页面",
          type: "info"
        });
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

.tool-header {
  display: flex;
  gap: 20px;
  margin-bottom: 24px;
}

.tool-icon {
  width: 120px;
  height: 120px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  flex-shrink: 0;
}

.tool-info {
  flex: 1;
}

.tool-info h1 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
}

.tool-description {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 16px;
}

.tool-meta {
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

.tool-stats {
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

.usage-steps {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.step-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.step-number {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #007AFF;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
}

.step-content h4 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #333;
}

.step-content p {
  color: #666;
  line-height: 1.5;
  margin: 0;
}

.specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.spec-item {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background: #F8F9FA;
  border-radius: 8px;
}

.spec-label {
  font-weight: 500;
  color: #333;
}

.spec-value {
  color: #666;
}

.reviews {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.review-item {
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 16px;
}

.review-item:last-child {
  border-bottom: none;
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
}

.reviewer-info {
  display: flex;
  gap: 12px;
  align-items: center;
}

.reviewer-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
}

.reviewer-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.reviewer-name {
  font-weight: 600;
  color: #333;
}

.review-rating {
  display: flex;
  gap: 2px;
}

.star {
  font-size: 14px;
}

.star.filled {
  color: #FFD700;
}

.star.empty {
  color: #ccc;
}

.review-date {
  font-size: 14px;
  color: #666;
}

.review-text {
  color: #666;
  line-height: 1.5;
  margin: 0;
}

.related-tools {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.related-tool {
  display: flex;
  gap: 12px;
  padding: 12px;
  background: #F8F9FA;
  border-radius: 8px;
  transition: all 0.3s;
}

.related-tool:hover {
  background: #E9ECEF;
  transform: translateX(4px);
}

.related-tool-icon {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-shrink: 0;
}

.related-tool-info {
  flex: 1;
}

.related-tool-info h4 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #333;
}

.related-tool-info p {
  font-size: 14px;
  color: #666;
  margin: 0;
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