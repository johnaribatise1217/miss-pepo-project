/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from "mongoose";

const dbConnect = async() => {
  if(mongoose.connection.readyState >=1){
    return
  }

  let DB_URI : string = ""

  if(process.env.NODE_ENV === "development") DB_URI = process.env.MONGODB_LOCAL_URI!
  if(process.env.NODE_ENV === "production") DB_URI = process.env.MONGODB_URI!

  await mongoose.connect(DB_URI, {
    dbName : process.env.DB_NAME
  }).then((con) => console.log('DB connected')).
  catch((error) => console.log(error))
}

export default dbConnect