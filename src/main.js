import { createApp } from 'vue'
import router from 'router'
import store from './store'
import 'normalize.css'
import 'styles/index.scss'
import 'styles/global.less'
// import 'styles/mobile.css'
import 'element-plus/dist/index.css'
import ElementPlus from './plugins/element-plus'
import App from './App.vue'
import useRequest from './hooks/useRequest'

// createApp(App).use(router).use(store).mount('#app')
createApp(App).use(ElementPlus).use(useRequest).use(router).use(store).mount('#app')
