import axios from "axios";

const baseURL = 'http://localhost:3001'

function getAllNews() {
    const response = axios.get(`${baseURL}/news`)
    return response
}

export {
    getAllNews
}