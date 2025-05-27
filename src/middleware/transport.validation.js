import Joi from "joi";

export class TransportValidation{
    constructor(){}

    static  TransportScheme = Joi.object({

        branch_id: Joi.string().required()
        .messages({
          "string.pattern.base": "branch_id noto'g'ri",
          "any.required": "branch_id majburiy"
        }),
    
      model: Joi.string().min(2).max(100).required()
        .messages({
          "string.base": "model matn bo'lishi kerak",
          "any.required": "model majburiy"
        }),
    
      color: Joi.string().min(3).max(30).required().messages({
          "string.base": "color matn bo‘lishi kerak",
          "any.required": "color majburiy"
        }),
    
      img: Joi.string().uri().messages({
          "string.uri": "img haqiqiy URL formatida bo‘lishi kerak",
          "any.required": "img majburiy"
        }),
    
      price: Joi.number().positive().required().messages({
          "number.base": "price son bo‘lishi kerak",
          "number.positive": "price musbat son bo‘lishi kerak",
          "any.required": "price majburiy"
        }),
    
      createAt: Joi.date()
        
    })

} 

