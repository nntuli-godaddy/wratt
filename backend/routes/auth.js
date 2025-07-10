import express from 'express'
import { v4 as uuidv4 } from 'uuid'
import { docClient } from '../config/aws.js'
import dotenv from 'dotenv'
import { QueryCommand, PutCommand, GetCommand, UpdateCommand, ScanCommand} from '@aws-sdk/lib-dynamodb'
import bcrypt from 'bcrypt'
import { verifyToken, generateToken } from '../middleware/verifyToken.js'


dotenv.config()
const router = express.Router()



router.post('/register', async (req, res) => {

    try {

        const { firstName, lastName, email, password } = req.body

        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ message: 'All fields must be entered'})
        }


        const userId = uuidv4()
        const hashedPassword = await bcrypt.hash(password, 10)

        const params = {
            TableName: process.env.CART_USER_TABEL,
            Item: {
                userId: userId,
                firstName: firstName,
                lastName:lastName,
                email: email,
                password: hashedPassword,
            }
        }

        await docClient.send(new PutCommand(params))

        const token = generateToken(userId, email)

        res.status(201).json({ 
            message: 'User created successfully',
            token: token,
            user: {
                userId: userId,
                email: email
            }
        })


    }
    catch (error) {
        console.log('Full error:', error);
        res.status(400).json({ message: 'User not created'})
        console.log(error.message)
    }


})


router.post('/login', async (req, res) => {

    try {

        const { email, password } = req.body

        const params = {
            TableName: process.env.USERS_TABLE,
            FilterExpression: 'email = :email',
            ExpressionAttributeValues: {
                ':email' : email
            }
        }

        const response = await docClient.send(new ScanCommand(params))

        const user = response.Items?.[0]

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password'})
        }
        
        const validPassword = await bcrypt.compare(password, user.password)

        if (!validPassword) {
            return res.status(401).json({ message: 'Invalid password'})
        }

        const token = generateToken(user.userId, user.email)

        res.status(200).json({
            message: 'Login successful',
            token: token,
            user: {
                userId: user.userId,
                email: user.email
            }
        })
    }
    catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: 'Issue logging in'})
    }


})


/*

sarah shit

{
    "message": "User created successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxZjI3NTM2MS1kYTVhLTQ5MzEtODQ5Yi04ODY1Y2I1M2ZiYzYiLCJlbWFpbCI6InNhcmFoQHRlc3QuY29tIiwiaWF0IjoxNzUyMTA1MjUyLCJleHAiOjE3NTI3MTAwNTJ9.rLQcK2ytHQLGffVWDzK8UsI_ZoAVYWseoORT2zI06I0",
    "user": {
        "userId": "1f275361-da5a-4931-849b-8865cb53fbc6",
        "email": "sarah@test.com"
    }
}
 */


export default router