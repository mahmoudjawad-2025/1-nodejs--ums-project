import { sendEmail } from '../../utils/email_service.js';
import UserModel from '../../../db/models/user_model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { registerSchema, loginSchema } from './auth_validation.js';
import GlobalError from '../../utils/global_error.js';

export const registerUser = async (req, res, next) => {

    const { userName, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
    await UserModel.create({ userName, email, password: hashedPassword });

    const html = '<div><h2>new user</h2><p> welcome ' + userName + ' </p></div>';
    await sendEmail(email, "welcome", html);

    return res.status(201).json({ message: "user created successfully" });

}




export const loginUser = async (req, res, next) => {

    const { email, password } = req.body;

    const result = loginSchema.validate({ email, password }, { abortEarly: false });
    if (result.error) {
        return next(new GlobalError("validation error", 400));
    }
    const user = await UserModel.findOne({
        where: { email: email }
    });
    if (user == null) {
        return next(new GlobalError("invalid email", 404));
    }
    const check = await bcrypt.compareSync(password, user.password);
    if (check == false) {
        return next(new GlobalError("invalid password", 400));
    }
    const token = jwt.sign({ id: user.id, name: user.userName, role: user.role }, process.env.JWT_SECRET);
    return res.status(200).json({ message: "login successful", token });
}