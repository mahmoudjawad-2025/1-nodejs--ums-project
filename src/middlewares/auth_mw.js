import jwt from 'jsonwebtoken';
import GlobalError from '../utils/global_error.js';

const auth = () => {
    return (req, res, next) => {
        const { token } = req.headers;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded.role !== 'admin') {
            return next(new GlobalError("you are not authorized to access this route", 403));
        }
        req.id = decoded.id;
        next();
    };
}

export default auth;