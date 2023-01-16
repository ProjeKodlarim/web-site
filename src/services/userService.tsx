import axios from 'axios'

const getUserDetails = (email) => {
  return axios.get("https://localhost:44377/api/users/getbyuser?email="+email);
}


const userService = {
    getUserDetails
}
export default userService