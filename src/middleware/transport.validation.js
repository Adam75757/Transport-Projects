import Joi from "joi";

export class TransportValidation{
    constructor(){}

    static  TransportScheme = Joi.object({

        branch_id: Joi.string().required(),
       
    
      model: Joi.string().min(2).max(100).required(),
      
    
      color: Joi.string().min(3).max(30).required(),
         
    
      img: Joi.string(),
      
    
      price: Joi.number().positive().required(),
      
    
      createAt: Joi.date()
        
    })

} 

