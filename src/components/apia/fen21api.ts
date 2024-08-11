// src/api/categoryApi.ts  
import axios from '../apis/token'; // 假设您已经配置了axios实例  
  
const fen21api = {  
  fetchCategories: (id?: number) => {  
    let url = `/categories/selectid?id=${id || 0},status=0`;  
    return axios.get(url);  
  },
  selectdivide: (id?: number) => {
    let url = `/categories/selectdivide?id=${id || 0}`;  
    return axios.get(url);  
  
  },
  deleteCategory: (id: number) => {  
    const url = `/categories/delete?id=${id}`;  
    return axios.delete(url);  
  },  
  updateCategoryState: (id: number, state: number) => {  
    const url = `/categories/updatestate`;  
    const data = { id, state };  
    return axios.put(url, data);  
  },  
  // 其他API方法...  
};  
  
export default fen21api;