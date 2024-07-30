import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            defualt: "Anonymous",
            min: 2,
            max: 100,
            required: [true, "Name must be provided"],
            unique: true,
        },    
        email: {
                type: String,
                match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
                min:2,
                max: 100,
                required: [true, "Email must be provided"],
                unique: true
        },
    },
    {
        timestamps: true
    }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;