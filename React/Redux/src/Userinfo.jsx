import React from 'react'
import { useSelector } from 'react-redux' 
// use useSelector hooks to accessing data from user.js to another component.

const Userinfo = () => {
    let data = useSelector(state => state.user); //fetching data from user.js to Userinfo.jsx
  return (
    <div>
        <h1>{data.username} , {data.balance}!</h1>
    </div>
  )
}

export default Userinfo