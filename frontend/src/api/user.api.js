import axios from 'axios'

export const getUserRequest = async () => await axios.get("http://localhost:3001/users")
