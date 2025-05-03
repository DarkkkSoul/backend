import dotenv from 'dotenv';
import dbConnection from './DB/index.js';
import { app } from './app.js';



dotenv.config();

const port = process.env.PORT || 5000;


dbConnection()
   .then(() => {
      app.listen(port, () => {
         console.log(`server is running at port:${port}`);
      })
   })
   .catch((error) => {
      console.log('Error while connecting (in promise): ', error);

   });

// const app = express()



//    ; (async () => {
//       try {
//          await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

//          app.on("errror", (error) => {
//             console.log("ERRR: ", error);
//             throw error
//          })

//          app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//          })

//       } catch (error) {
//          console.log('Error in try catch:', error);
//       }
//    })()    