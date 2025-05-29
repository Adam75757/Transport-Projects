import { Router } from "express";
import newTransportController from "../controller/transport.controller.js";
import checktoken from "../middleware/checktoken.js";
import checkAdminPermission from "../middleware/AdminPermission.js";

let router_transport = Router()

router_transport.get("/api/v2/transport/:id",checktoken,checkAdminPermission("transport/allInfo"),newTransportController.getOne)
router_transport.get("/api/v2/transports/all",checktoken,checkAdminPermission("transports"),newTransportController.getAll)
router_transport.get("/api/v2/transports/query",checktoken,checkAdminPermission("transports"),newTransportController.getQueryTransport)

router_transport.post("/api/v2/transport/create",checktoken,checkAdminPermission("addTransport"),newTransportController.Transportcreate)
router_transport.put("/api/v2/transport/update/:id",checktoken,checkAdminPermission("changeTransport"),newTransportController.UpdateTransport)
router_transport.delete("/api/v2/transport/delete/:id",checktoken,checkAdminPermission("deleteTransport"),newTransportController.deletetransport)



export default router_transport