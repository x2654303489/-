<template>  
    	<el-table :data="store.sysMenu" style="width: 100%">
	  <el-table-column label="编号" prop="id" />
	  <el-table-column label="权限" prop="menuName" />
	  <el-table-column label="状态" prop="status" />
	  <el-table-column label="更改时间" prop="createTime" />
	  <el-table-column align="right">
		<template #header>
		  <el-input v-model="store.search" size="small" placeholder="Type to search" />
		</template>
		<template #default="scope">
		  <el-button size="small" @click="store.update(scope.$index, scope.row)">
			启用
		  </el-button>
		  <el-button size="small" @click="Edit(scope.$index, scope.row),dialogFormVisible">
			编辑
		  </el-button>
		  <el-button
			size="small"
			type="danger"
			@click="Delete(scope.$index, scope.row)"
		  >
			删除
		  </el-button>
  
		</template>
	  </el-table-column>
	</el-table>
</template>  
	
  <script setup lang="ts">  
  import { onMounted, ref } from 'vue';  
  import {fen31store} from "../store/fen31store"
  // 逻辑代码
  const store = fen31store()
    onMounted(() => {
      store.selectdivide(1)
  })
  
    
  

  // token()

  </script>  
	
  <style>  
  /* 样式 */  
  </style>