import jwt from "jsonwebtoken";

export const authUser = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.json({ success: false, message: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.json({ success: false, message: "Invalid token" });
  }
};

export default authUser;
