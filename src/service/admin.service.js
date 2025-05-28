import Staff from "../models/staff.model.js";
import CustomError from "../utils/error.js";

export class AdminService {
  static async create(data) {
    try {
      if (data.role !== "Admin") {
        throw new CustomError(403, "Faqat admin qo'shilishi mumkin");
      }
      return await Staff.create(data);
    } catch (err) {
      throw new CustomError(err.status || 500,err.message ||"Admin Not found");
    }
  }

  static async getAll() {
    try {
      return await Staff.find({ role: "Admin" }).populate("branch_id");
    } catch (err) {
      throw new CustomError(err.status || 500,err.message ||"Admin Not found");
    }
  }

  static async getById(id) {
    try {
      const admin = await Staff.findOne({ _id: id, role: "Admin" }).populate("branch_id");
      if (!admin) throw new CustomError(404, "Admin topilmadi");
      return admin;
    } catch (err) {
      throw new CustomError(err.status || 500,err.message ||"Admin Not found");
    }
  }

  static async update(id, data) {
    try {
      const admin = await Staff.findOne({ _id: id, role: "Admin" });
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
      const admin = await Staff.findOneAndDelete({ _id: id, role: "Admin" });
      if (!admin) throw new CustomError(404, "Admin topilmadi");
      return admin;
    } catch (err) {
      throw new CustomError(err.status || 500,err.message ||"Admin Not found");

    }
  }
}
