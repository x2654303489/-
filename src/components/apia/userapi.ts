import axios from '../apis/token'; // 假设您已经配置了axios实例  
  
const userapi = {  
  selectuser: (Username : string,phoneNumber : string) => {  
    let url = `/users/select`;  
    let data = {Username,phoneNumber}
    return axios.post(url,data);  
  }  
 
  // 其他API方法...  
};  
  
export default userapi;