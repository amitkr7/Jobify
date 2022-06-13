import jwt from 'jsonwebtoken';
import { UnauthenticatedError } from '../errors/index.js';

UnauthenticatedError;

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnauthenticatedError('Authentication Failed');
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
  } catch (error) {
    throw new UnauthenticatedError('Authentication Failed');
  }
  next();
};

export default auth;
