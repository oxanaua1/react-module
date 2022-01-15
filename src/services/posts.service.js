import {urls} from "../config/urls";

const getAllByUserId = (id) => {
 return    fetch(`${urls.posts}?userId=${id}`)
        .then(value => value.json())


}

export const postsService = {
    getAllByUserId
}