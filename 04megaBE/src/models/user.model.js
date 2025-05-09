import mongoose, { Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new Schema(
   {
      watchHistory: [
         {
            type: Schema.Types.ObjectId,
            ref: 'Video',
         }
      ],
      username: {
         type: String,
         required: true,
         unique: true,
         index: true
      },
      email: {
         type: String,
         required: true,
         unique: true,
         lowercase: true,
      },
      fullName: {
         type: String,
         required: true,
      },
      avatar: {
         type: String, // public url
         required: true,
      },
      coverImage: {
         type: String, // public url
         required: true,
      },
      password: {
         type: String,
         required: true,
      },
      refreshToken: {
         type: String,
         required: true,
      },

   }
   , { timestamps: true });

userSchema.pre('save', async function (next) {
   if (!this.isModified('password')) return next();

   this.password = bcrypt.hash('password', 10);
   next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
   return await bcrypt.compare(password, this.password);
}

export const User = mongooose.model('User', userSchema);