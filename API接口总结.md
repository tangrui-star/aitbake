# CodeLab.Me 前端项目 API 接口总结

## 项目概述
- **项目名称**: CodeLab.Me - 开发者工具平台
- **技术栈**: Vue 3 + Vue Router + Vite
- **API基础地址**: `https://api.codelab.me` (可通过环境变量 `VUE_APP_API_BASE_URL` 配置)

## API 架构设计

### 1. 基础配置
- **API基础URL**: `https://api.codelab.me`
- **请求超时**: 10秒
- **认证方式**: Bearer Token (存储在 localStorage)
- **请求拦截器**: 自动添加认证头和时间戳防缓存
- **响应拦截器**: 统一错误处理和状态码处理

### 2. 错误处理机制
- **401**: 登录过期，自动跳转登录页
- **403**: 权限不足
- **404**: 资源不存在
- **500**: 服务器内部错误
- **网络错误**: 连接失败提示

## 接口分类详细说明

### 一、项目相关接口 (projectAPI)

#### 1.1 项目列表
- **接口**: `GET /projects`
- **参数**: 
  - `page`: 页码 (可选)
  - `limit`: 每页数量 (可选)
  - `category`: 分类筛选 (可选)
  - `search`: 搜索关键词 (可选)
- **用途**: 获取项目列表，支持分页和筛选

#### 1.2 项目详情
- **接口**: `GET /projects/{id}`
- **参数**: `id` - 项目ID
- **用途**: 获取单个项目的详细信息

#### 1.3 创建项目
- **接口**: `POST /projects`
- **参数**: 
  ```json
  {
    "title": "项目标题",
    "description": "项目描述",
    "category": "项目分类",
    "techStack": ["技术栈数组"],
    "githubLink": "GitHub链接",
    "demoLink": "演示链接",
    "docsLink": "文档链接"
  }
  ```

#### 1.4 更新项目
- **接口**: `PUT /projects/{id}`
- **参数**: 项目ID + 更新数据
- **用途**: 更新项目信息

#### 1.5 删除项目
- **接口**: `DELETE /projects/{id}`
- **参数**: `id` - 项目ID
- **用途**: 删除项目

#### 1.6 项目评论
- **获取评论**: `GET /projects/{projectId}/comments`
- **添加评论**: `POST /projects/{projectId}/comments`
- **参数**: 
  ```json
  {
    "content": "评论内容",
    "rating": 5
  }
  ```

### 二、工具相关接口 (toolAPI)

#### 2.1 工具列表
- **接口**: `GET /tools`
- **参数**: 
  - `category`: 工具分类 (code/data/design/ai)
  - `page`: 页码
  - `limit`: 每页数量
- **用途**: 获取工具列表，支持分类筛选

#### 2.2 工具详情
- **接口**: `GET /tools/{id}`
- **参数**: `id` - 工具ID
- **用途**: 获取工具详细信息，包括功能特性、使用说明、技术规格等

#### 2.3 工具管理
- **创建工具**: `POST /tools`
- **更新工具**: `PUT /tools/{id}`
- **删除工具**: `DELETE /tools/{id}`

#### 2.4 工具评价
- **获取评价**: `GET /tools/{toolId}/reviews`
- **添加评价**: `POST /tools/{toolId}/reviews`
- **参数**:
  ```json
  {
    "rating": 5,
    "content": "评价内容"
  }
  ```

### 三、用户相关接口 (userAPI)

#### 3.1 用户认证
- **登录**: `POST /auth/login`
  ```json
  {
    "email": "用户邮箱",
    "password": "密码"
  }
  ```
- **注册**: `POST /auth/register`
  ```json
  {
    "name": "用户名",
    "email": "邮箱",
    "password": "密码"
  }
  ```
- **登出**: `POST /auth/logout`

#### 3.2 用户信息
- **获取用户信息**: `GET /user/profile`
- **更新用户信息**: `PUT /user/profile`
  ```json
  {
    "name": "姓名",
    "bio": "自我介绍",
    "email": "邮箱",
    "skills": ["技能数组"],
    "website": "个人网站",
    "github": "GitHub链接"
  }
  ```

#### 3.3 用户收藏
- **获取收藏**: `GET /user/favorites`
- **添加收藏**: `POST /user/favorites`
  ```json
  {
    "type": "project|tool",
    "itemId": "项目或工具ID"
  }
  ```
- **取消收藏**: `DELETE /user/favorites/{id}`

### 四、文件上传接口 (uploadAPI)

#### 4.1 文件上传
- **接口**: `POST /upload`
- **参数**: FormData 格式
- **功能**: 
  - 支持上传进度回调
  - 自动添加认证头
  - 支持多种文件格式
- **返回**: 文件URL和元数据

## 前端页面与接口对应关系

### 1. 首页 (Home.vue)
- **轮播图数据**: 需要新增接口 `GET /banners`
- **精选作品**: 使用 `GET /projects?featured=true`
- **工具中心**: 使用 `GET /tools?featured=true`
- **热门资源**: 需要新增接口 `GET /resources?hot=true`

### 2. 工具页面 (Tools.vue)
- **工具列表**: 使用 `GET /tools?category={category}`
- **分类筛选**: 需要新增接口 `GET /tool-categories`

### 3. 作品页面 (Works.vue)
- **作品列表**: 使用 `GET /projects?category={category}`
- **分类筛选**: 需要新增接口 `GET /project-categories`

### 4. 工具详情页 (ToolDetail.vue)
- **工具详情**: 使用 `GET /tools/{id}`
- **用户评价**: 使用 `GET /tools/{toolId}/reviews`
- **收藏功能**: 使用 `POST /user/favorites`
- **分享功能**: 需要新增接口 `POST /share`

### 5. 作品详情页 (WorkDetail.vue)
- **作品详情**: 使用 `GET /projects/{id}`
- **评论功能**: 使用 `GET /projects/{projectId}/comments` 和 `POST /projects/{projectId}/comments`
- **收藏功能**: 使用 `POST /user/favorites`

### 6. 个人设置页 (ProfileSettings.vue)
- **获取用户信息**: 使用 `GET /user/profile`
- **更新用户信息**: 使用 `PUT /user/profile`
- **头像上传**: 使用 `POST /upload`

### 7. 联系页面 (Contact.vue)
- **用户信息展示**: 使用 `GET /user/profile`
- **技能数据**: 从用户信息中获取

## 需要新增的接口

### 1. 数据统计接口
- **接口**: `GET /analytics/dashboard`
- **用途**: 为 Chart.vue 组件提供数据
- **返回数据**:
  ```json
  {
    "totalVisits": 1234,
    "totalDownloads": 567,
    "conversionRate": 45.9,
    "chartData": [
      {
        "day": "01",
        "visits": 15,
        "downloads": 25
      }
    ]
  }
  ```

### 2. 分类管理接口
- **工具分类**: `GET /tool-categories`
- **项目分类**: `GET /project-categories`
- **资源分类**: `GET /resource-categories`

### 3. 内容管理接口
- **轮播图**: `GET /banners`
- **热门资源**: `GET /resources?hot=true`
- **分享功能**: `POST /share`

### 4. 搜索接口
- **全局搜索**: `GET /search?q={keyword}&type={type}`
- **搜索建议**: `GET /search/suggestions?q={keyword}`

## 接口规范建议

### 1. 统一响应格式
```json
{
  "code": 200,
  "message": "success",
  "data": {},
  "timestamp": 1640995200000
}
```

### 2. 分页响应格式
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "items": [],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 100,
      "totalPages": 5
    }
  }
}
```

### 3. 错误响应格式
```json
{
  "code": 400,
  "message": "参数错误",
  "errors": [
    {
      "field": "email",
      "message": "邮箱格式不正确"
    }
  ]
}
```

## 环境配置

### 开发环境
```bash
VUE_APP_API_BASE_URL=http://localhost:3000/api
```

### 生产环境
```bash
VUE_APP_API_BASE_URL=https://api.codelab.me
```

## 注意事项

1. **认证机制**: 所有需要认证的接口都需要在请求头中携带 `Authorization: Bearer {token}`
2. **错误处理**: 前端已实现统一的错误处理机制，后端需要返回标准的错误格式
3. **文件上传**: 支持进度回调，建议后端返回上传进度信息
4. **缓存策略**: GET请求自动添加时间戳防缓存，可根据需要调整
5. **跨域处理**: 需要后端配置CORS支持前端域名

## 总结

当前前端项目已经设计了完整的API调用架构，包括：
- 项目管理的CRUD操作
- 工具管理的CRUD操作  
- 用户认证和个人信息管理
- 文件上传功能
- 统一的错误处理和请求拦截

需要后端开发团队根据此文档实现对应的接口，确保前后端数据格式一致，并补充一些前端需要的额外接口（如数据统计、分类管理、搜索等）。

