export const asyncHandler = (func) => {
    return async (req, res, next) => {
        return await func(req, res, next);

    };
};

export default asyncHandler;