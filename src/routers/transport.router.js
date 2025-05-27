import { Router } from "express";
import newTransportController from "../controller/transport.controller.js";
import checktoken from "../middleware/checktoken.js";

let router_transport = Router()

router_transport.get("/api/v2/transport/:id",checktoken,newTransportController.getOne)
router_transport.get("/api/v2/transports/all",checktoken,newTransportController.getAll)
router_transport.post("/api/v2/transport/create",checktoken,newTransportController.Transportcreate)
router_transport.put("/api/v2/transport/update/:id",checktoken,newTransportController.UpdateTransport)
router_transport.delete("/api/v2/transport/delete/:id",checktoken,newTransportController.deletetransport)



export default router_transport