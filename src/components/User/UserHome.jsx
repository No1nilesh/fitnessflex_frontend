import {useEffect} from "react";
import Membership from "./Membership";
import { useSelector, useDispatch } from "react-redux";
import {fetchMembership} from "../../actions/userAction"

const UserHome = () => {

const dispatch = useDispatch();
const { loading, error, membership } = useSelector(
    (state) => state.usermembership
  );

const {user} = useSelector((state)=>
  state.user
)

  useEffect(() => {
 dispatch(fetchMembership())
  }, [])
  

  return (
    <>
      <div className="container mx-auto px-4 py-8">
       {!user.membership && <h1 className="text-4xl font-bold mb-4">Choose a Membership Plan</h1> }
        <div className="flex flex-wrap -mx-4">
        { !user.membership && membership
            ? membership.map((mem) => {
                return (
                  <Membership
                    key={mem.id}
                    className="py-4"
                    mem={mem}
                  />
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default UserHome;
