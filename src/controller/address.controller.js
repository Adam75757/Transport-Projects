import AddressService from "../service/address.service.js";

class AddressController {
  async create(req, res, next) {
    try {
      const address = await AddressService.create(req.body);
      res.status(201).json({ success: true, data: address });
    } catch (err) {
      next(err);
    }
  }

  async getAll(req, res, next) {
    try {
      console.log("S");
      
      const addresses = await AddressService.findAll();
      res.json({ success: true, data: addresses }).status(200);
    } catch (err) {
      next(err);
    }
  }

  async getOne(req, res, next) {
    try {
      const address = await AddressService.findById(req.params.id);
      res.json({ success: true, data: address });
    } catch (err) {
      next(err);
    }
  }

  async getAddressQuery(req, res, next) {
    try {
      const address = await AddressService.getQueryAddress(req.query);
      res.json({ success: true, data: address });
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const updated = await AddressService.update(req.params.id, req.body)
      res.json({ success: true, data: updated });
    } catch (err) {
      next(err);
    }
  }

  async remove(req, res, next) {
    try {
      const deleted = await AddressService.delete(req.params.id)
      res.json({ success: true, data: deleted });
    } catch (err) {
      next(err);
    }
  }
}

export default new AddressController();
