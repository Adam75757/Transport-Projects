import CustomError from "../utils/error.js"
import newAdminPermission from "../models/admin.permission.model.js";
import newStaff from "../models/staff.model.js";

export class AdminPermissionService{

    constructor(){}

    static async CreateStaff(body) {
        try {
            const odam = await newStaff.findById(body.staff_id);
            if (!odam) throw new CustomError(402, "Bunday User yo'q");
    
            
            let birorPermission = await newAdminPermission.findOne({ staff_id: body.staff_id });
    
            if (birorPermission) {
           
                let actiontek = birorPermission.AdminActions;
    
                for (let action of body.AdminActions) {
                    if (!actiontek.includes(action)) {
                        actiontek.push(action);
                    }
                }
    
    
                birorPermission.AdminActions = actiontek;
                await birorPermission.save();
    
                return {
                    message: "Permission Qo'shildi  ",
                    data: birorPermission
                };
    
            } else {
               
                let newAction = await newAdminPermission.create(body);
                return {
                    message: "Permission yaratildi",
                    data: newAction
                };
            }
    
        } catch (error) {
            throw new CustomError(error.status || 403, error.message || "Xatolik yuz berdi");
        }
    }
    



    static async userAll() {
        try {
            let users = await newAdminPermission.find();
            

            return {
                message: "Success",
                data: users
            };

        } catch (error) {
            throw new CustomError(error.status || 500,"Foydalanuvchilarni olishda xatolik");
        }
    }


    static async userOne(body) {
        try {
    
            let users = await newAdminPermission.findById(body);
    
            if (!users) {
                throw new CustomError(404 ,"Foydalanuvchi topilmadi");
            }
    
            return {
                message: "Success",
                users
            };
    
        } catch (error) {
            throw new CustomError(error.status || 500,error.message || "Foydalanuvchilarni olishda xatolik");
        }
    }
    
    static async userDelete(body,staff_id) {
        try {
            let { permissionModel, AdminActions } = body;
    
            if (!staff_id) {
                throw new CustomError(403, "staff_id ni kiriting");
            }
    
            if (!permissionModel) {
                throw new CustomError(403, "permissionModel ni kiriting");
            }
    
            if (!AdminActions || !Array.isArray(AdminActions) || AdminActions.length === 0) {
                throw new CustomError(403, "O'chirilishi kerak bo'lgan action larni array shaklida kiriting");
            }
    
    
            let user = await newAdminPermission.findOne({ staff_id, permissionModel });
    
            if (!user) {
                throw new CustomError(404, "Bunday permission topilmadi");
            }
    
            let result = await newAdminPermission.updateOne(
                { staff_id, permissionModel },
                { $pull: { AdminActions: { $in: AdminActions } } }
            );
    
      
            let updatedUser = await newAdminPermission.findOne({ staff_id, permissionModel });
    
            return {
                message: "Action o'chirildi",
                success: true,
                user: updatedUser
            };
    
        } catch (error) {
            throw new CustomError(error.status || 500, error.message || "Permission'dan action o'chirishda xatolik yuz berdi");
        }
    }    
    
    static async userUpdate(id, data) {
        try {
                  
           let user = await newAdminPermission.findById(id)
           
           if(!user){
             throw new CustomError(404,"User not found")

           };

           if (data.AdminActions) user.AdminActions = data.AdminActions
           if (data.permissionModel) user.permissionModel = data.permissionModel


           user.save()


    
            return {
                message: "Foydalanuvchi muvaffaqiyatli yangilandi",
                success: true
            };
    
        } catch (error) {
            throw new CustomError(404,"User not found");

        }
    }
} 

