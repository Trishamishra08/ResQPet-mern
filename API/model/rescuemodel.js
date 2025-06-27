import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";
const rescueSchema = mongoose.Schema({
  _id: Number,

  animalImage: {
    type: String, // image file name or full path
    //required: [true,"Category icon name is required"],
  },
  animalImageName: {
    type: String,
    trim: true,
  },
  mobile: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[6-9]\d{9}$/.test(v);
      },
      message: props => `${props.value} is not a valid mobile number!`
    }
  },
  assignedNgo: {
    // type: mongoose.Schema.Types.ObjectId,
    type:Number,
    ref: "ngo_collections", // use your actual NGO model name here
    // default: null
  },

  location: {
    type: String,
    required: true,
    trim: true
  },

  city: {
    type: String,

  },


  status: {
    type: String,
    enum: ["pending", "in-progress", "resolved"],
    default: "pending"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});
//to apply unique validator
mongoose.plugin(mongooseUniqueValidator);
const rescueSchemaModel = mongoose.model('rescue_collection', rescueSchema);
//where rescue collection a=is name of collection in database
export default rescueSchemaModel;