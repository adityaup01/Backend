class ApiResponse {
    constructor(statusCode, data, message = "Siuccess") {
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}