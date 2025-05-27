import newPermission from "../models/permission.model.js";
import CustomError from "../utils/error.js"
import sha256 from "sha256";
import JWT from "../utils/jwt.js"
import newStaff from "../models/staff.model.js";

export class PermissionService{

    constructor(){}

    static async CreateStaff(body) {
        try {
            const odam = await newStaff.findById(body.staff_id);
            if (!odam) throw new CustomError(402, "Bunday User yo‘q");
    
            
            let birorPermission = await newPermission.findOne({ staff_id: body.staff_id });
    
            if (birorPermission) {
           
                let currentActions = birorPermission.actions || [];
    
            
                for (let action of body.actions) {
                    if (!currentActions.includes(action)) {
                        currentActions.push(action);
                    }
                }
    
    
                birorPermission.actions = currentActions;
                await birorPermission.save();
    
                return {
                    message: "Permission yangilandi",
                    data: birorPermission
                };
    
            } else {
               
                const newPerm = await newPermission.create(body);
                return {
                    message: "Permission yaratildi",
                    data: newPerm
                };
            }
    
        } catch (error) {
            throw new CustomError(403, error.message || "Xatolik yuz berdi");
        }
    }
    



    static async userAll() {
        try {
            let users = await newPermission.find();

            return {
                message: "Success",
                users
            };

        } catch (error) {
            console.log(error);
            throw new CustomError(500,"Foydalanuvchilarni olishda xatolik");
        }
    }


    static async userOne(body) {
        try {
    
            let users = await newPermission.findById(body);
    
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
    
    static async userDelete(body) {
        try {
            let users = await newPermission.deleteOne({_id:body.id});

            return {
                message: "User delete",
                succase:"Success"
            };

        } catch (error) {
            console.log(error);
            throw new CustomError(500,"Foydalanuvchilarni olishda xatolik");
        }
    }


    
    static async userUpdate(id, data) {
        try {
          
        console.log(id);
        
           let user = await newPermission.findById(id)
           
           if(!user){
             throw new CustomError(404,"User not found")

           };

           if (data.actions) user.actions = data.actions
           if (data.permissionModel) user.permissionModel = data.permissionModel


           user.save()


    
            return {
                message: "Foydalanuvchi muvaffaqiyatli yangilandi",
                success: true
            };
    
        } catch (error) {
            console.log(error);
            throw new CustomError(404,"User not found");

        }
    }
} 

