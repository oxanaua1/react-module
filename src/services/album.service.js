import {url} from "../configs/urls";
import {axiosService} from "./axios.service";

export const albumService = {

    getByIdPhotos: (albumId) => axiosService.get(`${url.albums}/${albumId}/photos`).then(value => value.data)

}

