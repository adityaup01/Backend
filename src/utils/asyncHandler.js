// method 2 

const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export {asyncHandler}




// const asyncHandler = () => {}
// const asyncHandler = (fun) => () => {}
// const asyncHandler = (fun) => async () => {}




    // method 1 try catch method   higher function hai ye


    // const asyncHandler = (fn) => async (req, res, next) => {
    //     try {
    //         await fn(req, res, next)
    //     } catch (error) {
    //         res.status(err.code || 500).json({
    //             success: false,
    //             message: err.message
    //         })
    //     }
    // }

