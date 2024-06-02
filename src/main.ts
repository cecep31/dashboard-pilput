import './assets/base.css'
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueECharts from 'vue-echarts'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component("v-chart", VueECharts)
app.use(createPinia())
app.use(router)
app.mount('#app')
