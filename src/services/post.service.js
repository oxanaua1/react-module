import {url} from "../configs/urls";
import {axiosService} from "./axios.service";

export const postService = {
    getAll: () => axiosService.get(url.posts).then(value => value.data),
    getById: (id) => axiosService.get(`${url.posts}/${id}`).then(value => value.data),
    getCommentsByPostId: (id) => axiosService.get(`${url.posts}/${id}/comments`).then(value => value.data)
}

