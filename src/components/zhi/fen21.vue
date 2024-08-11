<template>
  <el-button plain @click="store.inset">
    添加
  </el-button>
  <el-dialog v-model="store.selectdialogFormVisible"  width="500">
    <el-form :model="store.categoriesfrom">
      <el-form-item label="分类名称" :label-width="120">
        <el-input v-model="store.categoriesfrom.categoryName" autocomplete="off" style="width: 270px;" />
      </el-form-item>
      <el-form-item label="状态" :label-width="120">
        <el-switch
          v-model="store.categoriesfrom.isStatus"
          class="ml-2"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="store.selectdialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="store.confirm">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
  <el-table :data="store.categories" style="width: 100%">
    <el-table-column label="商品" prop="categoryName" />
    <el-table-column label="状态" prop="status" />
    <el-table-column label="更改时间" prop="createTime" />
    <el-table-column align="right">
      <template #header>
        <el-input v-model="store.search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <el-button size="small" @click="store.updatestate(scope.row.id, scope.row.isStatus)">
          启用
        </el-button>
        <el-button size="small" @click="store.edit(scope.row.id)">
          编辑
        </el-button>
        <el-button
          size="small"
          type="danger"
          @click="store.delete(scope.row.id)"
        >
          删除
        </el-button>

      </template>
    </el-table-column>
  </el-table>
  <div class="example-pagination-block" style="text-align:center">
    <el-pagination layout="prev, pager, next" 
    @current-change="store.currentchange"  
      :current-page="store.currentPage"  
      
      :page-count="store.pagercount" 
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import axios from 'axios';
import { onMounted } from 'vue';  
import { reactive } from 'vue';
import { fen21store } from '../store/fen21store';
const store = fen21store();


onMounted(() => {
   store.selectCategories("1");
});  
// interface User {
//   createTime: string
//   categoryName: string
// }
// const User = defineProps<User>()
// const search = ref('')
// const filterTableData = computed(() =>
//   tableData.filter(
//     (data) =>
//       !search.value ||
//       data.categoryName.toLowerCase().includes(search.value.toLowerCase())
//   )
// )
// const update = (form1)=> {
//   let url = `/categories/update`; 
//   axios.put(url,form1)
//   .then((res) => {
//     gettableData(0)
//     dialogFormVisible.value=false
//     alert('修改成功')
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// }
// const insert = (form1)=> {
// let url = `/categories/insert`; 
// axios.post(url,form1)
// .then((res) => {
//   gettableData(0)
//   dialogFormVisible.value=false
//   alert('添加成功')
// })
// .catch((err) => {
//   console.log(err);
// });
// }
// const deletes = (id)=> {
// let url = `/categories/delete?id=${id}`; 
// axios.delete(url)
// .then((res) => {
//   gettableData(0)
//   alert('删除成功')
// })
// .catch((err) => {
//   console.log(err);
// });
// }
// const updatestate = (state,id)=> {
//   form.state=state
//   form.categoryID =id
//   let url = `/categories/updatestate`; 
// axios.put(url,form)
// .then((res) => {
//   gettableData(0)

// })
// .catch((err) => {
//   console.log(err);
// });
// }

// const Confirm = () => {
//   if (form.categoryID==0){insert(form)}else{update(form)}  
// }
// const handleupdate = (index: number, row: User) => {
//   if (row.state=='启用'){
//     updatestate(0,row.categoryID)
//   } else {
//     updatestate(1,row.categoryID)
//   }
// }

// const selectdialogFormVisible = () => {
//   dialogFormVisible.value=true
//   form.categoryName=''
//   form.categoryID=0
// }
// const handleEdit = (index: number, row: User) => {
//   dialogFormVisible.value=true
//   gettableData(row.categoryID)
// }

// const handleDelete = (index: number, row: User) => {
//   deletes(row.categoryID)
// }

// let tableData = reactive<any[]>([]);
// const gettableData =  (AA) => {
//   let url = `/categories/selectid?id=${AA}`; 
//   axios.get(url)
//   .then((res) => {
//     if(AA==0){
//      let temp = res.data.data
//      const updatedArray = temp.map(item => {  
//         return {  
//           ...item,
//           state: item.state === 1 ? '启用' : '禁用',
//         };  
//       });  
     
//      tableData.splice(0, tableData.length, ...updatedArray);
//      console.log(tableData)
//     }
//     else{
//       form.categoryName=res.data.data.categoryName
//       form.categoryID=res.data.data.categoryID
//     }

//   })
//   .catch((err) => {
//     console.log(err);
//   });

// }
// const dialogFormVisible = ref(false)
// const formLabelWidth = '140px'
// const form = reactive({
//   categoryID:0,
//   categoryName: '',
//   state:0
// })

</script>
