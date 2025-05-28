import {Router} from "express";
import BranchController from "../controller/branch.controller.js";
import checktoken from "../middleware/checktoken.js";
import checkAdminPermission from "../middleware/Admin.Permission.js";

let router_branch = Router();

router_branch.post("/api/v2/branch/register",checktoken,checkAdminPermission("addBranch"), BranchController.create);
router_branch.get("/api/v2/branches",checktoken, checkAdminPermission("branches"),BranchController.getAll);
router_branch.get("/api/v2/branch/:id",checktoken,checkAdminPermission("branch/allInfo") ,BranchController.getOne);
router_branch.put("/api/v2/branch/:id",checktoken,checkAdminPermission("changeBranch") ,BranchController.update);
router_branch.delete("/api/v2/branch/:id",checktoken,checkAdminPermission("deleteBranch"), BranchController.remove);

export default router_branch;
