import mongoose from 'mongoose'
import { DB_NAME } from '../constant.js'

const dbConnection = async () => {
   try {
      const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      console.log('MONGODB CONNECTED:', connectionInstance.connection.host);
      // console.log('MONGODB CONNECTED:', connectionInstance);
   } catch (error) {
      console.log('ERROR while MONGODB connecting: ', error);
      process.exit(1);
   }
}
export default dbConnection