import ApiError from "../utils/ApiError.js";

const validateRequest = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);

  if (!result.success) {
    return next(
      new ApiError(400, "Invalid request body", [
        result.error.flatten().fieldErrors,
      ]),
    );
  }

  req.body = result.data;
  return next();
};

export default validateRequest;
