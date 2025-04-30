import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
   productID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
   }
})

const orderSchema = new mongoose.Schema(
   {
      customer: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User',
         required: true,
      },
      adress: {
         type: String,
         required: true,
      },
      totalPrice: {
         type: Number,
         required: true
      },
      items: {
         type: [productID],
         required: true,
      },
      status: {
         type: String,
         enum: ['PENDING', 'CANCELLED', 'DELIVERED'],
         default: 'PENDING'
      }
   },
   { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);