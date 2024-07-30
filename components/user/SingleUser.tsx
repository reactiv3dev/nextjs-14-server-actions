import React from 'react'
import { Button } from '../ui/button'
import WithForm from '../custom/WithForm'
import { deleteUserById } from '@/lib/actions/user.actions'

const SingleUser = ({user}: { user: IUser}) => {
  return (
    <div className='grid grid-cols-12 text-center border'>
        <div className='grid-item col-span-5 border'>{user.name}</div>
        <div className='grid-item col-span-5 border'>{user.email}</div>
        <div className='grid-item col-span-2'>
          <WithForm asyncAction={deleteUserById} data={{ _id: user._id.toString() }}>
            <Button className='w-full' type="submit" >Delete</Button>
          </WithForm>
          </div>
    </div>
  )
}

export default SingleUser;