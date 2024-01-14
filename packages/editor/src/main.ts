import Editor from './Editor.vue'
import type { App } from 'vue'
export * from './type';
export default {
  install: (app: App) => {
    app.component(Editor.name, Editor)
  }
}
