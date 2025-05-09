import mongoose, { Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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


// BCrypting
userSchema.pre('save', async function (next) {
   if (!this.isModified('password')) return next();

   this.password = bcrypt.hash('password', 10);
   next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
   return await bcrypt.compare(password, this.password);
}

// JWTing
userSchema.methods.generateAccessToken = function () {
   jwt.sign({
      _id: this._id,
      username: this.username,
      email: this.email,
   },
      process.env.SECERT_ACCESS_TOKEN,
      {
         expiresIn: process.env.EXPIRY_ACCESS_TOKEN
      })
}
userSchema.methods.generateRefreshToken = function () {
   jwt.sign({
      _id: this._id,
   },
      process.env.SECERT_REFRESH_TOKEN,
      {
         expiresIn: process.env.EXPIRY_REFRESH_TOKEN
      })
}

export const User = mongooose.model('User', userSchema);