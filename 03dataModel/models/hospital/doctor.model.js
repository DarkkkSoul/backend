import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true
      },
      age: {
         type: Number,
         required: true
      },
      sex: {
         type: String,
         required: true
      },
      specialist: {
         type: String,
         required: true,
         default: general,
      },
      hospital: [{
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Hospital'
      }],
      phoneNo: {
         type: Number,
         required: true
      },
   },
   { timestamps: true }
);

export const Doctor = mongoose.model('Doctor', doctorSchema);