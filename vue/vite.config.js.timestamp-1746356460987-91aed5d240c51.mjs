// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///E:/movie-ticketing-system/movie-ticketing-system/vue/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/movie-ticketing-system/movie-ticketing-system/vue/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///E:/movie-ticketing-system/movie-ticketing-system/vue/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///E:/movie-ticketing-system/movie-ticketing-system/vue/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///E:/movie-ticketing-system/movie-ticketing-system/vue/node_modules/unplugin-vue-components/dist/resolvers.js";
import ElementPlus from "file:///E:/movie-ticketing-system/movie-ticketing-system/vue/node_modules/unplugin-element-plus/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///E:/movie-ticketing-system/movie-ticketing-system/vue/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    // 按需定制主题配置
    ElementPlus({
      useSource: true
    }),
    AutoImport({
      resolvers: [ElementPlusResolver({ importStyle: "sass" })]
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: "sass" })]
    })
  ],
  // 预加载项目必需的组件
  optimizeDeps: {
    include: [
      "vue",
      "vue-router",
      "axios",
      "element-plus/es/components/base/style/css",
      "element-plus/es/components/message/style/css",
      "element-plus/es/components/message-box/style/css",
      "element-plus/es/components/form/style/css",
      "element-plus/es/components/form-item/style/css",
      "element-plus/es/components/button/style/css",
      "element-plus/es/components/input/style/css",
      "element-plus/es/components/input-number/style/css",
      "element-plus/es/components/switch/style/css",
      "element-plus/es/components/upload/style/css",
      "element-plus/es/components/menu/style/css",
      "element-plus/es/components/col/style/css",
      "element-plus/es/components/icon/style/css",
      "element-plus/es/components/row/style/css",
      "element-plus/es/components/tag/style/css",
      "element-plus/es/components/dialog/style/css",
      "element-plus/es/components/loading/style/css",
      "element-plus/es/components/radio/style/css",
      "element-plus/es/components/radio-group/style/css",
      "element-plus/es/components/popover/style/css",
      "element-plus/es/components/scrollbar/style/css",
      "element-plus/es/components/tooltip/style/css",
      "element-plus/es/components/dropdown/style/css",
      "element-plus/es/components/dropdown-menu/style/css",
      "element-plus/es/components/dropdown-item/style/css",
      "element-plus/es/components/sub-menu/style/css",
      "element-plus/es/components/menu-item/style/css",
      "element-plus/es/components/divider/style/css",
      "element-plus/es/components/card/style/css",
      "element-plus/es/components/link/style/css",
      "element-plus/es/components/breadcrumb/style/css",
      "element-plus/es/components/breadcrumb-item/style/css",
      "element-plus/es/components/table/style/css",
      "element-plus/es/components/tree-select/style/css",
      "element-plus/es/components/table-column/style/css",
      "element-plus/es/components/select/style/css",
      "element-plus/es/components/option/style/css",
      "element-plus/es/components/pagination/style/css",
      "element-plus/es/components/tree/style/css",
      "element-plus/es/components/alert/style/css",
      "element-plus/es/components/radio-button/style/css",
      "element-plus/es/components/checkbox-group/style/css",
      "element-plus/es/components/checkbox/style/css",
      "element-plus/es/components/tabs/style/css",
      "element-plus/es/components/tab-pane/style/css",
      "element-plus/es/components/rate/style/css",
      "element-plus/es/components/date-picker/style/css",
      "element-plus/es/components/notification/style/css",
      "element-plus/es/components/image/style/css",
      "element-plus/es/components/statistic/style/css",
      "element-plus/es/components/watermark/style/css",
      "element-plus/es/components/config-provider/style/css",
      "element-plus/es/components/text/style/css",
      "element-plus/es/components/drawer/style/css",
      "element-plus/es/components/color-picker/style/css"
    ]
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 自动导入定制化样式文件进行样式覆盖
        additionalData: `
          @use "@/assets/css/index.scss" as *;
        `
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxtb3ZpZS10aWNrZXRpbmctc3lzdGVtXFxcXG1vdmllLXRpY2tldGluZy1zeXN0ZW1cXFxcdnVlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxtb3ZpZS10aWNrZXRpbmctc3lzdGVtXFxcXG1vdmllLXRpY2tldGluZy1zeXN0ZW1cXFxcdnVlXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9tb3ZpZS10aWNrZXRpbmctc3lzdGVtL21vdmllLXRpY2tldGluZy1zeXN0ZW0vdnVlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcclxuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcclxuaW1wb3J0IEVsZW1lbnRQbHVzIGZyb20gJ3VucGx1Z2luLWVsZW1lbnQtcGx1cy92aXRlJ1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICB2dWUoKSxcclxuICAgIC8vIFx1NjMwOVx1OTcwMFx1NUI5QVx1NTIzNlx1NEUzQlx1OTg5OFx1OTE0RFx1N0Y2RVxyXG4gICAgRWxlbWVudFBsdXMoe1xyXG4gICAgICB1c2VTb3VyY2U6IHRydWUsXHJcbiAgICB9KSxcclxuICAgIEF1dG9JbXBvcnQoe1xyXG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKHsgaW1wb3J0U3R5bGU6ICdzYXNzJyB9KV0sXHJcbiAgICB9KSxcclxuICAgIENvbXBvbmVudHMoe1xyXG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKHsgaW1wb3J0U3R5bGU6ICdzYXNzJyB9KV0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIC8vIFx1OTg4NFx1NTJBMFx1OEY3RFx1OTg3OVx1NzZFRVx1NUZDNVx1OTcwMFx1NzY4NFx1N0VDNFx1NEVGNlxyXG4gIG9wdGltaXplRGVwczoge1xyXG4gICAgaW5jbHVkZTogW1xyXG4gICAgICBcInZ1ZVwiLFxyXG4gICAgICBcInZ1ZS1yb3V0ZXJcIixcclxuICAgICAgXCJheGlvc1wiLFxyXG4gICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL2Jhc2Uvc3R5bGUvY3NzXCIsXHJcbiAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvbWVzc2FnZS9zdHlsZS9jc3NcIixcclxuICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9tZXNzYWdlLWJveC9zdHlsZS9jc3NcIixcclxuICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9mb3JtL3N0eWxlL2Nzc1wiLFxyXG4gICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL2Zvcm0taXRlbS9zdHlsZS9jc3NcIixcclxuICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9idXR0b24vc3R5bGUvY3NzXCIsXHJcbiAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvaW5wdXQvc3R5bGUvY3NzXCIsXHJcbiAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvaW5wdXQtbnVtYmVyL3N0eWxlL2Nzc1wiLFxyXG4gICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL3N3aXRjaC9zdHlsZS9jc3NcIixcclxuICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy91cGxvYWQvc3R5bGUvY3NzXCIsXHJcbiAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvbWVudS9zdHlsZS9jc3NcIixcclxuICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9jb2wvc3R5bGUvY3NzXCIsXHJcbiAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvaWNvbi9zdHlsZS9jc3NcIixcclxuICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9yb3cvc3R5bGUvY3NzXCIsXHJcbiAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvdGFnL3N0eWxlL2Nzc1wiLFxyXG4gICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL2RpYWxvZy9zdHlsZS9jc3NcIixcclxuICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9sb2FkaW5nL3N0eWxlL2Nzc1wiLFxyXG4gICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL3JhZGlvL3N0eWxlL2Nzc1wiLFxyXG4gICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL3JhZGlvLWdyb3VwL3N0eWxlL2Nzc1wiLFxyXG4gICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL3BvcG92ZXIvc3R5bGUvY3NzXCIsXHJcbiAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvc2Nyb2xsYmFyL3N0eWxlL2Nzc1wiLFxyXG4gICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL3Rvb2x0aXAvc3R5bGUvY3NzXCIsXHJcbiAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvZHJvcGRvd24vc3R5bGUvY3NzXCIsXHJcbiAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvZHJvcGRvd24tbWVudS9zdHlsZS9jc3NcIixcclxuICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9kcm9wZG93bi1pdGVtL3N0eWxlL2Nzc1wiLFxyXG4gICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL3N1Yi1tZW51L3N0eWxlL2Nzc1wiLFxyXG4gICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL21lbnUtaXRlbS9zdHlsZS9jc3NcIixcclxuICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9kaXZpZGVyL3N0eWxlL2Nzc1wiLFxyXG4gICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL2NhcmQvc3R5bGUvY3NzXCIsXHJcbiAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvbGluay9zdHlsZS9jc3NcIixcclxuICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9icmVhZGNydW1iL3N0eWxlL2Nzc1wiLFxyXG4gICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL2JyZWFkY3J1bWItaXRlbS9zdHlsZS9jc3NcIixcclxuICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy90YWJsZS9zdHlsZS9jc3NcIixcclxuICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy90cmVlLXNlbGVjdC9zdHlsZS9jc3NcIixcclxuICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy90YWJsZS1jb2x1bW4vc3R5bGUvY3NzXCIsXHJcbiAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvc2VsZWN0L3N0eWxlL2Nzc1wiLFxyXG4gICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL29wdGlvbi9zdHlsZS9jc3NcIixcclxuICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9wYWdpbmF0aW9uL3N0eWxlL2Nzc1wiLFxyXG4gICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL3RyZWUvc3R5bGUvY3NzXCIsXHJcbiAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvYWxlcnQvc3R5bGUvY3NzXCIsXHJcbiAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvcmFkaW8tYnV0dG9uL3N0eWxlL2Nzc1wiLFxyXG4gICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL2NoZWNrYm94LWdyb3VwL3N0eWxlL2Nzc1wiLFxyXG4gICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL2NoZWNrYm94L3N0eWxlL2Nzc1wiLFxyXG4gICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL3RhYnMvc3R5bGUvY3NzXCIsXHJcbiAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvdGFiLXBhbmUvc3R5bGUvY3NzXCIsXHJcbiAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvcmF0ZS9zdHlsZS9jc3NcIixcclxuICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9kYXRlLXBpY2tlci9zdHlsZS9jc3NcIixcclxuICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9ub3RpZmljYXRpb24vc3R5bGUvY3NzXCIsXHJcbiAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvaW1hZ2Uvc3R5bGUvY3NzXCIsXHJcbiAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvc3RhdGlzdGljL3N0eWxlL2Nzc1wiLFxyXG4gICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL3dhdGVybWFyay9zdHlsZS9jc3NcIixcclxuICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9jb25maWctcHJvdmlkZXIvc3R5bGUvY3NzXCIsXHJcbiAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvdGV4dC9zdHlsZS9jc3NcIixcclxuICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9kcmF3ZXIvc3R5bGUvY3NzXCIsXHJcbiAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvY29sb3ItcGlja2VyL3N0eWxlL2Nzc1wiLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXHJcbiAgICB9XHJcbiAgfSxcclxuICBjc3M6IHtcclxuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgc2Nzczoge1xyXG4gICAgICAgIC8vIFx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NVx1NUI5QVx1NTIzNlx1NTMxNlx1NjgzN1x1NUYwRlx1NjU4N1x1NEVGNlx1OEZEQlx1ODg0Q1x1NjgzN1x1NUYwRlx1ODk4Nlx1NzZENlxyXG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgXHJcbiAgICAgICAgICBAdXNlIFwiQC9hc3NldHMvY3NzL2luZGV4LnNjc3NcIiBhcyAqO1xyXG4gICAgICAgIGAsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNWLFNBQVMsZUFBZSxXQUFXO0FBRXpYLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQUNwQyxPQUFPLGlCQUFpQjtBQVArTCxJQUFNLDJDQUEyQztBQVV4USxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUE7QUFBQSxJQUVKLFlBQVk7QUFBQSxNQUNWLFdBQVc7QUFBQSxJQUNiLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxvQkFBb0IsRUFBRSxhQUFhLE9BQU8sQ0FBQyxDQUFDO0FBQUEsSUFDMUQsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLG9CQUFvQixFQUFFLGFBQWEsT0FBTyxDQUFDLENBQUM7QUFBQSxJQUMxRCxDQUFDO0FBQUEsRUFDSDtBQUFBO0FBQUEsRUFFQSxjQUFjO0FBQUEsSUFDWixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBO0FBQUEsUUFFSixnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsTUFHbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
