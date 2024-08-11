<template>
	<el-button plain @click="selectdialogFormVisible  ">
	  添加
	</el-button>
	<el-dialog v-model="store.dialogFormVisible" title="新建分类" width="500">
	  <el-form :model="store.form">
		<el-form-item label="分类名称" :label-width="formLabelWidth">
		  <el-input v-model="store.form.categoryName" autocomplete="off" />
		</el-form-item>
  
	  </el-form>
	  <template #footer>
		<div class="dialog-footer">
		  <el-button @click="store.dialogFormVisible = false">Cancel</el-button>
		  <el-button type="primary" @click="Confirm">
			Confirm
		  </el-button>
		</div>
	  </template>
	</el-dialog>
  
	<el-table :data="store.sysRole" style="width: 100%">
	  <el-table-column label="编号" prop="id" />
	  <el-table-column label="身份" prop="roleName" />
	  <el-table-column label="状态" prop="status" />
	  <el-table-column label="更改时间" prop="createTime" />
	  <el-table-column align="right">
		<template #header>
		  <el-input v-model="store.search" size="small" placeholder="Type to search" />
		</template>
		<template #default="scope">
		  <el-button size="small" @click="store.handleupdate(scope.$index, scope.row)">
			启用
		  </el-button>
		  <el-button size="small" @click="handleEdit(scope.$index, scope.row),dialogFormVisible">
			编辑
		  </el-button>
		  <el-button
			size="small"
			type="danger"
			@click="handleDelete(scope.$index, scope.row)"
		  >
			删除
		  </el-button>
  
		</template>
	  </el-table-column>
	</el-table>
  </template>
  
  <script lang="ts" setup>
  import { computed, ref } from 'vue'
  import axios from '../apis/token';
  import { onMounted } from 'vue';  
  import { reactive } from 'vue';

import { fen32store } from '../store/fen32store';  
  
const store = fen32store();  
  
onMounted(()=>{
	
	store.selectdivide(1)
})

  </script>
  