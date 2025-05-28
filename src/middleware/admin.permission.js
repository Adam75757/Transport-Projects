
import newAdminPermission from "../models/admin.permission.model.js";
import newPermission from "../models/permission.model.js";
import CustomError from "../utils/error.js";

const checkAdminPermission = (action) => {
  return async(req, res, next) => {
    
    try {
      
      
      let {role,_id} = req.user
      
      if(role == "Staff"){
        throw new CustomError(403,"Siz avval Admin bo'ling huqquqingiz yoq siz Staffsiz.")
        
      }

      let actionAdmin = await newAdminPermission.findOne({staff_id:_id})

      
      if(role == "SuperAdmin"){
        return  next()
      }

      if(!actionAdmin || role == "Admin"){
      throw new CustomError(403,`Siz adminsiz lekin sizda hech qanday huquq yo'q`)

      }
      if(!actionAdmin.AdminActions.includes(action)){
      throw new CustomError(403,`Siz adminsiz lekin sizda ${action} ga action yoq`)

      }

   

    return next()

    } catch (error) {
      next(error)
    }

  }
};

export default checkAdminPermission;
