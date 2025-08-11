import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Topnaigation() {

  let navObj = useNavigate();
  // Access the Redux store to check if the user is logged in
  let storeObj = useSelector((store) => {
    return store;
  })

  // Check if the user is logged in
  // If not logged in, redirect to the login page
  useEffect(() => {
    if (storeObj.employeesLoginData.email) {

    }
    else {
      navObj('/');
    }
  }, [])
  return (
    <div>

    </div>
  )
}

export default Topnaigation