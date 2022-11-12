import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    // params:{
    //     api_key: 'cd5cc4af3750ab19c216b0a7f80654a9'
    // }
})

export default axiosInstance