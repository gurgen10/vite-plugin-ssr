import axios from 'axios'
import { BASE_URL as baseURL } from  './constants'

export const getAxiosInstance = (headers={"Content-Type": "application/json"}) => {
    
    const user = {token: "cmdcmmcdfmlcldfksnc46dc5c1d5c1dcd6ddv"} 

    return  axios.create({
        baseURL,
        timeout: 1000,
        headers: { Authorization: 'Bearer' + user.token, ...headers}
      });
}