import mongoose from "mongoose";

const userDb= process.env.USER_DB
const passwordDb= process.env.PASSWORD_DB
const collectionDb= process.env.COLLECTION_DB
const clusterDb= process.env.CLUSTER_DB


export const connectMongoDb = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${userDb}:${passwordDb}@${collectionDb}.${clusterDb}.mongodb.net/dashboard-miranda`);
        console.log('*** Connection mongoDB success ***')
    } catch (error) {
        console.error('MongoDB connection error', error)
    }
}