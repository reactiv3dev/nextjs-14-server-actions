import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const NewUserForm = () => {
  return (
    <div>
        <form action="" className='flex flex-col gap-5 border p-5 shadow-lg bg-white my-10'>
            <label htmlFor="name">Your Name: </label>
            <Input required type="text" name="name" id="" />
            <label htmlFor="email">Your Email: </label>
            <Input required type="email" name="email" id="" />
            <Button type="submit">Add User</Button>
        </form>
    </div>
  )
}

export default NewUserForm