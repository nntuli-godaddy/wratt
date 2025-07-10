import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1] 
    
    if (!token) {
        return res.status(401).json({ message: 'Token was not provided' })
    }
    
    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded 
        next()

    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' })
    }
}

const generateToken = (userId, email) => {
    return jwt.sign(
        { userId, email }, 
        process.env.JWT_SECRET, 
        { expiresIn: '7d' }
    )
}

export { verifyToken, generateToken}

