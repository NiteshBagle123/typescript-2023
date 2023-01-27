function generateError(message, code) {
    throw {
        message: message,
        code: code
    };
}
generateError('error occurred', 500);
