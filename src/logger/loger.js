import winston from "winston";
import path from "path";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json() 
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: path.join(process.cwd(), "src", "logger", "xatolar.log") })
  ]
});

const Server_correct = (error, req, res, next) => {
  try {
    if ( error.status < 500) {
      return res.status(error.status || 400).json({status:error.status || 400,succase:false, message: error.message });
    } else {
      logger.error(error.stack || error.message);
      return res.status(500).json({status:500,succase:false, message: "Serverda xatolik yuz berdi" });
    }
  } catch (xato) {
    logger.error(xato.stack || xato.message);
    return res.status(500).json({status:500,succase:false, message: "Serverda xatolik yuz berdi!!!" });
  }
};

export default Server_correct;
