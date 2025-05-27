import { Validation } from "../middleware/Staff.validation.js"
import { StaffService } from "../service/staff.service.js"

class StaffController{
    constructor(){}

    async register(req,res,next){
        try {
            let DataToken = {
                ip:req.ip,
                userAgent:req.headers["user-agent"]
            }

            let {error} = await Validation.StaffScheme.validate(req.body)
            if(error){
                return res.status(403).json({message:"Malumot xato",error:error.message})
            }

            let data = await StaffService.CreateStaff(req.body,DataToken)
            res.status(201).json({staus:201,message:"Succase",data})

        } catch (error) {
            next(error)
        }
    }

    async login(req, res, next) {
        try {
          let dataToken = {
            userIp: req.ip,
            userAgent: req.headers["user-agent"]
          };
    
          let { error } = Validation.loginScheme.validate(req.body);
    
          if (error) {
            return res.status(400).json({ message: "Ma'lumot xato", error: error.message });
          }
    
          let data = await StaffService.loginUser(req.body, dataToken);
    
          res.status(201).json({ data });
        } catch (error) {
          next(error);
        }
      }
    

    
  async getAll(req, res, next) {
    try {
      let data = await StaffService.userAll();

      res.status(200).json({ data });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }


  async getOne(req, res, next) {
    try {
      let data = await StaffService.userOne(req.params.id);

      res.status(200).json({ data });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async deleteUser(req,res,next){
    try {
      let data = await StaffService.userDelete(req.params)
      res.send(data)

    } catch (error) {
      next(error)
    }
  }

  async UpdateUser(req,res,next){
    try {
      let data = await StaffService.userUpdate(req.params.id,req.body)
      res.send(data)

    } catch (error) {
      next(error)
    }
  }

}

let newStaffController = new StaffController()

export default newStaffController