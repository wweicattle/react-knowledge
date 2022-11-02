import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'
import path from 'path'
import themeVariables from './src/config/config.ts'
// const themeVariables = {
//   '@primary-color': '#008c8c',
//   '@link-color': ' #1890ff', // 链接色
//   '@success-color': ' #52c41a', // 成功色
//   '@warning-color': '#faad14' // 警告色
// }
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/lib/${name}/style/index.less`
        }
      ]
    })
  ],

  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        modifyVars: themeVariables
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // src 路径
    },
    extensions: [ ".ts", ".js", ".vue" ],
  }
})
