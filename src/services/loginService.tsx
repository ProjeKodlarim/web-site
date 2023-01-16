import axios from "axios"
import LoginDTO from "../DTOs/LoginDTO"
import RegisterDTO from "../DTOs/RegisterDTO"


const login = (user:LoginDTO) =>{
    return axios.post("https://localhost:44377/api/auth/login",user)
}

const register = (user:RegisterDTO) =>{
    return axios.post("https://localhost:44377/api/auth/register",user)
}

const loginService = {
    login,
    register
  }
  export default loginService