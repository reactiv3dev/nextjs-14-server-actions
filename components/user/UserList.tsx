import { fetchUserList } from '@/lib/actions/user.actions'
import React from 'react'
import SingleUser from './SingleUser';

const UserList = async () => {
  
    const users: IUser[] = await fetchUserList() as IUser[]; 
    
    return (
    <div className='my-10'>
        <ul>
        {
            users && users.map((user: IUser) => <li key={user._id}>
                <SingleUser user={user} />
            </li>)
        }
        </ul>
    </div>
  )
}

export default UserList