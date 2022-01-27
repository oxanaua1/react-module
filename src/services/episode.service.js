import {urls} from "../configs/urls";
import {axiosService} from "./axios.service";

export const episodeService = {
    getAll: () => axiosService.get(urls.episode).then(value => value.data),
    
}