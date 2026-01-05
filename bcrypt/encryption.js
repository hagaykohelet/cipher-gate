import bcrypt from 'bcrypt'


export async function hashPassword(text, rounds = 10) {
    const hashPassword = await bcrypt.hash(text, rounds)
    return hashPassword
}



export async function verifyPassword(text, hashPassword) {
    const verify = await bcrypt.compare(text, hashPassword)
    return verify
}

