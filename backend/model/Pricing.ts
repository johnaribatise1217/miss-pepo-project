import mongoose, { Document, Schema } from "mongoose";

export interface IPricing extends Document{
  event: string
  price: number
}

const pricingSchema : Schema<IPricing> = new mongoose.Schema({
  event : {
    type : String,
    required : true
  },
  price : {
    type : Number,
    required : true
  }
}, {timestamps : true})

export default mongoose.models.Pricing || mongoose.model("Pricing", pricingSchema)