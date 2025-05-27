import Joi from "joi";

export class ValidationAdminPermission{
    constructor(){}

    static AdminPermissionScheme = Joi.object({

        staff_id:Joi.string().required(),
        permissionModel:Joi.string().required(),
        AdminActions:Joi.array().required()
    })


} 

