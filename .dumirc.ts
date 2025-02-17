import { defineConfig } from 'dumi';

// 导出默认的 Dumi 配置
export default defineConfig({
  // 指定构建输出目录
  outputPath: 'docs-dist',

  // 设置文档网站的标题
  title: 'clickEditor',

  // 设置文档的基础路径，适用于 GitHub Pages 部署
  base: '/clickEditor/',

  // 设置公共资源的路径，适用于 GitHub Pages 部署
  publicPath: '/clickEditor/',

  // 配置主题相关的信息
  themeConfig: {
    // 设置主题的名称
    name: 'clickEditor',
  },
  targets: {
    chrome: '89', // 最低支持BigInt的Chrome版本
  },
  jsMinifier: 'esbuild', // 确保使用esbuild
  jsMinifierOptions: {
    target: 'es2020', // 强制使用ES2020标准
  },
});
