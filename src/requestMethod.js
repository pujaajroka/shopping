import axios from "axios";

const BASE_URL = "https://sellitwell.herokuapp.com/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MGE4ZjA5MDJjMmIyMGUxMmYwZjE3ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3ODc4OTAzNywiZXhwIjoxNjc5MDQ4MjM3fQ.nOfIG38GI-ehJgkLpKJbMwpID7cw9QXcgUHL0LKI338"
export const publicRequest = axios.create({
    baseURL:BASE_URL, 
})

export const userRequest = axios.create({
    baseURL:BASE_URL, 
    header:{token: `Bearer ${TOKEN}`},
})