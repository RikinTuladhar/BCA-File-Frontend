import axios from "axios";
import React from "react";

const FilesApi = () => {
  const URL = "https://bca-file-backend.onrender.com";
  async function getAllFiles() {
    const endpoint = `${URL}/file`;
    try {
      const response = await axios.get(endpoint);
      const data = await response.data;
      // console.log(data);
      return data;
    } catch (error) {
      throw new Error("Error when fetching files" + error);
    }
  }

  async function getFiles(id) {
    //   /file/subjectid/1
    // https://bca-file-backend.onrender.com/file/subjectid/1
    // const Endpoint = `${URL}/file/subjectid/${id}`;
    const Endpoint = `https://kbc-next-js.vercel.app/api/files/${id}`;
    // console.log(Endpoint)
    try {
      const response = await axios.get(Endpoint);
      const data = await response.data;
      // console.log(data);
      return data;
    } catch (error) {
      console.error("Error when fetching subjects" + error);
    }
  }
  async function postFile(subjectId, userId, config) {
    const endpoint = `${URL}/file/${subjectId}/${userId}`;
    try {
      const response = await axios.post(endpoint, value, config);
      const data = await response.data;
      // console.log(data);
      return data;
    } catch (error) {
      throw new Error("Error when submitting file");
    }
  }

  async function deleteFile(id) {
    const endpoint = `${URL}/file/delete/${id}`;
    try {
      const response = await axios.delete(endpoint, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.data;
      // console.log(data);
      return data;
    } catch (error) {
      throw new Error("Error when deleting file");
    }
  }
  return { getFiles, getAllFiles, deleteFile };
};

export default FilesApi;
