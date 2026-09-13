import jwt from "jsonwebtoken";
import env from "../config/env.js";
import ApiError from "../utils/ApiError.js";

export const authMiddleware=(req,res,next)=>{
    const authHeader=req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return next(new ApiError(401, "Authentication token missing or invalid format,Unauthorized request."));
    }   

const token=authHeader.split(/\s+/)[1];

if (!token) {
    return next(new ApiError(401, "Authentication token missing"));
}

try{
    const decoded=jwt.verify(token,env.jwtSecret);
    req.user={
      id: decoded.id,
      role: decoded.role
    };
    next();
} catch (error) {
    if (error.name === "TokenExpiredError") {
      return next(new ApiError(401, "Token has expired, please log in again"));
    }
    return next(new ApiError(401, "Invalid authentication token."));
}
};