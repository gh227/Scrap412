import crypto from 'crypto';
import sgMail from '@sendgrid/mail';
import nextConnect from 'next-connect';
import middleware from '../../../../middlewares/middleware';
import apimiddleware from '../../../../middlewares/apimiddleware'
import cors from 'cors'

const handler = nextConnect();

handler.use(apimiddleware).use(cors({origin:process.env.HOST, HttpOnly:true})).use(middleware);


handler.get((req, res)=>{res.send("working")})



export default handler;
