import {urls} from "../configs/urls";
import {axiosService} from "./axios.service";

export const characterService = {
    getAll: () => axiosService.get(urls.character).then(value => value.data),
    getById: (id) => axiosService.get(`urls.character/${id}`).then(value => value.data),

}