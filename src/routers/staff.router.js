import { Router } from "express";
import newStaffController from "../controller/staff.controller.js";
import checktoken from "../middleware/checktoken.js";
import checkPermission from "../middleware/staff.permission.js";

let router = Router()

router.post("/api/v2/register",newStaffController.register)
router.post("/api/v2/login",newStaffController.login)
router.get("/api/v2/user/:id",newStaffController.getOne)
router.get("/api/v2/users/all",checktoken,checkPermission,newStaffController.getAll)
router.put("/api/v2/update/:id",checktoken,checkPermission,newStaffController.UpdateUser)
router.delete("/api/v2/delete/:id",checktoken,checkPermission,newStaffController.deleteUser)



export default router