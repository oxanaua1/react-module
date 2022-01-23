import {url} from "../configs/urls";
import {axiosService} from "./axios.service";

export const userService = {
    getAll: () => axiosService.get(url.users).then(value => value.data),
    getById: (id) => axiosService.get(`${url.users}/${id}`).then(value => value.data),
    getPostsByUserId: (id) => axiosService.get(`${url.users}/${id}/posts`).then(value => value.data),
    getAlbumsByUserId: (id) => axiosService.get(`${url.users}/${id}/albums`).then(value => value.data)
}

