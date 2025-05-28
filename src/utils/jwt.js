import JWT from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export default {
  sign: (payload) =>JWT.sign(payload, process.env.JWT_SECRET,{ expiresIn:"4m" }),
  signRef: (payload) =>JWT.sign(payload,process.env.JWT_SECRET,{ expiresIn:"2m" }),
  verify: (token) =>JWT.verify(token, process.env.JWT_SECRET) ,
};
