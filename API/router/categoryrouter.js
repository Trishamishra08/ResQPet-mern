import express from 'express';
const router=express.Router();
import *as categoryController from '../controller/categorycontroller.js';
router.post("/save",categoryController.save);
router.get("/fetch",categoryController.fetch); //to read or fetch data
router.delete("/delete",categoryController.remove); //to delete data
export default router;