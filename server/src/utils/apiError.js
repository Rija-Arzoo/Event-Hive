class ApiError extends Error {
  constructor(
    statusCode,
    message,
    isOperational = true,
    stack = "",
    errors = [] // 1. Added 5th parameter for field-level errors (e.g. Zod validation)
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.errors = errors; // 2. Attached errors array
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;