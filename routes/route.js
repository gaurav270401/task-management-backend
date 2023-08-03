import express,{ Router } from "express";
import { addtaskdata,getTasks,getTask,edittaskdata,deletetask} from "../controller/user-controller.js";


const router =express.Router();

router.post("/addtask",addtaskdata);
router.get("/tasks",getTasks);
router.get("/:id",getTask);
router.post("/:id",edittaskdata);
router.delete("/:id",deletetask);
export default router;