import {Router} from "express";
import BranchController from "../controller/branch.controller.js";
import checktoken from "../middleware/checktoken.js";

let router_branch = Router();

router_branch.post("/api/v2/branch/register",checktoken, BranchController.create);
router_branch.get("/api/v2/branches",checktoken, BranchController.getAll);
router_branch.get("/api/v2/branch/:id",checktoken, BranchController.getOne);
router_branch.put("/api/v2/branch/:id",checktoken, BranchController.update);
router_branch.delete("/api/v2/branch/:id",checktoken, BranchController.remove);

export default router_branch;
