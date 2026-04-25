import jwt from "jsonwebtoken"
import env from "../config.js"
import ApiError from "../utils/ApiError.js"

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return next(new ApiError(401, "Authorization token is required"))
  }

  const token = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : authHeader

  if (!token) {
    return next(new ApiError(401, "Invalid authorization token format"))
  }

  try {
    const decoded = jwt.verify(token, env.jwt_secret)

    if (!decoded?.username) {
      return next(new ApiError(401, "Token payload does not contain username"))
    }

    req.username = decoded.username
    return next()
  } catch (error) {
    return next(new ApiError(401, "Invalid or expired token"))
  }
}

export default authMiddleware
