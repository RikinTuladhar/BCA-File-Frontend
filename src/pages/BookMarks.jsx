import React, { useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import UserBodyContainer from "../Format/UserBodyContainer";
import Table from "../components/Table";
import BookMarkApi from "../Apis/BookMarkApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../GlobalContext/UserDetailsProvider";
import { reloadConext } from "../GlobalContext/ReloadProvider";
import { set } from "firebase/database";
const BookMarks = () => {
  const { userDetails } = useContext(UserContext);
  const {reload,setReload} = useContext(reloadConext)
  const { id } = userDetails;

  const { getBookmarks, postBookmarks } = BookMarkApi();
  const [data, setData] = useState([]);
  const bookMarkHanlde = (fileId) => {
    setReload(true)
    console.log(fileId)
    postBookmarks(fileId, id)
      .then((res) => {
        // alert(res)
        toast.success(res);
        console.log(res);
        setReload(false)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getBookmarks(id)
      .then((res) => {
        // console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
      setReload(true)
      return(()=>{
        setReload(false)
      })
  }, [id,reload]);
  return (
    <>
      <NavBar />
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
      <UserBodyContainer>
        <h1 className="text-3xl font-bold">Book-Marks</h1>
        <Table data={data} bookMarkHanlde={bookMarkHanlde} setReload={setReload} />
      </UserBodyContainer>
    </>
  );
};

export default BookMarks;
