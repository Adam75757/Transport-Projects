
import newPermission from "../models/permission.model.js";
import CustomError from "../utils/error.js";

const checkPermission = (action) => {
  return (req, res, next) => {
    
    try {
      let {role} = req.user
      if(role == "SuperAdmin"){
        return  next()
      }else {
         throw new CustomError(401,"Vakolat yoq")
      }
      
    
    
      let Admin = [
        "addPermission", "deletePermission", "changePermission", "allPermissions", "ownPermissions",
        "transports", "addTransport", "changeTransport", "deleteTransport",
        "addBranch", "changeBranch", "deleteBranch", "branches", "branch/allInfo",
  
      ];
    } catch (error) {
      next(error)
    }

  }
};

export default checkPermission;
