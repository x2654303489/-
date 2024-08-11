<template>
  <el-dialog v-model="store.open">
    
      <p> {{ store.orderdetails }}</p>

  </el-dialog>
  <el-table :data="store.orders" style="width: 100%">
    <el-table-column label="订单号" prop="orderNumber" />
    <el-table-column label="用户" prop="usersId" />
    <el-table-column label="订单状态" prop="teatus" />
    <el-table-column label="订单金额" prop="totalAmount" />
    <el-table-column label="创建时间" prop="createTime" />
    <el-table-column align="right">
      <template #header>
        <el-input v-model="store.search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <el-button size="small" @click="store.detail(scope.row.id)">
          详情
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
import {fen23store} from "../store/fen23store"
// 定义你需要在组件挂载时运行的函数  
const store =  fen23store()
// 使用onMounted来调用你的函数  
onMounted(() => {  
  store.selectorders(1)
});  

</script>
