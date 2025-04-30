import mongoose from 'mongoose'

const nurseSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
      },
      sex: {
         type: String,
         required: true,
      },
      age: {
         type: Number,
         required: true,
      },
      phNo: {
         type: Number,
         required: true,
      },
      hospital: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Hospital'
      },

   },
   { timestamps: true }
);

export const Nurse = mongoose.model('Nurse', nurseSchema);