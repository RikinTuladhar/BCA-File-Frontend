import React, { useContext, useEffect, useState } from "react";
import SubjectCard from "./SubjectCard";
// import BreadScrum from "./BreadScrum";
import { useParams } from "react-router-dom";
import Table from "./Table";
import FilesApi from "../Apis/FilesApi";
import axios from "axios";
import { UserContext } from "../GlobalContext/UserDetailsProvider";
import { reloadConext } from "../GlobalContext/ReloadProvider";
import BookMarkApi from "../Apis/BookMarkApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Subject = () => {
  const [data, setData] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState({
    id: "",
    name: "",
    filePath: "",
  });

  const { postBookmarks } = BookMarkApi();

  const { userDetails } = useContext(UserContext);
  const { reload, setReload } = useContext(reloadConext);

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
  const recentVisited = (
    clickedId,
    clickedName,
    clickedFilePath,
    clickedsubjectName
  ) => {
    const newItem = {
      id: clickedId,
      name: clickedName,
      filePath: clickedFilePath,
      subjectName: clickedsubjectName,
    };

    // Get the existing items from sessionStorage
    const existingItems =
      JSON.parse(sessionStorage.getItem("recentlyViewed")) || [];
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

  /**
   * The `bookMarkHandle` function takes a `fileId` parameter, extracts the user id from `userDetails`,
   * posts the bookmark with the fileId and user id, and then alerts the response.
   */
  const bookMarkHanlde = (fileId) => {
    setReload(true);
    //console.log(fileId);
    let { id } = userDetails; //user id extracted inside as there is already id taking from param
    //console.log(id);
    if (!id) {
      return toast.error("Something went wrong please try login again");
    }
    postBookmarks(fileId, id)
      .then((res) => {
        // alert(res);
        toast.success(res);
        console.log(res);
        setReload(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong please try login again");
      });
  };

  useEffect(() => {
    // axios.get(`https://bca-file-backend.onrender.com/file/subjectid/${id}`)
    getFiles(id)
      .then((res) => {
        setData(res);
        // console.log(res);
      })
      .catch((err) => console.error(err));
  }, [id, reload]);
  // console.log(id);
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Table
        data={data}
        recentVisited={recentVisited}
        bookMarkHanlde={bookMarkHanlde}
      />
    </>
  );
};

export default Subject;
