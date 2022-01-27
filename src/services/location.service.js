import {urls} from "../configs/urls";
import {axiosService} from "./axios.service";

export const locationService = {
    getAll: () => axiosService.get(urls.location).then(value => value.data),
    
}