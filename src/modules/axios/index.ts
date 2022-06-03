import axios from "axios"

export const instance = axios.create({
    baseURL: 'https://swapi.dev/api/',
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
    }
});