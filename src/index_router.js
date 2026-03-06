import { connectionDB } from '../db/connection.js';
import userRouter from './modules/user/user_router.js';
import authRouter from './modules/auth/auth_router.js';
import blogRouter from './modules/blog/blog_router.js';

const initApp = (app, express) => {
    connectionDB(); 
    app.use(express.json());
    app.use('/users',userRouter);
    app.use('/auth',authRouter);
    app.use('/blogs',blogRouter);
    app.use((err, req, res, next) => {
        return res.status(err.statusCode || 500).json({ message: err.message });
    });

    app.get('/', (req, res) => {
        return res.status(200).json({ message: "Welcom !" });
    });
    app.get('*path', (req, res) => {
        return res.status(404).json({ message: "page not found" });
    });
}

export default initApp;