import {useState} from 'react'
import Membersallcard from './Membersallcard'
import Usermodal from './UserModal/Usermodal';


const Allmembers = ({members, loading }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState("");
    const toggleModal = (user) => {
      setIsOpen(!isOpen);
      setUser(user)
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 col-span-3">
        <Usermodal isOpen={isOpen} user={user}   toggleModal={toggleModal}/>
        <h1 className="text-2xl font-semibold  mb-8 text-center text-white">All Users</h1>
        {loading ? (
        <p>Loading...</p>
        ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 3xl:grid-cols-4 gap-4">
            {members.allmembers.map(user => (
            <Membersallcard key={user.id} user={user}  toggleModal={toggleModal} />
            ))}
        </div>
        )}
    </div>
    )
}

export default Allmembers
