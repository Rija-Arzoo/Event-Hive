const asyncHandler=(executionFunction)=>{
    return(req,res,next)=>{
        Promise.resolve(executionFunction(req,res,next).catch(next));
    };
};

export default asyncHandler;