// src/middlewares/checkPermission.js

import CustomError from "../utils/CustomError.js";

const checkPermission = (action) => {
  return (req, res, next) => {
    try {
      const user = req.user; 


      if (user.role === "SuperAdmin") return next();

  
      if (user.role === "Admin") {
        const allowedForAdmin = [
          "addPermission", "deletePermission", "changePermission", "allPermissions", "ownPermissions",
          "transports", "addTransport", "changeTransport", "deleteTransport",
          "addBranch", "changeBranch", "deleteBranch", "branches", "branch/allInfo",
          "staffs", "staff/info", "deleteStaff", "changeStaff"
        ];

        if (allowedForAdmin.includes(action) && user.permissions?.includes(action)) {
          return next();
        } else {
          throw new CustomError(403, "Admin uchun ushbu amal ruxsat etilmagan yoki permissions yo'q");
        }
      }


      if (user.permissions?.includes(action)) {
        return next();
      }

      throw new CustomError(403, "Ushbu amal uchun ruxsatingiz yo'q");
    } catch (error) {
      next(error);
    }
  };
};

export default checkPermission;
