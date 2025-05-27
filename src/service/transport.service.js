import CustomError from "../utils/error.js"
import newTransport from "../models/transport.model.js";
import path from "path"
import Staff from "../models/staff.model.js";

export class TransportService{

    constructor(){}

    static async createTransport(body,img) {
        try {
          
            
            if(!img) throw new CustomError(403,"img required")
            let filename = new Date().getTime()+"."+img.name
        
            if (img.name.toLowerCase().endsWith(".jfif")) {
                throw new CustomError(400, "jfif formatdagi fayllarga ruxsat yo'q");
              }
              if (!img.name.toLowerCase().endsWith(".jpeg") ) {
                throw new CustomError(400, "Bizga imgni faqat jpeg formatda yuboring.");
              }
              
            img.mv(path.join(process.cwd(),"src","uploads",filename))
            body.img = filename
                   
            let top = await newTransport.create(body)
    
    
            return {
               top
            };
        } catch (error) {
            throw new CustomError(403, error.message);
        }
    }

static async transportAll() {
        try {
            let users = await newTransport.find();

            return {
                message: "Success",
                users
            };

        } catch (error) {
            console.log(error);
            throw new CustomError(500,"Foydalanuvchilarni olishda xatolik");
        }
    }


    static async transportOne(body) {
        try {
    
            let users = await newTransport.findById(body);
    
            if (!users) {
                throw new CustomError(404 ,"Foydalanuvchi topilmadi");
            }
    
            return {
                message: "Success",
                users
            };
    
        } catch (error) {
            console.error("Xatolik:", error);
            throw new CustomError(500,"Foydalanuvchilarni olishda xatolik");
        }
    }
    
    static async transportDelete(body) {
        try {
            let top = await newTransport.findOne({_id:body.id})

            if(!top){
                throw new CustomError(404,"Bunday foydalanuvchi yoq...")
            }


            let users = await newTransport.deleteOne({_id:body.id});
            
          
            return {
                message: "User delete",
                succase:"Success"
            };

        } catch (error) {
            throw new CustomError(error.status || 500,"Foydalanuvchilarni olishda xatolik");
        }
    }


    
    static async transportUpdate(id, data) {
        try {
                  
           let transport = await newTransport.findById(id)
           
           if(!transport){
             throw new CustomError(404,"User not found")

           };

           if (data.model) transport.model = data.model
           if (data.color) transport.color = data.color
           if (data.price) transport.price = data.price
           if (data.branch_id) transport.branch_id = data.branch_id

           transport.save()
            return {
                message: "Foydalanuvchi muvaffaqiyatli yangilandi",
                success: true,
                transport
            };
    
        } catch (error) {
            throw new CustomError(error.status || 500,"User not found");

        }
    }
} 

