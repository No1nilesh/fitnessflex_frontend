import React from 'react'
import  CheckCircleIcon  from '@material-ui/icons/CheckCircle';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './MembershipSuccess.css'
const MembershipSuccess = () => {
  return (
    <div className="orderSuccess">
        <CheckCircleIcon/>

        <Typography>Thank you to Becoming the member</Typography>
        <Link to={"/membership/me"}>Views Membership details</Link>
    </div>
  )
}

export default MembershipSuccess
