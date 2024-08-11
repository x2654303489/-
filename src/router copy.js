import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Login from './components/zhi/login.vue'
import Zhuche from './components/zhi/zhuche.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/zhuche', component: Zhuche },
  { path: '/home', component: Home,
	  children: [
		  {
			path: '',
			component: ()=>import( './components/zhi/fen11.vue')
		  },
		  {
			path: 'fen12',
			component: ()=>import( './components/zhi/fen12.vue')
		  },
		  {
			path: 'fen13',
			component: ()=>import( './components/zhi/fen13.vue')
		  },	
		  {
			path: 'fen21',
			component: fen21,
			children: [
			{
				path: '/',
				component: ()=>import( './components/zhi/fen21_1.vue')
			},
			{
				path: '/fen21_2',
				component: ()=>import( './components/zhi/fen21_2.vue')
			},
			
			]
		  },	
		  {
			path: 'fen22',
			component: ()=>import( './components/zhi/fen22.vue')
		  },
		  {
			path: 'fen23',
			component: ()=>import( './components/zhi/fen23.vue')
		  },
		  {
			path: 'fen24',
			component: ()=>import( './components/zhi/fen24.vue')
		  },
		  {
			path: 'fen25',
			component: ()=>import( './components/zhi/fen25.vue')
		  },	
		  {
			path: 'fen26',
			component: ()=>import( './components/zhi/fen26.vue')
		  },	
		  {
			path: 'fen31',
			component: ()=>import( './components/zhi/fen31.vue')
		  },	
		  {
			path: 'fen32',
			component: ()=>import( './components/zhi/fen32.vue')
		  },	
		  {
			path: 'fen33',
			component: ()=>import( './components/zhi/fen33.vue')
		  },				  
	 ]
  
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router