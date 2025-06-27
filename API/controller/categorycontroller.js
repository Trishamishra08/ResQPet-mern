import '../model/connection.js'
 import categorySchemaModel from '../model/categorymodel.js';
 import url from 'url';
export const save=async (req,res)=>{
   var categoryList=await categorySchemaModel.find();
  // console.log(categoryList) 
  var len=categoryList.length;
  //console.log(len);
  var _id=(len==0)?1:categoryList[len-1]._id+1;
var categoryDetails=req.body;

categoryDetails={...categoryDetails,"_id":_id};
//console.log(categoryDetails);
try{

    const category=await categorySchemaModel.create(categoryDetails);
     res.status(201).json({"status":true});
}
catch(err){
    //console.log(err);
      res.status(500).json({"status":false});
}
}

//fetch or read
export const fetch=async (req,res)=>{
   var condition_obj=url.parse(req.url,true).query;
    //console.log(condition_obj);
    var category=await categorySchemaModel.findOne(condition_obj); //return object
    //console.log(category);
   if(category){
    res.status(200).json({"category":category});
   }
   else{
    res.status(404).json({"result":"not found"});
   }
}

//to delete
export const remove=async(req,res)=>{
    //kabhi condition_obj ham pass krte hai req me to ye use btdefault string consider krta hai.....to overcome we will use JSON.parse
var category=await categorySchemaModel.findOne(JSON.parse(req.body.condition_obj));


/*//if condition_obj is in url we can apply below one
let conditionObj = JSON.parse(req.query.condition_obj);
let category = await categorySchemaModel.findOne(conditionObj);
*/
//console.log(category);

if(category){
var delete_category=await categorySchemaModel.deleteOne(JSON.parse(req.body.condition_obj));
//var delete_category=await categorySchemaModel.deleteOne(conditionObj);
      if (delete_category) {
        res.status(200).json({"result":"category-deleted successfully"});
  
      } else {
        res.status(500).json({"result":"category can't deleted successfully"});
      }
}
else{
    res.status(404).json({"result":"item you want to delete, not found in database"});
}
}