
const Todo=require("../models/Todo");
exports.deleteTodo=async(req,res)=>{
    try{
        const id=req.params.id;
        const todos=await Todo.findByIdAndDelete({_id:id})
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
                message:"Data Deleted with given id!!"
            })
        }
    }
    catch(err){
        console.log("Error Occured while fetching id!")
        console.error(err)
        message:"error while fetching id"
    }
}

