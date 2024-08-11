<template>

 <el-button plain @click="store.sevainproducts">
    添加
  </el-button>
  <el-dialog v-model="store.dialogFormVisible"  width="800" style="display: flex;justify-content: center;align-items: center; ">
   
  <el-form
    ref="ruleFormRef"
    style="width: 500px; height: 615px;"
    :model="store.products"
    label-width="auto"
    class="demo-ruleForm"
   
    status-icon
  >
    <el-form-item label="图片" style="height: 200px;width: 200px;"  prop="imageURL">
      <el-upload  
        class="avatar-uploader"  
        :http-request="store.customUpload"  
        :show-file-list="false"  
        :on-success="store.handleAvatarSuccess"  
        :before-upload="store.beforeAvatarUpload"  
      >  
	    <img v-if="store.image" :src="store.image" class="avatar" style="height: 200px;width: 200px;" />
      <el-icon v-else class="avatar-uploader-icon" style="height: 200px;width: 200px;" ><Plus /></el-icon>    
      </el-upload> 
    </el-form-item>
    <!-- <div style="width: 100px; height: 100px;" >     {{ store.catnametest }}</div> -->
    <el-form-item label="名称" prop="prductName">
      <el-input v-model="store.products.productName" />
   
    </el-form-item>
    <el-form-item label="分类" prop="categoryName">
      
      <el-select-v2
        v-model="store.products.categoryId"
        placeholder="Activity count"
        :options="store.catname"
      />
    </el-form-item>
    <el-form-item label="商家" prop="usersName">
      <el-select-v2
        v-model="store.products.usersId"
        placeholder="Activity count"
        :options="store.username"
      />
    </el-form-item>
    <el-form-item label="库存" prop="stockQuantity">
      <el-input v-model="store.products.stockQuantity" />
    </el-form-item>
    <el-form-item label="价格" prop="price">
      <el-input v-model="store.products.price" />
    </el-form-item>
    <el-form-item label="状态" prop="status">
      <el-segmented v-model="store.products.status" :options="store.locationOptions" />
    </el-form-item>
    <el-form-item label="描述" prop="description">
      <el-input v-model="store.products.description" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="store.seva">
        Create
      </el-button>
      <el-button @click="store.reset">Reset</el-button>
    </el-form-item>
  </el-form>


  </el-dialog>

	  <div >
 
    <el-table :data="store.tableData" border style="width: 100%">
      <el-table-column  type="selection" width="55">
    </el-table-column>
      <el-table-column  prop="id" align="center"  label="编号" width="80">
      </el-table-column>
      <el-table-column   prop="productName" align="center" label="名称" width="100">
      </el-table-column>
	  <el-table-column  prop="imageurlcopy" align="center" label="图片" width="120"  >
      <template #default="scope">  
        <img v-if="scope.row.imageurlcopy" :src="scope.row.imageurlcopy"  :alt="scope.row.productName" style="width: 100%; height: auto; display: block;">
         
      </template>   
	  </el-table-column>
      <el-table-column
        prop="updateTime"
        align="center"
        label="更改时间"
        width="100"
       
      >
      </el-table-column>
      <el-table-column  prop="stockQuantity" align="center" label="库存" width="80">
      </el-table-column>
      <el-table-column  prop="price" align="center" label="价格" width="80">
      </el-table-column>
	  <el-table-column  prop="categoryName" align="center" label="分类" width="100">
      </el-table-column>
      <el-table-column  prop="usersName" align="center" label="商家" width="100">
      </el-table-column>
      <el-table-column  prop="status" align="center" label="状态" width="100">
      </el-table-column>
      <el-table-column  prop="description" align="center" label="描述" width="180">
      </el-table-column>
      
     <el-table-column  label="操作"  #default="scope">
		<el-button @click="store.edit(scope.row.id)" prop="bianjis" class="aa" type="success">编辑</el-button>
    	<el-button @click="store.delete(scope.row.id)" class="aa" type="danger">删除</el-button><br>
      
      <el-button v-if="scope.row.status=='审核中'"  @click="store.enable(scope.row.id,'Shelves')"  type="primary">通过</el-button>
      <el-button v-if="scope.row.status=='审核中'" @click="store.enable(scope.row.id,'NotShelves')" type="info">拒绝</el-button>
    </el-table-column>
    </el-table>
	<div class="el-pagination1">
    <div   style=" text-align:center;margin-top:30px">
      
      <el-pagination background 
      
      @current-change="store.handleCurrentChange"  
      :current-page="store.paginationcurrentPage"  
      
      :page-count="store.paginationpagercount"
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
import { ref } from 'vue';
import {fen22store} from '../store/fen22store'
import { Plus } from '@element-plus/icons-vue'; 
const store = fen22store()

onMounted(()=>{
  
  store.selectSeller()
  store.selectCategory()
  store.selectProduct(1)
 
  })

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
  
  
  
  