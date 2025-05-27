import Joi from "joi";

export class ValidationPermission{
    constructor(){}

    static PermissionScheme = Joi.object({

        staff_id:Joi.string().required(),
        permissionModel:Joi.string().required(),
        actions:Joi.array().required()
    })


} 

