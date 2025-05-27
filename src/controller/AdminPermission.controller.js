import { ValidationAdminPermission } from "../middleware/AdminPermission.validation.js"
import { AdminPermissionService } from "../service/Admin.Permission.service.js"

class AdminPermissionController{
    constructor(){}

    async register(req,res,next){
        try {
          
            let {error} = await ValidationAdminPermission.AdminPermissionScheme.validate(req.body)
            if(error){
                return res.status(403).json({message:"Malumot xato",error:error.message})
            }

            let data = await AdminPermissionService.CreateStaff(req.body)
            res.status(201).json({staus:201,message:"Succase",data})

        } catch (error) {
            next(error)
        }
    }

    
  async getAll(req, res, next) {
    try {
      let data = await AdminPermissionService.userAll();

      res.status(200).json({ data });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }


  async getOne(req, res, next) {
    try {
      let data = await AdminPermissionService.userOne(req.params.id);

      res.status(200).json({ data });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async deleteUser(req,res,next){
    try {
      let data = await AdminPermissionService.userDelete(req.body,req.params.id)
      res.send(data)

    } catch (error) {
      next(error)
    }
  }

  async UpdateUser(req,res,next){
    try {
      let data = await AdminPermissionService.userUpdate(req.params.id,req.body)
      res.send(data)

    } catch (error) {
      next(error)
    }
  }

}

let newAdminPermissionController = new AdminPermissionController()

export default newAdminPermissionController