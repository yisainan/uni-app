import Vue from 'vue'
import App from './App'
import webUni from './static/web-view.js'
Vue.prototype.$webUni = webUni;
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
