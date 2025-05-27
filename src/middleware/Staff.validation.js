import Joi from "joi";

export class Validation{
    constructor(){}

    static StaffScheme = Joi.object({

        username: Joi.string().min(2).max(50).required(), 
        password: Joi.string().min(6).required(),       
        repeat_password: Joi.any().valid(Joi.ref("password")).required(),    
        birthDate: Joi.string().required(),   
        role: Joi.string().valid("user", "admin","superadmin"),
        branch_id:Joi.string().required()
    })

    static loginScheme = Joi.object({

        username: Joi.string().min(2).max(50).required(), 
        password: Joi.string().min(6).required()
    })
} 

