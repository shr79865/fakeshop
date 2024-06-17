import axios from "axios";

export const axiosApi = axios.create({
    baseURL: "https://fakestoreapi.com",
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});