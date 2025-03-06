import jwt from "jsonwebtoken";
import authConfig from "../../config/auth";

function authMiddleware(req, res, next) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({ error: "Token not provided" });
  }

  const tokenParts = authToken.split(" ");
  if (tokenParts.length !== 2) {
    return res.status(401).json({ error: "Token mal formatado" });
  }
  const token = tokenParts[1];

  try {
    const decoded = jwt.verify(token, authConfig.secret);
    req.userId = decoded.id;
    req.userName = decoded.name;
} catch (err) {
    return res.status(401).json({ error: "Token invalid" });
}
return next();
}

export default authMiddleware;
