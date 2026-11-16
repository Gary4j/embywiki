# Emby 使用指南

一个面向已收到账号的客户的中文长页面：Emby 简介、客户端推荐、Emby / Infuse 配置步骤及真实界面截图。

- 正式地址：https://embywiki.gary4j.top
- Cloudflare Pages：https://embywiki-gary4j.pages.dev
- 仓库：https://github.com/Gary4j/embywiki

## 交付信息

客户可以粘贴“观影地址、续费地址、账号、密码、到期”格式的文本，页面本地解析协议、主机和端口，生成各客户端填写表。原文在解析成功后清空；不发送网络请求，不写浏览器存储，也不把凭据拼入链接。离开页面时清空内存中的表单数据。密码默认隐藏。

请不要在源码、Issue、URL 或截图中放真实客户凭据。截图来源见 `docs/public/screenshots/NOTICE.md`。

## 开发和发布

Node.js 22 或以上。

```sh
npm ci
npm test
npm run dev
npm run build
```

Cloudflare Pages 连接 `main` 分支，构建命令 `npm run build`，输出 `docs/.vitepress/dist`。提交后自动部署。

- 页面：`docs/.vitepress/theme/Home.vue`
- 解析逻辑：`docs/.vitepress/theme/delivery.mjs`
- 样式：`docs/.vitepress/theme/style.css`
- 旧版长文与主题保留在 `archive/`，不参与站点构建；旧页面地址通过 `_redirects` 跳转到首页对应章节。

代码 MIT；原创内容 CC BY 4.0；第三方截图与商标不在上述许可范围内。

## 当前截图

Emby 使用官方 Web 26.0.43 的实截连接页；Infuse 使用官方当前教程配图（文章更新 2026-11-10）。详细来源见 docs/public/screenshots/NOTICE.md。旧社区截图仅归档，不部署。
