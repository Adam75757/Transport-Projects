import {Router} from "express" 
import { AdminController } from "../controller/admin.controller.js"
import checktoken from "../middleware/checktoken.js"
import checkAdminPermission from "../middleware/Admin.Permission.js"
let router_Admin = Router()

router_Admin.post("/api/v2/admin/add",checktoken,checkAdminPermission("addAdmin"),AdminController.create)
router_Admin.delete("/api/v2/admin/delete/:id",checktoken,checkAdminPermission("deleteAdmin"),AdminController.delete)
router_Admin.put("/api/v2/admin/update",checktoken,checkAdminPermission("changeAdmin"),AdminController.update)
router_Admin.get("/api/v2/admin/:id",checktoken,checkAdminPermission("Admin/one/info"),AdminController.getById)
router_Admin.get("/api/v2/admin/all",checktoken,checkAdminPermission("Admin/all/info"),AdminController.getAll)

export default router_Admin