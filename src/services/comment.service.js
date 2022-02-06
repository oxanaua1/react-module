import {urls} from '../configs';
import {axiosService} from './axios.service';


export const commentService = {

    getAll: () => axiosService.get(urls.comments).then(value => value.data)

}
