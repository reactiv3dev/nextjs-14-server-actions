"use client"

import React from 'react'
import { Button } from '../ui/button';
import { useFormStatus } from 'react-dom';

interface IProps {
    title: string;
    type?: "submit"
}
const ActionButton = ({ title, type }: IProps) => {
    const { pending } = useFormStatus();
  return (
    <Button type={type} disabled={pending ? true : false} >
        { pending ? "Processing.." : title }
    </Button>
  )
}

export default ActionButton