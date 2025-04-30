import mongoose from 'mongoose'

const patientSchema = new mongoose.Schema(
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
      disease: {
         type: String,
         required: true,
      },
      hospital: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Hospital'
      },
      wardNo: {
         type: Number,
         required: true,
      },
      docAssigned: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Doctor',
         required: true
      },
      address: {
         type: String,
         required: true,
      },
   },
   { timestamps: true }
);

export const Patient = mongoose.model('Patient', patientSchema);