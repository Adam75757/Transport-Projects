import { Router } from "express";
import newPermissionController from "../controller/permission.controller.js";
import checktoken from "../middleware/checktoken.js";


let router_permission = Router()

router_permission.get("/api/v2/permission/:id",checktoken,newPermissionController.getOne)
router_permission.get("/api/v2/permissions/all",checktoken,newPermissionController.getAll)
router_permission.post("/api/v2/permission/register",checktoken,newPermissionController.register)
router_permission.put("/api/v2/update/permission/:id",checktoken,newPermissionController.UpdateUser)
router_permission.delete("/api/v2/delete/permission/:id",checktoken,newPermissionController.deleteUser)



export default router_permission