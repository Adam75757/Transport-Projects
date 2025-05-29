import CustomError from "../utils/error.js";
import newStaff from "../models/staff.model.js";

export class AdminService {
  static async create(data) {
    try {
      if (data.role !== "Admin") {
        throw new CustomError(403, "Faqat admin qo'shilishi mumkin");
      }

      data.role ="Admin"
      
     let malumot= await newStaff.create(data);
    
    return malumot
      } catch (err) {
      throw new CustomError(err.status || 500,err.message ||"Admin Not found");
    }
  }

  static async getAll() {
    try { 
        let data =await newStaff.find({ role: "Admin" })
      return data
      } catch (err) {
      throw new CustomError(err.status || 500,err.message ||"Admin Not found");
    }
  }

  static async getById(id) {
    try {
      if (!id) throw new CustomError(403, "id kiritilmadi.");
    
      let admin = await newStaff.findOne({ _id: id, role: "Admin" }).populate("branch_id");
      if (!admin) throw new CustomError(404, "Admin topilmadi");
      return admin;
    } catch (err) {
      throw new CustomError(err.status || 500,err.message ||"Admin Not found");
    }
  }

  static async update(id, data) {
    try {
      let admin = await newStaff.findOne({ _id: id, role: "Admin" });
      if (!admin) throw new CustomError(404, "Admin topilmadi");

      Object.assign(admin, data);
      await admin.save();
      return admin;
    } catch (err) {
      throw new CustomError(err.status || 500,err.message ||"Admin Not found");

    }
  }

  static async delete(id) {
    try {
      let admin = await newStaff.findOneAndDelete({ _id: id, role: "Admin" });
      if (!admin) throw new CustomError(404, "Admin topilmadi");
      return admin;
    } catch (err) {
      throw new CustomError(err.status || 500,err.message ||"Admin Not found");

    }
  }
}
