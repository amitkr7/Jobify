import jwt from 'jsonwebtoken';
import { UnauthenticatedError } from '../errors/index.js';

UnauthenticatedError;

const auth = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    throw new UnauthenticatedError('Authentication Invliad');
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const testUser = payload.userId === '63ac84798aed3c4f2df97c02';
    req.user = { userId: payload.userId, testUser };
    next();
  } catch (error) {
    throw new UnauthenticatedError('Authentication Failed');
  }
};

export default auth;
