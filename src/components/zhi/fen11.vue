<template>
	<el-card v-model="store.orderdetails" style="max-width: 480px">
	  <p>{{ store.orderdetails.id }}</p>
	</el-card>
  </template>
	
  <script lang="ts" setup>  
  import { ref } from 'vue';  
  import token from '../apis/token'; // 确保您已经安装并导入了axios  
  import { ElMessage } from 'element-plus';  
  import { Plus } from '@element-plus/icons-vue';  
  import { useToast } from 'vue-toastification';
  import {fen23store} from '../store/fen23store'
const store = fen23store()
 
  const toast = useToast();  
  function showToast (){  
	toast.success('操作成功！', {  
		position: 'top-right',  
		duration: 3000,  
		closeOnClick: true,  
		// 其他选项...  
	});  
    } 
  </script>  
	
  <style scoped>  
  /* 样式代码 */  
  </style>