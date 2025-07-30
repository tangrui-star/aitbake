# CodeLab.Me API 接口文档

## 概述

CodeLab.Me 是一个开发者工具平台，提供项目展示、工具管理和用户交互等功能。本文档详细描述了所有可用的API接口。

## 基础信息

- **基础URL**: `https://api.codelab.me`
- **API版本**: `v1`
- **认证方式**: Bearer Token
- **数据格式**: JSON
- **字符编码**: UTF-8

## 认证

### 获取访问令牌

```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

**响应示例**:
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 1,
      "email": "user@example.com",
      "name": "开发者",
      "avatar": "https://example.com/avatar.jpg"
    }
  }
}
```

### 刷新令牌

```http
POST /auth/refresh
Authorization: Bearer <token>
```

## 用户管理

### 用户注册

```http
POST /auth/register
Content-Type: application/json

{
  "name": "开发者",
  "email": "user@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
```

### 获取用户信息

```http
GET /user/profile
Authorization: Bearer <token>
```

### 更新用户信息

```http
PUT /user/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "新用户名",
  "bio": "个人简介",
  "website": "https://example.com",
  "github": "https://github.com/username"
}
```

### 用户登出

```http
POST /auth/logout
Authorization: Bearer <token>
```

## 项目管理

### 获取项目列表

```http
GET /projects?page=1&limit=10&category=web&search=vue
```

**查询参数**:
- `page`: 页码 (默认: 1)
- `limit`: 每页数量 (默认: 10)
- `category`: 项目分类
- `search`: 搜索关键词
- `sort`: 排序方式 (stars, views, created_at)

**响应示例**:
```json
{
  "success": true,
  "data": {
    "projects": [
      {
        "id": "ai-code-assistant",
        "title": "AI代码助手",
        "description": "基于GPT-4的编程自动化工具",
        "icon": "🤖",
        "imageBg": "linear-gradient(135deg, #667eea, #764ba2)",
        "stars": 128,
        "forks": 32,
        "views": 2048,
        "category": "ai",
        "techStack": ["Vue.js", "Node.js", "OpenAI API"],
        "createdAt": "2024-01-15T10:30:00Z",
        "updatedAt": "2024-01-20T14:20:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 100,
      "pages": 10
    }
  }
}
```

### 获取项目详情

```http
GET /projects/{id}
```

**响应示例**:
```json
{
  "success": true,
  "data": {
    "id": "ai-code-assistant",
    "title": "AI代码助手",
    "description": "基于GPT-4的编程自动化工具，支持代码生成、重构和优化",
    "icon": "🤖",
    "imageBg": "linear-gradient(135deg, #667eea, #764ba2)",
    "stars": 128,
    "forks": 32,
    "views": 2048,
    "downloads": 156,
    "category": "ai",
    "techStack": ["Vue.js", "Node.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
    "screenshots": [
      {
        "id": 1,
        "url": "https://example.com/screenshot1.jpg",
        "description": "主界面"
      }
    ],
    "features": [
      "智能代码生成",
      "代码重构建议",
      "多语言支持"
    ],
    "versions": [
      {
        "version": "2.1.0",
        "date": "2024-01-15",
        "changes": ["新增代码重构功能", "优化AI响应速度"]
      }
    ],
    "links": {
      "github": "https://github.com/example/ai-code-assistant",
      "demo": "https://demo.example.com",
      "docs": "https://docs.example.com"
    },
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-20T14:20:00Z"
  }
}
```

### 创建项目

```http
POST /projects
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "新项目",
  "description": "项目描述",
  "category": "web",
  "techStack": ["Vue.js", "Node.js"],
  "links": {
    "github": "https://github.com/example/project",
    "demo": "https://demo.example.com"
  }
}
```

### 更新项目

```http
PUT /projects/{id}
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "更新后的项目标题",
  "description": "更新后的项目描述"
}
```

### 删除项目

```http
DELETE /projects/{id}
Authorization: Bearer <token>
```

### 获取项目评论

```http
GET /projects/{id}/comments?page=1&limit=10
```

### 添加项目评论

```http
POST /projects/{id}/comments
Authorization: Bearer <token>
Content-Type: application/json

{
  "content": "这是一个很棒的项目！",
  "rating": 5
}
```

## 工具管理

### 获取工具列表

```http
GET /tools?page=1&limit=10&category=calculator&search=计算器
```

**查询参数**:
- `page`: 页码 (默认: 1)
- `limit`: 每页数量 (默认: 10)
- `category`: 工具分类
- `search`: 搜索关键词
- `sort`: 排序方式 (rating, views, downloads)

**响应示例**:
```json
{
  "success": true,
  "data": {
    "tools": [
      {
        "id": "calculator",
        "title": "科学计算器",
        "description": "支持高级数学计算",
        "icon": "🧮",
        "iconBg": "#E3F2FD",
        "iconColor": "#1976D2",
        "rating": 4.8,
        "views": 15420,
        "downloads": 8920,
        "reviews": 156,
        "category": "calculator",
        "features": ["矩阵运算", "微积分计算", "方程求解"],
        "createdAt": "2024-01-10T09:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 50,
      "pages": 5
    }
  }
}
```

### 获取工具详情

```http
GET /tools/{id}
```

**响应示例**:
```json
{
  "success": true,
  "data": {
    "id": "calculator",
    "title": "科学计算器",
    "description": "支持高级数学计算, 包括矩阵运算、微积分和方程求解",
    "icon": "🧮",
    "iconBg": "#E3F2FD",
    "iconColor": "#1976D2",
    "rating": 4.8,
    "views": 15420,
    "downloads": 8920,
    "reviews": 156,
    "category": "calculator",
    "features": [
      "矩阵运算",
      "微积分计算",
      "方程求解",
      "图形绘制",
      "单位转换",
      "科学记数法"
    ],
    "screenshots": [
      {
        "id": 1,
        "url": "https://example.com/screenshot1.jpg",
        "description": "主界面"
      }
    ],
    "usageSteps": [
      {
        "title": "选择计算模式",
        "description": "根据您的需求选择基础计算、科学计算或高级数学模式"
      }
    ],
    "specifications": [
      {
        "name": "支持语言",
        "value": "中文/英文"
      }
    ],
    "relatedTools": [
      {
        "id": "unit-converter",
        "title": "单位转换器",
        "description": "支持各种物理单位的转换"
      }
    ],
    "createdAt": "2024-01-10T09:00:00Z",
    "updatedAt": "2024-01-15T16:30:00Z"
  }
}
```

### 创建工具

```http
POST /tools
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "新工具",
  "description": "工具描述",
  "category": "calculator",
  "features": ["功能1", "功能2"],
  "specifications": [
    {
      "name": "支持语言",
      "value": "中文/英文"
    }
  ]
}
```

### 更新工具

```http
PUT /tools/{id}
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "更新后的工具标题",
  "description": "更新后的工具描述"
}
```

### 删除工具

```http
DELETE /tools/{id}
Authorization: Bearer <token>
```

### 获取工具评价

```http
GET /tools/{id}/reviews?page=1&limit=10
```

### 添加工具评价

```http
POST /tools/{id}/reviews
Authorization: Bearer <token>
Content-Type: application/json

{
  "rating": 5,
  "content": "这个工具非常好用！"
}
```

## 收藏管理

### 获取用户收藏

```http
GET /user/favorites?page=1&limit=10&type=project
```

**查询参数**:
- `page`: 页码
- `limit`: 每页数量
- `type`: 收藏类型 (project, tool)

### 添加收藏

```http
POST /user/favorites
Authorization: Bearer <token>
Content-Type: application/json

{
  "type": "project",
  "targetId": "ai-code-assistant"
}
```

### 取消收藏

```http
DELETE /user/favorites/{id}
Authorization: Bearer <token>
```

## 文件上传

### 上传文件

```http
POST /upload
Authorization: Bearer <token>
Content-Type: multipart/form-data

file: <file>
```

**响应示例**:
```json
{
  "success": true,
  "data": {
    "url": "https://cdn.example.com/uploads/file.jpg",
    "filename": "file.jpg",
    "size": 1024000,
    "type": "image/jpeg"
  }
}
```

## 搜索功能

### 全局搜索

```http
GET /search?q=vue&type=all&page=1&limit=10
```

**查询参数**:
- `q`: 搜索关键词
- `type`: 搜索类型 (all, project, tool)
- `page`: 页码
- `limit`: 每页数量

## 统计分析

### 获取平台统计

```http
GET /stats/platform
```

**响应示例**:
```json
{
  "success": true,
  "data": {
    "totalProjects": 1250,
    "totalTools": 320,
    "totalUsers": 8500,
    "totalViews": 125000,
    "totalDownloads": 45600
  }
}
```

### 获取用户统计

```http
GET /stats/user
Authorization: Bearer <token>
```

## 错误处理

### 错误响应格式

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "输入数据格式不正确",
    "details": {
      "email": "邮箱格式不正确"
    }
  }
}
```

### 常见错误代码

| 错误代码 | HTTP状态码 | 描述 |
|---------|-----------|------|
| `VALIDATION_ERROR` | 400 | 输入数据验证失败 |
| `UNAUTHORIZED` | 401 | 未授权访问 |
| `FORBIDDEN` | 403 | 禁止访问 |
| `NOT_FOUND` | 404 | 资源不存在 |
| `CONFLICT` | 409 | 资源冲突 |
| `RATE_LIMIT_EXCEEDED` | 429 | 请求频率超限 |
| `INTERNAL_ERROR` | 500 | 服务器内部错误 |

## 限流规则

- **认证用户**: 1000次/小时
- **未认证用户**: 100次/小时
- **文件上传**: 10次/小时

## 数据格式

### 日期时间格式

所有日期时间字段使用ISO 8601格式：`YYYY-MM-DDTHH:mm:ssZ`

### 分页格式

```json
{
  "page": 1,
  "limit": 10,
  "total": 100,
  "pages": 10
}
```

### 响应格式

所有API响应都遵循以下格式：

```json
{
  "success": true,
  "data": {
    // 具体数据
  },
  "message": "操作成功"
}
```

## SDK和示例

### JavaScript SDK

```javascript
import { api, projectAPI, toolAPI } from '@/api'

// 获取项目列表
const projects = await projectAPI.getProjects({
  page: 1,
  limit: 10,
  category: 'web'
})

// 创建项目
const newProject = await projectAPI.createProject({
  title: '新项目',
  description: '项目描述'
})
```

### cURL示例

```bash
# 获取项目列表
curl -X GET "https://api.codelab.me/projects?page=1&limit=10" \
  -H "Authorization: Bearer YOUR_TOKEN"

# 创建项目
curl -X POST "https://api.codelab.me/projects" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "新项目",
    "description": "项目描述"
  }'
```

## 更新日志

### v1.0.0 (2024-01-20)
- 初始版本发布
- 支持项目管理
- 支持工具管理
- 支持用户认证
- 支持文件上传

## 联系支持

- **邮箱**: api-support@codelab.me
- **文档**: https://docs.codelab.me/api
- **GitHub**: https://github.com/codelab/api-docs 