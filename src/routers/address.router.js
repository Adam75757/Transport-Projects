import {Router} from "express";
import AddressController from "../controller/address.controller.js";
import checktoken from "../middleware/checktoken.js";
import checkAdminPermission from "../middleware/AdminPermission.js";

let router_Address = Router();

router_Address.post("/api/v2/address/register",checktoken,checkAdminPermission("addAddress"), AddressController.create);
router_Address.get("/api/v2/address",checktoken,checkAdminPermission("Address"), AddressController.getAll);
router_Address.get("/api/v2/address/:id",checktoken, checkAdminPermission("Address/allInfo"),AddressController.getOne);
router_Address.put("/api/address/put/:id",checktoken,checkAdminPermission("changeAddress"), AddressController.update);
router_Address.delete("/api/address/delete/:id",checktoken,checkAdminPermission("deleteAddress"), AddressController.remove);

export default router_Address;