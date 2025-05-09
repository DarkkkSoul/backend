import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema(
   {
      thumbNail: {
         type: String,
         required: true,
      },
      owner: {
         type: mongoose.Types.ObjectId,
         ref: 'User',
         required: true,
      },
      title: {
         type: String,
         required: true,
      },
      description: {
         type: String,
         required: true,
      },
      duration: {
         type: Number,
         default: 0,
         required: true,
      },
      veiws: {
         type: Number,
         defualt: 0,
         required: true,
      },
      isPublished: {
         type: Boolean,
         defualt: true,
         required: true,
      },
   }
   , { timestamps: true });

export const Video = mongoose.model('Video', videoSchema);