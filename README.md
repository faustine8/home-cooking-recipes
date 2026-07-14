# Home Cooking Recipes

使用 VitePress 构建的家常菜谱文档站。

## 本地运行

```bash
npm install
npm run docs:dev
```

## 构建

```bash
npm run docs:build
```

## 部署到 GitHub Pages

推送到 `main` 分支后，GitHub Actions 会自动构建并部署站点。也可以在仓库的 Actions 页面手动运行 `Deploy VitePress site to Pages` 工作流。

首次部署前，在仓库的 `Settings` → `Pages` 中，将 `Build and deployment` 下的 `Source` 设置为 `GitHub Actions`。
