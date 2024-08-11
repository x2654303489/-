<template>
  <el-button plain @click="store.inset">
    添加
  </el-button>

  <el-dialog v-model="store.dialogFormVisible" title="Shipping address" width="500">
    <el-form :model="store.usersfrom">
      <el-form-item label="Promotion name" :label-width="120">
        <el-input v-model="store.usersfrom.username" autocomplete="off" />
      </el-form-item>
      <el-select v-model="store.value" placeholder="Select" style="width: 240px">
    <el-option
      v-for="item in store.cities"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>

	  <div >
	<!-- <div style="margin: 0 auto; width:900px;height: 100%;margin-top: 30px;">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="姓名">
    <el-input v-model="formInline.username" placeholder="请输入姓名"></el-input>
  </el-form-item>
  <el-form-item label="地址">
    <el-input v-model="formInline.phoneNumber" placeholder="请输入地址"></el-input>
  </el-form-item>
  
  <el-form-item>
    <el-button type="primary" @click="top" >查询</el-button>
    <el-button type="xxxx"  @click="reset" >重置</el-button>
    <el-button plain @click="dialogFormVisible = true">添加</el-button>
  </el-form-item>
  
	</el-form>
	</div> -->
    <el-table :data="store.users" border style="width: 100%">
      <el-table-column  type="selection" width="55">
    </el-table-column>
      <el-table-column prop="id" align="center" label="编号" width="80">
      </el-table-column>
      <el-table-column prop="username" align="center" label="姓名" width="120">
      </el-table-column>
	  <el-table-column prop="gender" align="center" label="性别" width="90">
	  </el-table-column>
      <el-table-column
        prop="birthday"
        align="center"
        label="出生日期"
        width="100"
      >
      </el-table-column>
      <el-table-column prop="phoneNumber" align="center" label="电话" width="180">
		  </el-table-column>
	  <el-table-column prop="email" align="center" label="邮箱" width="180">
      </el-table-column>
      <el-table-column prop="address" align="center" label="地址" width="180">
      </el-table-column>
     <el-table-column  label="操作"  #default="scope">
		<el-button @click="bianji(scope.row)" prop="bianjis" class="aa" type="success">编辑</el-button>
		<el-button class="aa" @click="verify(scope.row)" type="primary">启用</el-button>
    	<el-button @click="deleteuser(scope.row)" class="aa" type="danger">删除</el-button>
    </el-table-column>
    </el-table>
    <div class="el-pagination1">
    <div   style=" text-align:center;margin-top:30px">
      
      <el-pagination background 
      
      @current-change="store.currentchange"  
      :current-page="store.currentPage"  
      
      :page-count="store.pagercount"
      layout=" prev, pager, next, jumper"  
      >  
      
      </el-pagination>
    </div>
	</div>
  </div>
  </template>
  
  <script lang="ts" setup>
  import { th } from 'element-plus/es/locale';
  import { reactive } from 'vue';
  import { onMounted } from 'vue';
  import { ref ,watch } from 'vue';  
  import {fen33store} from "../store/fen33store"
  const store = fen33store();
// // 使用onMounted来调用你的函数  
  onMounted(() => {  
    store.selectdivide(1)
  });  

  watch(store.value, (val) =>{
      if (val.length === 0) {
        store.checkAll.value = false
        store.indeterminate.value = false
      } else if (val.length === store.cities.value.length) {
        store.checkAll.value = true
        store.indeterminate.value = false
      } else {
        store.indeterminate.value = true
      }
    })

const handleCheckAll = (val: CheckboxValueType) => {
  store.indeterminate.value = false
  if (val) {
    store.value.value = store.cities.value.map((_) => _.value)
  } else {
    store.value.value = []
  }
}

  </script>
  <style scoped>
/*  .aa{
	  width: 60px;
	  height: 30px;
  } */
  .el-pagination1{
	width: 400px;
	margin: 0 auto;
  }
  </style>
  