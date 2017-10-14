// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from "axios"
import axiosVue from "vue-axios"

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import router from './router'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(axiosVue,axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
