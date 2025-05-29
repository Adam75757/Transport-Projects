import CustomError from "../utils/error.js";
import newAddress from "../models/address.model.js";
import newStaff from "../models/staff.model.js";

class AddressService {
  async create(data) {
   try {
    if(data.name.length<=3) throw new CustomError(402,"Address nameni size zi kichik") 
     data =await newAddress.create(data);
    return data
  } catch (error) {
    throw new CustomError(error.status || 400,error.message || "Address olishda xatolik.");
    
   }
  }

  async findAll() {
    try {
      let data =await newAddress.find()
      return data
    } catch (error) {
    throw new CustomError(error.status || 500,error.message || "Address olishda xatolik.");
      
    }
  


  }

  

  async findById(id) {
  try {
    const address = await newAddress.findById(id);
    if (!address) {
      throw new CustomError(404,"Address not found");
    }
    return address;
  } catch (error) {
    throw new CustomError(error.status || 500,error.message || "Address olishda xatolik.");
    
  }
  }


  async getQueryAddress(query) {
    try {
                    
      let data = {  };

      if (query.name)  data.name = query.name;   
    

  let users = await newAddress.find(data);
  
  

  return {
      message: "Success",
      branch:users
  };
} catch (error) {
  throw new CustomError(error.status || 500, "Foydalanuvchilarni olishda xatolik");
}
    }

  async update(id, data) {
    try {
      if(!data){
      throw new CustomError(403,"Addressni o'zgartirish uchun malumot kiriting.");

      }
      let top = await newAddress.findById(id)
      if(!top) {
      throw new CustomError(404,"Address not found");

      }

    const addressupdate = await newAddress.updateOne({_id:id},{$set:data},{new:true})

    return {
      succase:true,
      message:"succase"
    }
    
  } catch (error) {
    throw new CustomError(error.status || 500,error.message || "Address olishda xatolik.");
      

    }
    }

  async delete(id) {
    try {
      const deleted = await newAddress.findByIdAndDelete(id);
    if (!deleted) {
      throw new CustomError(404,"Address not found");
    }
    return deleted;
    } catch (error) {
    throw new CustomError(error.status || 500,error.message || "Address olishda xatolik.");
      
    }
  }
}

export default new AddressService();

