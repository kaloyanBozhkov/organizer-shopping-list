import crypto from 'crypto'

export const getPasswordHashSalt = (password: string) => {
    const salt = crypto.randomBytes(16).toString('hex'),
        hash = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString('hex')
    return { hash, salt }
}

export const validatePassword = (password: string, salt: string, hash: string) => {
    const calculatedHash = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`)
    return calculatedHash === hash
}
