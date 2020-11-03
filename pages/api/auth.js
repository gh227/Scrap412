import nextConnect from 'next-connect';
import middleware from '../../middlewares/middleware';
import apimiddleware from '../../middlewares/apimiddleware'
import passport from '../../lib/passport';
import { extractUser } from '../../lib/api-helper';
import cors from 'cors'

const handler = nextConnect();


handler.use(apimiddleware).use(cors({origin:process.env.HOST, HttpOnly:true})).use(middleware);

handler.post(passport.authenticate('local'), (req, res) => {
    res.json({ user: extractUser(req) });
  });
  
  handler.delete((req, res) => {
    req.logOut();
    res.status(204).end();
  });


export default handler;
