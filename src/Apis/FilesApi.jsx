import axios from 'axios'
import React from 'react'

const FilesApi = () => {
  const URL = "https://bca-file-backend.onrender.com"
  async function getFiles(id){
        //   /file/subjectid/1
        // https://bca-file-backend.onrender.com/file/subjectid/1
        const Endpoint = `${URL}/file/subjectid/${id}` 
        console.log(Endpoint)
       try {
        const response  = await axios.get(Endpoint);
        const data = await response.data;
        console.log(data);
        return data;

       } catch (error) {
        console.error("Error when fetching subjects"+error)
       }

  }
  async function postFile(subjectId,userId,config){
    const endpoint = `${URL}/file/${subjectId}/${userId}`;
    try {
      const response = await axios.post(endpoint, value,config);
      const data = await response.data;
      console.log(data);
      return data;
      
    } catch (error) {
      throw new Error("Error when submitting file");
    }
  }
    return {getFiles}
}

export default FilesApi
