import axios from "axios";
import React from "react";

const BookMarkApi = () => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`, // Set the token in the 'Authorization' header
    },
  };

  const URL = "https://bca-file-backend.onrender.com";
  async function getBookmarks(user_id) {
    // localhost:8080/bookmarks/1
    const endpoint = `${URL}/bookmarks/${user_id}`;
    try {
      const response = await axios.get(endpoint, config);
      const data = await response.data;
      // console.log(data);
      return data;
    } catch (error) {
      throw new Error("Not Found Bookmarks");
    }
  }

  async function postBookmarks(file_id, user_id) {
    const endpoint = `${URL}/bookmarks/${file_id}/${user_id}`;
    console.log(endpoint);
    try {
      const response = await axios.post(endpoint, {}, {headers:config.headers});
      const data = await response.data.message;
      // console.log(data);
      return data;
    } catch (error) {
      throw new Error("Error handling bookmarks: " + error);
    }
}

  return { getBookmarks, postBookmarks };
};

export default BookMarkApi;
