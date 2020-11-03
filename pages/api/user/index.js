import {extractUser} from '../../../lib/api-helper'
import nextConnect from 'next-connect'
import middleware from '../../../middlewares/middleware'
import apimiddleware from '../../../middlewares/apimiddleware'
import cors from 'cors'

const handler = nextConnect();


handler.use(apimiddleware).use(cors({origin:process.env.HOST, HttpOnly:true})).use(middleware);


handler.get(async (req, res)=>res.json({user:extractUser(req)}));

export const config = {
    api: {
      bodyParser: false,
    },
  };

export default handler