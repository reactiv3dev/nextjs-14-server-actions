"use server";
import React from 'react'

interface IProps {
    children: React.ReactNode;
    asyncAction: ( args?: any | any[] ) => void;
    data?: Object
}

const WithForm = ({  children, asyncAction, data }: IProps) => {
  return (
    <form action={asyncAction}>
        {
           data && Object.entries(data).map(([key, value]) => {
            return <input type="hidden" key={key} name={key} value={value} readOnly hidden/>
           }) 
        }
        {children}
    </form>
  )
}

export default WithForm;