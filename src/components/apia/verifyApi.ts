import axios from "../apis/token";
interface UpdateUserParams {  
    user: any; // 替换为具体的类型，如 string, number, 或其他对象类型  
    state?: number; // state 是可选的，且类型为 number  
  }  
const verifyApi = {
    updata: (params: UpdateUserParams): Promise<any> =>{ 
        let url = `/categories/selectpro`;  
        let { user, state = "" } = params;
        let data = {user,state}
        return axios.put(url,data);  
      }, 
    
}
export default verifyApi;