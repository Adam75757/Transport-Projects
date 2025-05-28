import { Router } from "express";
import newAdminPermissionController from "../controller/AdminPermission.controller.js";
import checktoken from "../middleware/checktoken.js";
import checkAdminPermission from "../middleware/Admin.Permission.js";

let router_Admin_permission = Router()

router_Admin_permission.get("/api/v2/admin/permission/:id",checktoken,checkAdminPermission("ownPermissions"),newAdminPermissionController.getOne)
router_Admin_permission.get("/api/v2/admin/permissions/all",checktoken,checkAdminPermission("allPermissions"),newAdminPermissionController.getAll)
router_Admin_permission.post("/api/v2/admin/permission/register",checktoken,checkAdminPermission("addPermission"),newAdminPermissionController.register)
router_Admin_permission.put("/api/v2/admin/update/permission/:id",checktoken,checkAdminPermission("changePermission"),newAdminPermissionController.UpdateUser)
router_Admin_permission.delete("/api/admin/v2/delete/permission/:id",checktoken,checkAdminPermission("deletePermission"),newAdminPermissionController.deleteUser)


export default router_Admin_permission