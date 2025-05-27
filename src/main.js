import express from "express"
import dotenv from "dotenv"
import Mongo_connect from "../src/config/database.js"
import fileUpload from "express-fileupload"
import Server_correct from "./logger/loger.js"
import router from "./routers/staff.router.js"
import router_Address from "./routers/address.router.js"
import router_branch from "./routers/branch.router.js"
import router_permission from "./routers/permission.router.js"
import router_transport from "./routers/transport.router.js"
import path from "path"
import router_Admin_permission from "./routers/Admin.permission.router.js"

dotenv.config()


let server = express()
server.use(express.json())
server.use(express.static(path.join(process.cwd(),"src","uploads")))
server.use(fileUpload())

await Mongo_connect()
let PORT = process.env.PORT || 4000

server.use(router)
server.use(router_Address)
server.use(router_branch)
server.use(router_permission)
server.use(router_transport)
server.use(router_Admin_permission)
server.use(Server_correct)


server.listen(PORT, () => console.log(`Server is running... on Port:${PORT}`))
