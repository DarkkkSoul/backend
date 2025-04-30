import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
      },
      price: {
         type: Number,
         required: true,
         default: 0,
      },
      category: {
         type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true,
         }
      },
      description: {
         type: String,
         required: true
      },

   },
   { timestamps: true }
);

export const User = mongoose.model('User', userSchema);