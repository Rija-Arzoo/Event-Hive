// Express 4 does NOT automatically catch rejected promises inside
// async route handlers. If createEvent() throws (e.g. Mongo validation
// fails), without this wrapper the request just hangs / crashes the
// process instead of reaching errorHandler.js.
//
// This wraps any async controller function so its rejection gets
// passed to next(err), which Express then routes to errorHandler.


const asyncHandler=(executionFunction)=>{
    return(req,res,next)=>{
        Promise.resolve(executionFunction(req,res,next)).catch(next);
    };
};

export default asyncHandler;