import config from "../config/nv.js";
import ApiError from "../utils/ApiError.js";

export const errorHandler = (err, req, res, next) => {
  let error=err;

  if(!(error instanceof ApiError)) {
    //convert non-ApiError instances into strctured ApiError
    const statusCode = error.statusCode || 500;
    const message = error.message || "Internal Server Error";
   
    //preserve the original stack trace
    error=new ApiError(statusCode, message,false,err.stack);
  }
    //handle mongose Duplicae key Error
    if(error.code===11000) {
      const field=Object.keys(error.keyValue)[0];
      const message=`Duplicate value for field: ${field}. Please use a different value.`;
      error=new ApiError(400,message,false,err.stack);
    }

    //Handle Moongose CastError(Invalid MongoDB objectId)
    if(err.name==="CastError"){
      const message=`Invalid resource identifier: ${err.value}. Please provide a valid resource identifier.`; 
      error=new ApiError(400,message,false,err.stack);
    }

    //handle JWT errors
  if (err.name === "JsonWebTokenError") {
    error=new ApiError(401,"Invalid token. Please log in again.");
  }

  if(err.name==="TokenExpiredError") {
    error=new ApiError(401,"Your token has expired. Please log in again.");
  }

  //structured standrad API  error response
  const response={
    success:false,
    statusCode:error.statusCode,
    message:error.message,
    errors:error.errors || [], // Granular field errors (e.g., Zod)
    ...ApiError(config.nodeEnv==="development" && { stack: error.stack }), // only expose stack trace in development
  };

  // log operational vs handled system crashes
  if (config.nodeEnv==="development" || !error.isOperational) {
    console.error(`[ERROR] ${req.method} ${req.url}: `, err);
  } 

  //send sanitized HTTP response
  return res.status(error.statusCode).json(response);
};
