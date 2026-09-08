import jwt from 'jsonwebtoken';

export const verifyJWT = (req: any, res: any, next: any) => {
  const authHeaders = req.headers.authorization; // avy any amin'ny react
  if (!authHeaders)
    return res
      .status(403)
      .send({ message: 'Aucun token fourni!', recomm: 'Connectez-vous!' }); // 403 Forbidden

  const token = authHeaders.split(' ')[1]; // "Bearer token" no endriny, ka mila esorina ny "Bearer" sy ny "token

  try {
    const decoded = jwt.verify(token, {
      algorithms: ['RS256'],
    });

    req.user = decoded; // raha mila ny user id
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token invalide!' }); // 401 Unauthorized
  }
};

export default verifyJWT;
