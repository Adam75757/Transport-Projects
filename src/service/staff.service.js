import newStaff from "../models/staff.model.js";
import CustomError from "../utils/error.js"
import sha256 from "sha256";
import JWT from "../utils/jwt.js"

export class StaffService{

    constructor(){}

    static async CreateStaff(body,dataToken){
        try{
            let odam = await newStaff.findOne({username:body.username})
            if(odam) throw new CustomError(402,"Bunday User bor")  
           
            body.password = sha256(body.password);
               
                delete body.repeat_password
                
            let top = await newStaff.create(body)
    
            dataToken._id = top._id;
    
            return {
                accessToken: JWT.sign(dataToken),
                refreshToken: JWT.signRef(dataToken)
                
            };
        } catch (error) {
            throw new CustomError(error.status || 500,error.message || "Bunday foydalanuvchi bor");
        }
    }


    

    static async loginUser(body, dataToken) {
        try {
            let { username, password } = body;

            let foundUser = await newStaff.findOne({ username, password: sha256(password) });

            if (!foundUser) {
                throw new CustomError(404,"Bunday foydalanuvchi topilmadi");
            }

            dataToken._id = foundUser._id;

            return {
                accessToken: JWT.sign(dataToken),
                refreshToken: JWT.signRef(dataToken),
                foundUser
            };
        } catch (error) {
            throw new CustomError(error.status || 500, error.message);
        }
    }

    static async userAll() {
        try {
            let users = await newStaff.find();

            return {
                message: "Success",
                users
            };

        } catch (error) {
            throw new CustomError(error.status || 500,"Foydalanuvchilarni olishda xatolik");
        }
    }


    static async userOne(body) {
        try {
    
            let users = await newStaff.findById(body);
    
            if (!users) {
                throw new CustomError(404 ,"Foydalanuvchi topilmadi");
            }
    
            return {
                message: "Success",
                users
            };
    
        } catch (error) {
            throw new CustomError(error.status || 500,"Foydalanuvchilarni olishda xatolik");
        }
    }
    
    static async userDelete(body) {
        try {
            let users = await newStaff.deleteOne({_id:body.id});

            return {
                message: "User delete",
                succase:"Success"
            };

        } catch (error) {
            console.log(error);
            throw new CustomError(error.status || 500,"Foydalanuvchilarni olishda xatolik");
        }
    }
    
    static async userUpdate(id, data) {
        try {
           let user = await newStaff.findById(id)         
           if(!user){
             throw new CustomError(error.status || 500,"User not found")
           };
           if (data.username) user.username = data.username
           if (data.password) user.password = data.password
           if (data.birthDate) user.birthDate = data.birthDate
           user.save()
            return {
                message: "Foydalanuvchi muvaffaqiyatli yangilandi",
                success: true
            };
        } catch (error) {
            throw new CustomError(error.status || 500,"User not found");

        }
    }
} 

