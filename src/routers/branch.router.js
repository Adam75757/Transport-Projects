import {Router} from "express";
import BranchController from "../controller/branch.controller.js";

let router_branch = Router();

router_branch.post("/api/v2/branch/register", BranchController.create);
router_branch.get("/api/v2/branches", BranchController.getAll);
router_branch.get("/api/v2/branch/:id", BranchController.getOne);
router_branch.put("/api/v2/branch/:id", BranchController.update);
router_branch.delete("/api/v2/branch/:id", BranchController.remove);

export default router_branch;
