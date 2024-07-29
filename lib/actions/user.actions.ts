"use server"

import User from "@/models/User.model";
import dbConnection from "../dbConnection"

export const createNewUser = async (formData: FormData) => {
    try {
        await dbConnection();
        const data = {
            name: formData.get('name'),
            email: formData.get('email')
        };
        const newUser = new User(data);
        await newUser.save();
        console.log(newUser);
        
         
    } catch (error) {
        console.log(error);
    }
}