import axios from 'axios';
import store from '../store/store';
import { setRequestState } from '../store/actions/movies';

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    // params:{
    //     api_key: 'cd5cc4af3750ab19c216b0a7f80654a9'
    // }
})

axiosInstance.interceptors.response.use(function(response){
    if(response.data.results!=null){
        let movieList = response.data.results;
            movieList.forEach(list => {
                list.liked = false;
            })
    }
    return response
}, function(error){
    return Promise.reject(error);
})

export default axiosInstance