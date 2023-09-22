class ApiError extends Error {
    constructor(message, statusCode = 400){
        super(message)
        this.statusCode = statusCode
    }
}

exports.ApiError = ApiError;