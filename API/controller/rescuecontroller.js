import '../model/connection.js'
import rescueSchemaModel from '../model/rescuemodel.js';
import ngoSchemaModel from '../model/ngomodel.js';
//import { sendSms } from '../utils/sendsms.js';
// import { sendWhatsapp } from '../utils/sendWhatsapp.js';

import url from 'url';
import rs from 'randomstring';
import path from 'path';

export const save = async (req, res) => {
  //     console.log("h1");
  //     // var cList=await rescueSchemaModel.find();    
  //     // var l=cList.length;
  //     // var _id=l==0?1:cList[l-1]._id+1;  
  //      const rescueList = await rescueSchemaModel.find();
  //     const _id = rescueList.length === 0 ? 1 : rescueList[rescueList.length - 1]._id + 1;

  //     // var caticon=req.files.caticon;
  //     // var caticonnm = rs.generate()+"-"+Date.now()+"-"+caticon.name;
  //      // Read uploaded file
  //      console.log("Files uploaded:", req.body);

  //     const animalImage = req.files.animalImage;
  //     const animalImageName = rs.generate() + "-" + Date.now() + "-" + animalImage.name;


  //     var reqDetails={...req.body,"animalImageName":animalImageName,"_id":_id};
  //   try {
  //    await rescueSchemaModel.create(reqDetails);
  //    var __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  //    var uploadpath=path.join(__dirname,"../../UI/public/assests/upload/petimages",animalImageName);
  //    animalImage.mv(uploadpath);  
  //    res.status(201).json({"status":true}); 	
  //  }
  //  catch(error)
  //  {
  //     console.log(error);
  //     res.status(500).json({"status":false});  
  //  }
  console.log("h1");

  const rescueList = await rescueSchemaModel.find();
  const _id = rescueList.length === 0 ? 1 : rescueList[rescueList.length - 1]._id + 1;

  const animalImage = req.files.animalImage;
  const animalImageName = rs.generate() + "-" + Date.now() + "-" + animalImage.name;

  const { mobile, location, city } = req.body;
  //   const location = req.body.location.trim();
  // const cityFromLocation = location.toLowerCase();
  // console.log("City from location:", cityFromLocation);
  // // Find NGO by matching lowercase city and status = 1
  // const nearbyNgo = await ngoSchemaModel.findOne({
  //   city: { $regex: new RegExp(cityFromLocation, 'i') }, // case-insensitive match
  //   status: 1
  // });
  // console.log("Nearby NGO found:", nearbyNgo);



  // 🔍 Find a nearby NGO based on city/location
  const nearbyNgo = await ngoSchemaModel.findOne({
    // city: { $regex: location.split(',')[1]?.trim() || '', $options: 'i' }, // e.g., extract city from address
    city: city,
    status: 1 // only approved NGOs
  });

  const assignedNgoId = nearbyNgo?._id || null;


  const reqDetails = {
    _id,
    mobile,
    location,
    animalImageName,
    assignedNgo: assignedNgoId
  };

  try {
    await rescueSchemaModel.create(reqDetails);

    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const uploadPath = path.join(__dirname, "../../UI/public/assests/upload/petimages", animalImageName);
    animalImage.mv(uploadPath);

    res.status(201).json({ status: true, assignedNgo: nearbyNgo?.email || "No NGO found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false });
  }
}

//fetch or read
export const fetch = async (req, res) => {
  var condition_obj = url.parse(req.url, true).query;
  // console.log(condition_obj);
  var rescue = await rescueSchemaModel.find(condition_obj); //return object
  // console.log(rescue);
  if (rescue) {
    res.status(201).json({ "rescue": rescue });
  }
  else {
    res.status(404).json({ "result": "not found" });
  }
}

//to delete
export const remove = async (req, res) => {
  //kabhi condition_obj ham pass krte hai req me to ye use btdefault string consider krta hai.....to overcome we will use JSON.parse
  var rescue = await rescueSchemaModel.findOne(JSON.parse(req.body.condition_obj));


  /*//if condition_obj is in url we can apply below one
  let conditionObj = JSON.parse(req.query.condition_obj);
  let rescue = await rescueSchemaModel.findOne(conditionObj);
  */
  //console.log(rescue);

  if (rescue) {
    var delete_rescue = await rescueSchemaModel.deleteOne(JSON.parse(req.body.condition_obj));
    //var delete_rescue=await rescueSchemaModel.deleteOne(conditionObj);
    if (delete_rescue) {
      res.status(200).json({ "result": "rescue-deleted successfully" });

    } else {
      res.status(500).json({ "result": "rescue can't deleted successfully" });
    }
  }
  else {
    res.status(404).json({ "result": "item you want to delete, not found in database" });
  }
}

//to update
// export const update = async (req, res) => {
//   console.log("hi");
//   var condition_obj = (req.body.condition_obj);
//   var content_obj = req.body.content_obj;
//   console.log(condition_obj);
//   var req = await rescueSchemaModel.findOne(condition_obj);
//   //console.log(req);
//   if (req) {
//     var update_req = await rescueSchemaModel.updateOne(req.body.condition_obj, { $set: req.body.content_obj });
//     if (update_req) {
//       if (content_obj.status === 1) {
//         await sendStatusEmail(req.email, req.name, "approved");
//       } else if (content_obj.status === 0) {
//         await sendStatusEmail(req.email, req.name, "blocked");
//       }

//       res.status(200).json({ "result": "req-updated successfully" });

//     }

//     else {
//       res.status(500).json({ "result": "resource cant updated successfully" });
//     }
//   }

//   else {
//     res.status(404).json({ "result": "data not found in database" });
//   }
// }

export const update = async (req, res) => {
  console.log("🔧 Update rescue request...");
  const { condition_obj, content_obj } = req.body;

  try {
    const existing = await rescueSchemaModel.findOne(condition_obj);
    if (!existing) {
      return res.status(404).json({ result: "Rescue request not found in database" });
    }

    const updateResult = await rescueSchemaModel.updateOne(condition_obj, { $set: content_obj });

    // if (updateResult.modifiedCount > 0) {
    //   console.log(`✅ Rescue request updated to status: ${content_obj.status}`);
    //   res.status(200).json({ result: "Rescue request updated successfully" });
    // } else {
    //   res.status(200).json({ result: "No changes made to the request" });
    // }
  /*  if (['pending', 'resolved'].includes(content_obj.status)) {
      console.log("hi");
      const smsText =
        content_obj.status === 'resolved'
          ? `🐾 Your pet rescue request has been resolved. Thank you for helping animals!`
          : `📢 Your rescue request is currently marked as pending. We are working on it.`;

      await sendSms(existing.mobile, smsText);
    }*/

    res.status(200).json({ result: 'Rescue request updated successfully' });
  } catch (err) {
    console.error("❌ Error updating rescue request:", err);
    res.status(500).json({ result: "Something went wrong while updating rescue request" });
  }
};