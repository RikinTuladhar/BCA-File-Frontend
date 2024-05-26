import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import UserBodyContainer from '../Format/UserBodyContainer'
import Table from '../components/Table'
import BookMarkApi from "../Apis/BookMarkApi";
import { reloadConext } from "../GlobalContext/ReloadProvider";
import { UserContext } from "../GlobalContext/UserDetailsProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RecentlyVisited = () => {
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const { userDetails } = useContext(UserContext);
  const { getBookmarks, postBookmarks } = BookMarkApi();
  const {reload,setReload} = useContext(reloadConext)
  const { id } = userDetails;
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

  useEffect(() => {
    const storedData = sessionStorage.getItem("recentlyViewed");
    if (storedData) {
      setRecentlyViewed(JSON.parse(storedData));
    }
  }, []);

  // console.log(recentlyViewed);
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
     <NavBar/>
     <UserBodyContainer>
        <h1 className='text-3xl font-bold'>Recently visited Files</h1>
        <Table data={recentlyViewed}    bookMarkHanlde={bookMarkHanlde}/>
        </UserBodyContainer> 
    </>
  )
}

export default RecentlyVisited
