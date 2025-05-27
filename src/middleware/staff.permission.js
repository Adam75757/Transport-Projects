import newPermission from "../models/permission.model.js";
import CustomError from "../utils/error.js";
import newStaff from "../models/staff.model.js";

export default async (req, res, next) => {
  try {
    let { role, _id } = req.user;

    if (role === "SuperAdmin" || role === "Admin") {
      return next();
    }

    const methodToAction = {
      GET: "read",
      POST: "write",
      PUT: "update",
      DELETE: "delete"
    };

    const currentAction = methodToAction[req.method];
 
    let staffPermission = await newPermission.findOne({ staff_id: _id });

    if (!staffPermission) {
      return next(new CustomError(403,"Staff uchun permission topilmadi"));
    }

    if (!staffPermission.actions.includes(currentAction)) {
      return next(
        new CustomError(403,`Sizda bu amalni (${currentAction}) bajarish huquqi yo'q`)
      );
    }5

    return next();
  } catch (error) {
    next(error);
    console.log(error);
    
  }
};
