import axios from "axios";

const BASE_URL = "http://api.xtyles.in/api/";
//const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MGE4ZjA5MDJjMmIyMGUxMmYwZjE3ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3OTU1MjUwOCwiZXhwIjoxNjc5ODExNzA4fQ.VQRtmcFkr5VhKIFp6chIbmyZaQQAojGNAldpD31Xp38"
export const publicRequest = axios.create({
    baseURL:BASE_URL, 
})

export const userRequest = axios.create({
    baseURL:BASE_URL, 
    headers:{token: `Bearer ${TOKEN}`},
})