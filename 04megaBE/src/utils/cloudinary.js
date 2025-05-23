import fs from 'fs'
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
   cloud_name: process.env.CLOUDINARY_NAME,
   api_key: process.env.CLOUDINARY_KEY,
   api_secret: process.env.CLOUDINARY_SECERT,
});


export const uploadInCloudinary = async (filepath) => {
   try {
      if (!filepath) return null;

      const response = await cloudinary.uploader.upload(filepath, { resource_type: 'auto' });
      console.log('File uploaded on cloudinary on url: ', response.url);

      fs.unlinkSync(filepath);
      return response;

   } catch (error) {
      fs.unlinkSync(filepath);
      return null;
   }
}