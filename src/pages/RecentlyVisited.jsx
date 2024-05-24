import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import UserBodyContainer from '../Format/UserBodyContainer'
import Table from '../components/Table'

const RecentlyVisited = () => {
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  useEffect(() => {
    const storedData = sessionStorage.getItem("recentlyViewed");
    if (storedData) {
      setRecentlyViewed(JSON.parse(storedData));
    }
  }, []);

  console.log(recentlyViewed);
  return (
    <>
     <NavBar/>
     <UserBodyContainer>
        <h1 className='text-3xl font-bold'>Recently visited Files</h1>
        <Table data={recentlyViewed} />
        </UserBodyContainer> 
    </>
  )
}

export default RecentlyVisited
