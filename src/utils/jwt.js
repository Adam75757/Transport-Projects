import JWT from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export default {
  sign: (payload) =>JWT.sign(payload, process.env.JWT_SECRET,{ expiresIn:"3d" }),
  signRef: (payload) =>JWT.sign(payload,process.env.JWT_SECRET,{ expiresIn:"1d" }),
  verify: (token) =>JWT.verify(token, process.env.JWT_SECRET) ,
};
