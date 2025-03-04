// 1.Importer jwt
import jwt from "jsonwebtoken";
 
export const verifierToken = (req, res, next) => {
  // 2. Recuperer du token
  const bearerToken = req.headers.authorization;
 
  // 3. Verifier de la presence du token
  if (!bearerToken)
    return res.status(401).json({ message: "Mais vous etes pas connecte!" });
 
  // 4. Recuperer le token sans la partie Bearer
  const token = bearerToken.split(" ")[1];
 
  jwt.verify(token, process.env.CODE_SECRET, (error, payload) => {
    if (error) return res.status(401).json({ message: error.message });
 
    next();
  });
};