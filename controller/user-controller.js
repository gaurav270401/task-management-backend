 
import { response } from "express";
import tasktable from "../schema/user-schema.js";

 export const addtaskdata = async (req,res)=>{  //request ke use se api ke sath frontend se bheja jata hein and response ke use backed se frontend bhej sakte hein
   const data=req.body;
   const newtask=new tasktable(data);

   try {
     await newtask.save();
     res.status(201).json(newtask);
   } catch (error) {
    res.status(409).json({message:error.message});
   }
 }

 export const getTasks= async (req,res)=>{
  try {
    const tasks= await tasktable.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({message:error.message});

  }
 }

 export const getTask=async(req,res)=>{
  
  try {
    // these req.params.is also find using findbyid function
    // const task= await tasktable.findById({userId:req.params.id});
    const task= await tasktable.find({userId:req.params.id});
    res.status(200).json(task);
  } catch (error) {
    res.status(404).json({message:error.message});

  }
 }

 export const edittaskdata = async (req,res)=>{  //request ke use se api ke sath frontend se bheja jata hein and response ke use backed se frontend bhej sakte hein
  const data=req.body;
  const edittask=new tasktable(data);

  try {
    await tasktable.updateOne({userId:req.params.id},edittask);
    res.status(201).json(newtask);
  } catch (error) {
   res.status(409).json({message:error.message});
  }
}

export const deletetask=async(req,res)=>{
  try {
    await tasktable.deleteOne({userId:req.params.id});
    res.status(200).json({message:"task delete successfully"});
  } catch (error) {
   res.status(404).json({message:error.message});
  }
}