import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index.vue'
// import Main from "../components/main.vue"


Vue.use(Router)
export default new Router({
  routes:[
	  {
	  	 name:"index",
	  	 path:"/",
	  	 component:Index
	  }
  ]
})

