import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";
const categorySchema=mongoose.Schema({
     _id:Number,
    catnm:{
        type:String,
        require:[true,'category name is required'],
        unique:true,
        trim:true,
        lowercase:true
    },
    caticonnm:{
        type:String,
        require:[true,'this field is required'],
        
        trim:true,
        lowercase:true
    },
});
//to apply unique validator
mongoose.plugin(mongooseUniqueValidator);
const categorySchemaModel=mongoose.model('category_collection',categorySchema);
//where category collection a=is name of collection in database
export default categorySchemaModel;