import multer from 'multer';

function fileUpload() {
    const storage = multer.diskStorage({
        destination: (req, res, cb) => {
            cb(null, 'media/uploads');
        },
        filename: (req, file, cb) => {
            console.log(file);
            cb(null, file.originalname);
        }
    });

    function fileFilter(req, file, cb) {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb("invalid format", false);
        }
    }

    const upload = multer({ storage });

    return upload;
}

export default fileUpload;


// ------------------------------------------------------------------------------------  
// apload files to seperate server here we use "cloudinary", bring data from their site


// cloudinary.js
/*
import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
    cloud_name: 'dhdh8lq2i',
    api_key: 'your api key',
    api_secret: 'your api secret'
});
export default cloudinary;

*/


// upload.js
/*
export function fileUploadCloudinarySeperateServer() {
    function fileFilter(req, file, cb) {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb("invalid format", false);
        }
    }
    const upload = multer({ storage });
    return upload;
}
*/


// router.js
/*
router.put('/:id', fileUpload().single('image'), async (req, res) => {
    const { id } = req.params;
    const user = await UserModel.findByPk(id);
    
    if (user == null) {
        return next(new GlobalError("user not found", 404));
    }

    const { secure_url } = await cloudinary.uploader.upload(req.file.path);
    user.profilePic = secure_url;
    await user.save();

    return next(new GlobalError("user profile picture updated successfully", 200));
});
*/
