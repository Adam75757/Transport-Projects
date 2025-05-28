import { AdminService } from "../service/admin.service.js";

export class AdminController {
  static async create(req, res, next) {
    try {
      const staff = await AdminService.create(req.body);
      res.status(201).json(staff);
    } catch (err) {
      next(err);
    }
  }

  static async getAll(req, res, next) {
    try {
      const staffs = await AdminService.getAll();
      res.json(staffs);
    } catch (err) {
      next(err);
    }
  }

  static async getById(req, res, next) {
    try {
      const staff = await AdminService.getById(req.params.id);
      res.json(staff);
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    try {
      const updated = await AdminService.update(req.params.id, req.body);
      res.json(updated);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const result = await AdminService.delete(req.params.id);
      res.json({ message: "Admin o'chirildi", data: result });
    } catch (err) {
      next(err);
    }
  }
}
