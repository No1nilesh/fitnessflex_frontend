import { useState} from 'react'
import { logout } from "../../actions/userAction";
import {  useDispatch } from "react-redux";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import ExitToAppIcon from "@material-ui/icons"


const UserOption = () => {

    const [Open, setOpen] = useState(false)

    const dispatch = useDispatch();
    
    const logoutUser=()=>{
      dispatch(logout())
      toast.success("Log Out Successfully")
      }

    const options = [       
      {icon: <ExitToAppIcon/>, name:"Logout", func:logoutUser},
    ]
    
 
  return (
    <>
       <SpeedDial
          ariaLabel="SpeedDial basic example" 
          className="absolute top-3 right-8"
          onClose={()=>setOpen(false)}
          onOpen={()=>setOpen(true)}
          open={Open}
          direction={"down"}
          >
          {options.map((item)=>
          (<SpeedDialAction icon={item.icon} tooltipTitle={item.name} key={item.name} onClick={item.func}/>))}
         </SpeedDial>
    </>
  )
}

export default UserOption
