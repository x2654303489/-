import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/zhi/Home.vue'
import Login from './components/zhi/login.vue'
import Zhuche from './components/zhi/zhuche.vue'
import fen11 from './components/zhi/fen11.vue'
import fen12 from './components/zhi/fen12.vue'
import fen13 from './components/zhi/fen13.vue'
import fen21 from './components/zhi/fen21.vue'
import fen22 from './components/zhi/fen22.vue'
import fen23 from './components/zhi/fen23.vue'
import fen31 from './components/zhi/fen31.vue'
import fen32 from './components/zhi/fen32.vue'
import fen33 from './components/zhi/fen33.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/zhuche', component: Zhuche },
  { path: '/home', component: Home,
    children: [
      { path: '', component: fen11 },
      { path: 'fen12', component: fen12 },
      { path: 'fen13', component: fen13 },
      {
        path: 'fen21',component: fen21
      },
      { path: 'fen22', component: fen22 },
      { path: 'fen23', component: fen23 },

      { path: 'fen31', component: fen31 },
      { path: 'fen32', component: fen32 },
      { path: 'fen33', component: fen33 },
	
    ],}
]
const router = createRouter({
	history: createWebHistory(),
	routes,
  })
  
  export default router