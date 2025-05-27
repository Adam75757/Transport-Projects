import {Router} from "express";
import AddressController from "../controller/address.controller.js";
import checktoken from "../middleware/checktoken.js";
let router_Address = Router();

router_Address.post("/api/v2/address/register",checktoken, AddressController.create);
router_Address.get("/api/v2/addres",checktoken, AddressController.getAll);
router_Address.get("/api/v2/adres:id", checktoken,AddressController.getOne);
router_Address.put("/api/adress/put/:id",checktoken, AddressController.update);
router_Address.delete("/api/adress/delete/:id",checktoken, AddressController.remove);

export default router_Address;
