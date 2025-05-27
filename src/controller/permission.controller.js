import { ValidationPermission } from "../middleware/Permission.validation.js"
import { PermissionService } from "../service/permission.service.js"

class PermissionController{
    constructor(){}

    async register(req,res,next){
        try {
          
            let {error} = await ValidationPermission.PermissionScheme.validate(req.body)
            if(error){
                return res.status(403).json({message:"Malumot xato",error:error.message})
            }

            let data = await PermissionService.CreateStaff(req.body)
            res.status(201).json({staus:201,message:"Succase",data})

        } catch (error) {
            next(error)
        }
    }

    
  async getAll(req, res, next) {
    try {
      let data = await PermissionService.userAll();

      res.status(200).json({ data });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }


  async getOne(req, res, next) {
    try {
      let data = await PermissionService.userOne(req.params.id);

      res.status(200).json({ data });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async deleteUser(req,res,next){
    try {
      let data = await PermissionService.userDelete(req.params)
      res.send(data)

    } catch (error) {
      next(error)
    }
  }

  async UpdateUser(req,res,next){
    try {
      let data = await PermissionService.userUpdate(req.params.id,req.body)
      res.send(data)

    } catch (error) {
      next(error)
    }
  }

}

let newPermissionController = new PermissionController()

export default newPermissionController