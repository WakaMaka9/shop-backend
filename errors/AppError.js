class AppError extends Error {
    constructor(status, message) {
        super()
        this.status = status
        this.message = message
    }

    static badRequest(message) {
        return new AppError(400, message)
    }

    static internalServerError(message) {
        return new AppError(500, message)
    }

    static notFound(message) {
        return new AppError(404, message)
    }

    static forbidden(message) {
        return new AppError(403, message)
    }
}

export default AppError