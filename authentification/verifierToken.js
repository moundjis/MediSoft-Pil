import jwt from "jsonwebtoken";

export const verifierToken = async (req, res, next) => {
  // 1. Récupérer le token d'authentification
  const bearerToken = req.headers.authorization;

  // 2. Vérifier la présence et le format du token
  if (!bearerToken || !bearerToken.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Format de token invalide ou manquant." });
  }

  // 3. Extraire le token sans la partie Bearer
  const token = bearerToken.split(" ")[1];

  try {
    // 4. Vérifier le token
    const payload = await jwt.verify(token, process.env.JWT_SECRET);

    // 5. Ajouter le payload à la requête pour un usage ultérieur
    req.user = payload;

    // 6. Si tout est OK, appeler la fonction suivante
    next();
  } catch (error) {
    // 7. Gérer les erreurs spécifiques
    let message = "Token invalide.";
    if (error.name === "TokenExpiredError") {
      message = "Token expiré.";
    } else if (error.name === "JsonWebTokenError") {
      message = "Token malformé.";
    }

    return res.status(401).json({ message });
  }
};
