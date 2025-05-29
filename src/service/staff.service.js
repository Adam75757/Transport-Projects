import newStaff from "../models/staff.model.js";
import CustomError from "../utils/error.js";
import sha256 from "sha256";
import JWT from "../utils/jwt.js";

export class StaffService {

    constructor() {}

    static async CreateStaff(body, dataToken) {
        try {
            let odam = await newStaff.findOne({ username: body.username });
            if (odam) throw new CustomError(402, "Bunday User bor");

            body.password = sha256(body.password);
            delete body.repeat_password;

            let top = await newStaff.create(body);
            dataToken._id = top._id;

            return {
                accessToken: JWT.sign(dataToken),
                refreshToken: JWT.signRef(dataToken)
            };
        } catch (error) {
            throw new CustomError(error.status || 500, error.message || "Foydalanuvchi yaratishda xatolik");
        }
    }

    static async loginUser(body, dataToken) {
        try {
            let { username, password } = body;
            let foundUser = await newStaff.findOne({ username, password: sha256(password) });

            if (!foundUser) {
                throw new CustomError(404, "Bunday foydalanuvchi topilmadi");
            }

            dataToken._id = foundUser._id;

            return {
                accessToken: JWT.sign(dataToken),
                refreshToken: JWT.signRef(dataToken),
                foundUser
            };
        } catch (error) {
            throw new CustomError(error.status || 500, error.message || "Login xatoligi");
        }
    }

    static async userAll() {
        try {
            let users = await newStaff.find({ role: "Staff" });

            return {
                message: "Success",
                users
            };
        } catch (error) {
            throw new CustomError(error.status || 500, "Foydalanuvchilarni olishda xatolik");
        }
    }
    static async getUserquery(query) {
        try {
                        
                let data = { role: "Staff" };
    
                if (query.username)  data.username = query.username;   
                if (query.password) data.password = sha256(query.password);
                if (query.gender)   data.gender = query.gender;
    
            let users = await newStaff.find(data);
            
            
    
            return {
                message: "Success",
                users
            };
        } catch (error) {
            throw new CustomError(error.status || 500, "Foydalanuvchilarni olishda xatolik");
        }
    }
    


    

    static async userOne(body) {
        try {
            let users = await newStaff.findOne({ _id: body.id, role: "Staff" });

            if (!users) {
                throw new CustomError(404, "Foydalanuvchi topilmadi");
            }

            return {
                message: "Success",
                users
            };
        } catch (error) {
            throw new CustomError(error.status || 500, "Foydalanuvchini olishda xatolik");
        }
    }

    static async userDelete(body) {
        try {
            
            let users = await newStaff.deleteOne({ _id: body.id, role: "Staff" });
            if(users.deletedCount == 0) throw new CustomError(404, "Staff not found");

            return {
                message: "User delete",
                success: "Success"
            };
        } catch (error) {
            throw new CustomError(error.status || 500,error.message || "Foydalanuvchini o'chirishda xatolik");
        }
    }

    static async userUpdate(id, data) {
        try {
            let user = await newStaff.findOne({ _id: id, role: "Staff" });

            if (!user) {
                throw new CustomError(404, "Foydalanuvchi topilmadi");
            }

            if (data.username) user.username = data.username;
            if (data.password) user.password = sha256(data.password);
            if (data.birthDate) user.birthDate = data.birthDate;

            await user.save();

            return {
                message: "Foydalanuvchi muvaffaqiyatli yangilandi",
                success: true
            };
        } catch (error) {
            throw new CustomError(error.status || 500, error.message || "Yangilashda xatolik");
        }
    }
}
