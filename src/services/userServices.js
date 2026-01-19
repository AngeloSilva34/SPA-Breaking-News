import axios from "axios";
import Cookies from "js-cookie";

const baseURL = 'http://localhost:3001'

function generateUserName(name) {
    const formatedName = name.replace(/\s/g, '').toLowerCase()
    const randomNumber = Math.floor(Math.random() * 1000)
    return `${formatedName}-${randomNumber}`
}

function signup(data) {
    delete data.confirmPassword
    const body = { ...data, username: generateUserName(data.name) }

    const response = axios.post(`${baseURL}/user/create`, body)
    return response
}

function signin(data) {
    const response = axios.post(`${baseURL}/auth`, data)
    return response
}

function userLogged() {
    const response = axios.get(`${baseURL}/user/findById`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
        }
    })
    return response;
}

export {
    signup,
    signin,
    userLogged
}