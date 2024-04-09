const { response } = require("express");
const Todo=require("../models/Todo");

exports.getTodo=async(req,res)=>{
    try{
        const todos=await Todo.find({});
        res.status(200).json({
            success:true,
            data:todos,
            message:"Todo Data is Fetched"
        });
    }
    catch(err){
        console.error(err)
        response.status(500).json({
            success:false,
            error:err.message,
            message:'server error'
        })
    }
}

//function to get Todos By Id

exports.getTodoById=async(req,res)=>{
    try{
        const id=req.params.id;
        const todos=await Todo.findById({_id:id})
        if (!todos){
            return res.status(404).json(
                {
                    success:false,
                    message:"no data found with given id",

                }
            )}
        else{
            res.status(200).json({
                success:true,
                data:todos,
                message:"Data Found with given id!!"
            })
        }
    }
    catch(err){
        console.log("Error Occured while fetching id!")
        console.error(err)
        message:"error while fetching id"
    }
}

