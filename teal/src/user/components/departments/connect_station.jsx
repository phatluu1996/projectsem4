import axios from 'axios';

export default api = axios.create({
    baseURL:'http://localhost:8080/api'
  });


// export const getDepartment = async () => {
//     api.get('/').then(res =>{
//         console.log(res.data)
//         this.se
//     })
// }