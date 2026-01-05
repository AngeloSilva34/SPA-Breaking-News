import axios from "axios";

const baseURL = 'http://localhost:3001'

function getAllNews() {
    const response = axios.get(`${baseURL}/news`)
    return response
}

function getTopNews() {
    const response = axios.get(`${baseURL}/news/top`)
    return response
}

function getSearchNews(name) {
    const response = axios.get(`${baseURL}/news/search?name=${name}`)
    return response
}

export {
    getAllNews,
    getTopNews,
    getSearchNews
}