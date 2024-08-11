// src/api/categoryApi.ts  
import axios from '../apis/token'; // 假设您已经配置了axios实例  
  
const fen22api = {  
  selctProduct: (id?: number) => {  
    let url = `/products/selectid?id=${id}`;  
    return axios.get(url);  
  },  
  deleteProduct: (id: number) => {
    let url = `/products/delete?id=${id}`;  
    return axios.delete(url);
  },
  insetProduct : (data )=> {
    let url = `/products/insert`; 
      // 假设这是要发送的数据
    return axios.post(url,data);
  },
  updateProduct : (data)=>{
    let url = `/products/updata`; 
      // 假设这是要发送的数据
    return axios.put(url,data);
  }
  // 其他API方法...  
};  
  
export default fen22api;