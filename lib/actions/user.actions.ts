"use server"

import User from "@/models/User.model";
import dbConnection from "../dbConnection"
import { revalidatePath } from "next/cache";

export const createNewUser = async (formData: FormData) => {
    try {
        /**
         * simulating busy server from many requests
         * 
         */
        await new Promise((resolve)=> setTimeout(resolve,2000))

        //regular db connection
        await dbConnection();
        const data = {
            name: formData.get('name'),
            email: formData.get('email')
        };
        //User creation
        const newUser = new User(data);
        await newUser.save();
         
        //after we save user we need to revalidate path
        //in order to refetch updated users list
         revalidatePath('/');
    } catch (error) {
        console.log(error);
    }
}

export const fetchUserList = async () => {
    try {   
        await dbConnection();
        const response = await User.find().exec();
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const deleteUserById = async (formData: FormData) => {
    //console.log(formData);
    await dbConnection();
    
    const _id = formData.get('_id');
    await User.findByIdAndDelete(_id);
    revalidatePath('/');
}