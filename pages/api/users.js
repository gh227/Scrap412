import nextConnect from 'next-connect';
import isEmail from 'validator/lib/isEmail';
import normalizeEmail from 'validator/lib/normalizeEmail';
import bcrypt from 'bcryptjs';
import { nanoid } from 'nanoid';
import middleware from '../../middlewares/middleware';
import { extractUser } from '../../lib/api-helper';
import cors from 'cors'

const handler = nextConnect();

handler.use(middleware)

handler.get(async(req, res)=>{
    console.log('request :' , req.headers["content-type"])
    if(req.headers('x-token') == 'ifactonews'){
        res.send(req.db)}
        else{
            res.send("unauthorized")
        }
        res.send('working')
});



export default handler;
