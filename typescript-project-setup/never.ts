function generateError(message: string, code: number): never {
    throw {
        message,
        code
    }
}

generateError('error occurred', 500);