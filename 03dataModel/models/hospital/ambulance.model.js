import mongoose from 'mongoose'

const ambulanceSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true
      },
      phNo: {
         type: Number,
         required: true
      },
      fuel: {
         type: Boolean,
         default: true,
         required: true
      },
      hospital: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Hospital'
      },
      carType: {
         type: String,
         enum: ['TT', 'OMNI'],
         default: 'TT',
         required: true
      },
   },
   { timestamps: true }
);

export const Ambulance = mongoose.model('Ambulance', ambulanceSchema);