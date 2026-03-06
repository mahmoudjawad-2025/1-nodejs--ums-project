import UserModel from '../../../db/models/user_model.js';
import GlobalError from '../../utils/global_error.js';

export const getUsers = async (req, res, next) => {

    const users = await UserModel.findAll({
        attributes: ['id', 'username', 'email']
    });
    return res.status(200).json(users);

}


export const deleteUser = async (req, res, next) => {

    const { id } = req.params;
    const user = await UserModel.findByPk(id);

    if (user == null) {
        return next(new GlobalError("user not found", 404));
    }

    await UserModel.destroy({
        where: { id }
    });

    return res.status(200).json({ message: "user deleted successfully" });

}

export const uploadProfilePic = async (req, res, next) => {
    // const { id } = req.params;
    // const user = await UserModel.findByPk(id);

    // if (user == null) {
    //     return next(new GlobalError("user not found", 404));
    // }

    // const { secure_url } = await cloudinary.uploader.upload(req.file.path);
    // user.profilePic = secure_url;
    // await user.save();

    // return res.status(200).json({ message: "profile picture uploaded successfully", profilePic: secure_url });
}