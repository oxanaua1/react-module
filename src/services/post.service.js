import {urls} from '../configs';
import {axiosService} from './axios.service';


export const postService = {

    getAll: () => axiosService.get(urls.posts).then(value => value.data)

}
