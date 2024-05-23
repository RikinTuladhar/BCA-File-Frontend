import axios from 'axios'
import React from 'react'

const UserApi = () => {
  const URL = "https://bca-file-backend.onrender.com"

//   console.log(token)
  async function getUserByToken(token) {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Set the token in the 'Authorization' header
        },
      };
    
    const endpoint = `${URL}/getUser/${token}`
    console.log(endpoint)
    try {
      console.log(endpoint)
      const response = await axios.get(endpoint,config)
      const data = await response.data
      console.log(data)
      return data
    } catch (error) {
      throw new Error( "Error when fetching data" +error);
    }

  }
    return {getUserByToken}
}

export default UserApi
