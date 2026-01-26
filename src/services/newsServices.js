import axios from "axios";
import Cookies from 'js-cookie'

const baseNewsURL = 'http://localhost:3001/news'

function getAllNews() {
    const response = axios.get(baseNewsURL)
    return response
}

function getTopNews() {
    const response = axios.get(`${baseNewsURL}/top`)
    return response
}

function getSearchNews(name) {
    const response = axios.get(`${baseNewsURL}/search?name=${name}`)
    return response
}

function getNewsByUser() {
    const response = axios.get(`${baseNewsURL}/byUser`, {
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
        }
    })
    return response
}

function createNews(body) {
    const response = axios.post(`${baseNewsURL}/post`, body, {
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
        }
    })
    return response
}

function getNewsById(id) {
    const response = axios.get(`${baseNewsURL}/byId/${id}`, {
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
        }
    })
    return response
}

function editNews(body, id){
    const response = axios.patch(`${baseNewsURL}/update/${id}`, body, {
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
        }
    })
    return response
}

function deleteNews(id) {
    const response = axios.delete(`${baseNewsURL}/delete/${id}`, {
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
        }
    })
    return response
 }
export {
    getAllNews,
    getTopNews,
    getSearchNews,
    getNewsByUser,
    createNews,
    getNewsById,
    editNews,
    deleteNews
}