import BranchService from "../service/branch.service.js";

class BranchController {
  async create(req, res, next) {
    try {
      const address = await BranchService.create(req.body);
      res.status(201).json({ success: true, data: address });
    } catch (err) {
      next(err);
    }
  }

  async getAll(req, res, next) {
    try {
      const addresses = await BranchService.findAll();
      res.json({ success: true, data: addresses })
    } catch (err) {
      next(err);
    }
  }

  async getOne(req, res, next) {
    try {
      const address = await BranchService.findById(req.params.id)
      res.json({ success: true, data: address });
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const updated = await BranchService.update(req.params.id, req.body)
      res.json({ success: true, data: updated });
    } catch (err) {
      next(err);
    }
  }

  async remove(req, res, next) {
    try {
      const deleted = await BranchService.delete(req.params.id)
      res.json({ success: true, data: deleted });
    } catch (err) {
      next(err);
    }
  }
}

export default new BranchController();
