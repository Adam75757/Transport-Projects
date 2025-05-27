import { Router } from "express";
import newPermissionController from "../controller/permission.controller.js";
import checktoken from "../middleware/checktoken.js";
import checkPermission from "../middleware/staff.permission.js";


let router_permission = Router()

router_permission.get("/api/v2/permission/:id",checktoken,checkPermission,newPermissionController.getOne)
router_permission.get("/api/v2/permissions/all",checktoken,checkPermission,newPermissionController.getAll)
router_permission.post("/api/v2/permission/register",checktoken,checkPermission,newPermissionController.register)
router_permission.put("/api/v2/update/permission/:id",checktoken,checkPermission,newPermissionController.UpdateUser)
router_permission.delete("/api/v2/delete/permission/:id",checktoken,checkPermission,newPermissionController.deleteUser)



export default router_permission