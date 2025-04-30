import mongoose from 'mongoose'

const hospitalSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
      },
      address: {
         type: String,
         required: true,
      },
      specialised: [{
         type: String,
         required: true,
      }],
      phNo: {
         type: Number,
         required: true,
      }
   },
   { timestamps: true }
);

export const Hospital = mongoose.model('Hospital', hospitalSchema);