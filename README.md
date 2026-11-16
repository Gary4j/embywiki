# Emby Wiki

独立中文 Emby 使用指南。VitePress + Vue + Markdown，Cloudflare Pages 托管。

- 正式域名：https://embywiki.gary4j.top
- Pages 域名：https://embywiki-gary4j.pages.dev
- 资料来源与内容边界：`docs/about.md`

## 本地开发

需要 Node.js 22 或更高版本。

```sh
npm ci
npm run dev
npm run build
npm run preview
```

文档位于 `docs/`，导航配置在 `docs/.vitepress/config.mts`，首页与视觉样式位于 `docs/.vitepress/theme/`。搜索由 VitePress 本地索引生成，无需第三方搜索服务。

## Cloudflare Pages

连接 GitHub 仓库 `Gary4j/embywiki`，生产分支 `main`。

- 构建命令：`npm run build`
- 输出目录：`docs/.vitepress/dist`
- Node.js：22（项目 `.node-version`）
- 在 Pages 自定义域页面绑定 `embywiki.gary4j.top`，由 Cloudflare 建立指向 `embywiki-gary4j.pages.dev` 的 CNAME 与 HTTPS。

内容更新提交到 main 后由 Pages 自动构建。不要提交账号、密码、访问令牌或私人服务器信息。

## 许可

代码：MIT，见 LICENSE。原创文档：CC BY 4.0，见 CONTENT-LICENSE.md。外部引用与商标遵循原权利人的条款。
