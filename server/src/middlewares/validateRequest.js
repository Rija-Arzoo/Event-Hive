import ApiError from "../utils/apiError.js";

export const validateRequest = (schema) => (req, res, next) => {
  // Pass req directly so Zod can validate req.body, req.params, or req.query
  const result = schema.safeParse({
    body: req.body,
    params: req.params,
    query: req.query,
  });

  if (!result.success) {
    const formattedErrors = result.error.errors.map((err) => ({
      field: err.path.join("."), // e.g. "body.email" or "body.password"
      message: err.message,
    }));

    const firstMessage = formattedErrors[0]?.message || "Validation failed";

    return next(new ApiError(400, firstMessage, true, "", formattedErrors));
  }

  // Update request objects with stripped/sanitized data
  if (result.data.body) req.body = result.data.body;
  if (result.data.params) req.params = result.data.params;
  if (result.data.query) req.query = result.data.query;

  next();
};