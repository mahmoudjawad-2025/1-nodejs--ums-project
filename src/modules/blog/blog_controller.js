import blogModel from '../../../db/models/blog_model.js';
import UserModel from '../../../db/models/user_model.js';
import GlobalError from '../../utils/global_error.js';

export const getAllBlogs = async (req, res, next) => {

    const blogs = await blogModel.findAll({
        attributes: ['id', 'title'],
        include: {
            model: UserModel,
            attributes: ['id', 'username'],
        }
    });
    return res.status(200).json(blogs);

}


export const createBlog = async (req, res, next) => {

    const { title, description } = req.body;
    const blog = await blogModel.create({ title, description, UserId: req.id });
    return res.status(201).json({ message: "blog created successfully", blog });

}


export const getDetails = async (req, res, next) => {
    const { id } = req.params;
    const blog = await blogModel.findByPk(id);

    if (blog == null) {
        return next(new GlobalError("blog not found", 404));
    }

    return res.status(200).json({ message: "success", blog });
}