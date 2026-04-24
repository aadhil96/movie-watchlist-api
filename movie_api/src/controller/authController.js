import {prisma} from "../config/db.js"

const register = async (req, res) => {
    const {name , email, password} = req.body;

    const userExist = await prisma.uSER.findUnique({
        where: {email:email},
    })

    if (userExist){
        return re.status(400)
               .json({error:"User already  with this email"})
    }

    

    res.json(body)
}

export {register};