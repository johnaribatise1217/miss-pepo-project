import mongoose, { Document, Schema } from "mongoose";

export interface IBooking extends Document{
  clientName : string
  email : string
  eventDate : {
    startDate: Date,
    endDate: Date
  }
  eventInfo : {
    eventType : string,
    audienceDemographic: string,
  }
  location : {
    state : string
    city : string
  }
  numberOfDays : number
  paymentInfo : {
    id : string,
    status : string
    amountPaid : number
  }
  paidAt : Date
  createdAt : Date
}

const bookingSchema : Schema<IBooking> = new mongoose.Schema({
  clientName : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : [true, "Please enter user email"],
  },
  eventDate : {
    startDate : {
      type : Date,
      required : true
    },
    endDate : {
      type : Date,
      required : true
    }
  },
  eventInfo : {
    eventType : {
      type : String,
      required : true,
      enum : {
        values : ['Event Hosting', "Content Collaboration", "Stage Play", "Youtube Collaboration"],
      }
    },
    audienceDemographic : {
      type : String,
      required : true,
      enum : {
        values : ['Chineese', "Nigerian", "Latino", "Black Americans", "White Americans"]
      }
    }
  },
  paidAt : {
    type : Date,
    required : true
  },
  createdAt : {
    type : Date,
    default : Date.now()
  },
  numberOfDays : {
    type: Number,
    required : true
  },
  location : {
    state : {
      type : String,
      required : true
    },
    city : {
      type : String,
      required : true
    }
  },
  paymentInfo : {
    id : {
      type : String,
      required : true
    },
    status : {
      type : String,
      required : true
    },
    amountPaid : {
      type : Number,
      required : true
    }
  }
})

export default mongoose.models.Booking || mongoose.model("Booking", bookingSchema)