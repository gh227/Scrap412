import nextConnect from 'next-connect'
import db from './db'
import session from './session'
import passport from '../lib/passport';

const middleware = nextConnect();

middleware.use(db)

export default middleware;