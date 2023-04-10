import React from 'react'
import Memberallnewusers from './Memberallnewusers'

const Allnewmembers = ({members, loading}) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 col-span-3">
    <h1 className="text-2xl font-semibold  mb-8 text-center text-white">New Users</h1>
    {loading ? (
    <p>Loading...</p>
    ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 3xl:grid-cols-4 gap-4">
        {members.new_members.map(user => (
        <Memberallnewusers key={user.id} user={user} />
        ))}
    </div>
    )}
</div>
  )
}

export default Allnewmembers
