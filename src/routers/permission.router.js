import { Router } from "express";
import newPermissionController from "../controller/permission.controller.js";

let router_permission = Router()

router_permission.get("/api/v2/permission/:id",newPermissionController.getOne)
router_permission.get("/api/v2/permissions/all",newPermissionController.getAll)
router_permission.post("/api/v2/permission/register",newPermissionController.register)
router_permission.put("/api/v2/update/permission/:id",newPermissionController.UpdateUser)
router_permission.delete("/api/v2/delete//permission:id",newPermissionController.deleteUser)



export default router_permission