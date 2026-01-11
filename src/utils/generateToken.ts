import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;
const JWT_EXPIRE = process.env.JWT_EXPIRE || '30d';

export const generateToken = (id: string): string => {
  return jwt.sign({ id } as JwtPayload, JWT_SECRET, { expiresIn: JWT_EXPIRE } as SignOptions);
};

export const verifyToken = (token: string): JwtPayload => {
  return jwt.verify(token, JWT_SECRET) as JwtPayload;
};
