import {useState , useEffect} from 'react'
import Modal from '../utility/Modal'
import CenterContent from './CenterContent'
import RightSidebar from './RightSidebar'
import Sidebar from './Sidebar'
import MebershipPlan from './MebershipPlan'
import Members from './Members'
import { useSelector, useDispatch } from "react-redux";
import {loadActiveMember} from "../../actions/adminAction"
import Allmembers from './Allmembers'
import Allnewmembers from './Allnewmembers'
import "./dashboard.css"

function Dashboard({user}) {
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(loadActiveMember())
  }, [])
  
  const {members, loading , error} = useSelector((state)=> state.getallmember)



  const [currentContent, setCurrentContent] = useState('centercontent');

  let content;
  if (currentContent === 'centercontent') {
    content = <CenterContent user={user} members={members} loading={loading} setCurrentContent={setCurrentContent}/>;
  } else if (currentContent === 'Membership') {
    content = <MebershipPlan user={user} />;
  } else if (currentContent === 'Members') {
    content = <Members />;
  }else if(currentContent === "Showallmember"){
    content = <Allmembers members={members} loading={loading}/>;
  }else if(currentContent === "Showallnewmember"){
    content = <Allnewmembers members={members}  loading={loading}/>
  }
 
  return (
    <>
   <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:place-content-center place-content-baseline h-[100svh] min-w-[100%] relative z-40 py-5'>

    {/* <Modal/> */}
    <Sidebar  setCurrentContent={setCurrentContent}/>
    <div className='flex-1 overflow-y-auto col-span-3 center-content'>
          {content}
        </div>
    <RightSidebar user={user} members={members} loading={loading}/>
    </div>
    </>
  )
}

export default Dashboard