import mongoose from "mongoose";

if(!process.env.MONGODB_URI){
    throw new Error("Please enable connection to MongoDB instance by providing var in  env configuration");
}

const MONGODB_URI: string = process.env.MONGODB_URI;

let globalWithMongoose = global as typeof globalThis & {
    mongoose: any
};

let cached = globalWithMongoose.mongoose;

if(!cached){
    cached = globalWithMongoose.mongoose = { conn: null, promise: null };
}

async function dbConnection() {
    if(cached.conn){
        return cached.conn;
    }

    if(!cached.promise){
        const opts = {
            bufferCommands: false
        }

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((conn) => {
            return conn;
        })
    }
    cached.conn = await cached.promise;
    return cached.conn;

};

export default dbConnection;