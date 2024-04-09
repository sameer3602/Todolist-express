const express=require("express");
const router=express.Router();

const {createTodo}=require("../controllers/createTodo");
const {getTodo,getTodoById}=require("../controllers/getTodo");
const {updateTodo}=require("../controllers/updateTodo");
const {deleteTodo}=require("../controllers/deleteTodo");
router.post("/createTodos",createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodos/:id",getTodoById);
router.put("/updateTodos/:id",updateTodo);
router.delete("/deleteTodos/:id",deleteTodo)
module.exports= router;