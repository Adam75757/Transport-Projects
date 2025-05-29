import { TransportValidation } from "../middleware/transport.validation.js"
import { TransportService } from "../service/transport.service.js"

class TransportController{
    constructor(){}

    async Transportcreate(req,res,next){
        try {
            let {error} = await TransportValidation.TransportScheme.validate(req.body)
            if(error){
                return res.status(403).json({message:"Malumot xato",error:error.message})
            }

            let data = await TransportService.createTransport(req.body,req.files.img)
            res.status(201).json({staus:201,message:"Succase",data})

        } catch (error) {
            next(error)
        }
    }

    
  async getAll(req, res, next) {
    try {
      let data = await TransportService.transportAll();

      res.status(200).json({ data });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }


  async getOne(req, res, next) {
    try {
      let data = await TransportService.transportOne(req.params.id);

      res.status(200).json({ data });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async getQueryTransport(req, res, next) {
    try {
      let data = await TransportService.getTransportquery(req.query);

      res.status(200).json({ data });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async deletetransport(req,res,next){
    try {
      let data = await TransportService.transportDelete(req.params)
      res.send(data)

    } catch (error) {
      next(error)
    }
  }

  async UpdateTransport(req,res,next){
    try {
      let data = await TransportService.transportUpdate(req.params.id,req.body)
      res.send(data)

    } catch (error) {
      next(error)
    }
  }

}

let newTransportController = new TransportController()

export default newTransportController