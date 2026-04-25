import jwt from "jsonwebtoken"
import { prisma } from "../config/db.js";
//import { primsa } from "../config/db.js"


// read the token and check is valid
export const autheMiddleware = async (req, res, next) => {
    console.log("Auth middleware reached");

    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer") ){
        token = req.headers.authorization.split(" ")[1];

    } else if (req.cookie?.jwt){
        token = req.cookie.jwt
    }

    if (!token) {
        return res.status(401).json({error:"Not authorized, no token provided"})
    }

    try {
        //verify the token is valid and extract user id
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await prisma.uSER.findUnique({
            where: {id: decoded.id}
        });
        if (!user){
            return res.status(401).json({error:"user no longer exists"})
        }
        req.user = user
        next()

    } catch (err) {
        return res.status(401).json({error:"Not authorized, token failed"})
    }

}