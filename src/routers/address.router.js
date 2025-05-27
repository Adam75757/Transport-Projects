import {Router} from "express";
import AddressController from "../controller/address.controller.js";

let router_Address = Router();

router_Address.post("/api/v2/address/register", AddressController.create);
router_Address.get("/api/v2/addres", AddressController.getAll);
router_Address.get("/api/v2/adres:id", AddressController.getOne);
router_Address.put("/api/adress/put/:id", AddressController.update);
router_Address.delete("/api/adress/delete/:id", AddressController.remove);

export default router_Address;
