import {IUser} from "../interfaces/user.interface";
import axios, {AxiosResponse} from "axios";

// export const userService = (): Promise<IUser[]> => fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json())

export const userService = {
    getAll: (): Promise<AxiosResponse<IUser[]>> => axios.get('https://jsonplaceholder.typicode.com/users')
}