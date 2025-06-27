//controller
//we can also use below func
/*
export var save=function (req,res){
     res.send("controller working inside ngocontroller");
}*/
import '../model/connection.js'
import ngoSchemaModel from '../model/ngomodel.js';
import url from 'url';
import jwt from 'jsonwebtoken';
import rs from 'randomstring';
import { sendStatusEmail } from './emailcontroller.js';

export const save = async (req, res) => {
  console.log("hdd");
  var ngoList = await ngoSchemaModel.find();
  //console.log(ngoList);
  var len = ngoList.length;
  //console.log(len);
  var _id = (len == 0) ? 1 : ngoList[len - 1]._id + 1;
  //console.log(_id);
  var ngoDetail = req.body;
  ngoDetail = { ...ngoDetail, "_id": _id, "role": "ngo", "status": 0, "info": Date() }
  //console.log(ngoDetail);
  try {

    const ngos = await ngoSchemaModel.create(ngoDetail);
    res.status(201).json({ "status": true });
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ "status": false });
  }
}

export const fetch = async (req, res) => {
  var condition_obj = url.parse(req.url, true).query;
  console.log(condition_obj);



  var ngo = await ngoSchemaModel.find(condition_obj)//ye array return karega'''''''''
  console.log(ngo);
  if (ngo.length != 0) {
    res.status(200).json({
      "ngo": ngo
    })
  } else {
    res.status(404).json({
      "result": "not found"
    })
  }
  /*
  var ngo=await ngoSchemaModel.findOne(condition_obj) //ye obj return karega
   console.log(ngo);
   if (ngo) {
     res.status(200).json({
          "ngo":ngo
     })
   } else {
      res.status(404).json({
          "result":"not found"
     })
   }*/
}


//to update
export const update = async (req, res) => {
  console.log("hi");
  var condition_obj = (req.body.condition_obj);
  var content_obj = req.body.content_obj;
  console.log(condition_obj);
  var ngo = await ngoSchemaModel.findOne(condition_obj);
  //console.log(ngo);
  if (ngo) {
    var update_ngo = await ngoSchemaModel.updateOne(req.body.condition_obj, { $set: req.body.content_obj });
    if (update_ngo) {
      if (content_obj.status === 1) {
        await sendStatusEmail(ngo.email, ngo.name, "approved");
      } else if (content_obj.status === 0) {
        await sendStatusEmail(ngo.email, ngo.name, "blocked");
      }

      res.status(200).json({ "result": "ngo-updated successfully" });

    }

    else {
      res.status(500).json({ "result": "resource cant updated successfully" });
    }
  }

  else {
    res.status(404).json({ "result": "data not found in database" });
  }
}



//delete controller

export const deleteNgo = async (req, res) => {
  var ngo = await ngoSchemaModel.findOne(req.body);
  console.log(ngo);
  if (ngo) {
    var delete_ngo = await ngoSchemaModel.deleteOne(req.body);
    if (delete_ngo) {
      await sendStatusEmail(ngo.email, ngo.name, "rejected");
      res.status(200).json({ "result": "ngo-deleted successfully" });

    } else {
      res.status(500).json({ "result": "resource cant deleyted successfully" });
    }
  }
  else {
    res.status(404).json({ "result": "ngo not found in database" });
  }
}

//to login
export const login = async (req, res) => {
  // console.log("login");
  // var ngoDetail=req.body;
  console.log("Login Request:", req.body);

  var ngoDetail = { ...req.body, "status": 1 }
  console.log(ngoDetail);
  var ngoList = await ngoSchemaModel.find(ngoDetail);
  console.log("ngo", ngoList);
  if (ngoList.length != 0) {
    const payload = { "subject": ngoList[0].email };  //it must be unique value of collection like email,id
    const key = rs.generate();   //it generates random value
    const token = jwt.sign(payload, key)  //it generates token
    res.status(200).json({ "token": token, "ngoList": ngoList[0] });
  }
  else {
    res.status(500).json({ "result": "Login unsuccessfull!", "token": "token not found" });
  }
}