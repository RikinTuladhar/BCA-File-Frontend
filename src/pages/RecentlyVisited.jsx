import React from 'react'
import NavBar from '../components/NavBar'
import UserBodyContainer from '../Format/UserBodyContainer'
import Table from '../components/Table'

const RecentlyVisited = () => {
  return (
    <>
     <NavBar/>
     <UserBodyContainer>
        <h1 className='text-3xl font-bold'>Recently visited Files</h1>
        <Table/>
        </UserBodyContainer> 
    </>
  )
}

export default RecentlyVisited
