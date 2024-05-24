import React, { useEffect, useState } from "react";
import SubjectCard from "./SubjectCard";
// import BreadScrum from "./BreadScrum";
import { useParams } from "react-router-dom";
import Table from "./Table";
import FilesApi from "../Apis/FilesApi";
import axios from "axios";
const Subject = () => {
  const [data, setData] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState({
    id: "",
    name: "",
    filePath: "",
  });

  const [sessonStorageRecentlyViewed, setSessionStorageRecentlyViewed] =
    useState(sessionStorage.getItem("recentlyViewed"));

  // const recentVisited = (clickedId, clickedName, clickedFilePath) => {
  //   console.log(clickedId);
  //   setRecentlyViewed({
  //     ...recentlyViewed,
  //     id: clickedId,
  //     name: clickedName,
  //     filePath: clickedFilePath,
  //   });
  //   sessionStorage.setItem(
  //     "recentlyViewed",
  //     JSON.stringify([
  //       { id: clickedId, name: clickedName, filePath: clickedFilePath },
  //     ])
  //   );
  // };
  const recentVisited = (clickedId, clickedName, clickedFilePath) => {
    const newItem = {
      id: clickedId,
      name: clickedName,
      filePath: clickedFilePath,
    };
  
    // Get the existing items from sessionStorage
    const existingItems = JSON.parse(sessionStorage.getItem("recentlyViewed")) || [];
    // console.log(existingItems)
    // Add the new item to the existing items
    const updatedItems = [...existingItems, newItem];
    // console.log(updatedItems)
    // Update sessionStorage
    sessionStorage.setItem("recentlyViewed", JSON.stringify(updatedItems));
  };
  

  const { id } = useParams();
  const { getFiles } = FilesApi();
  // console.log(id);

  useEffect(() => {
    // axios.get(`https://bca-file-backend.onrender.com/file/subjectid/${id}`)
    getFiles(id)
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((err) => console.error(err));
  }, [id]);
  // console.log(id);
  return (
    <>
      <Table data={data} recentVisited={recentVisited} />
    </>
  );
};

export default Subject;
