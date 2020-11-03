import nextConnect from 'next-connect';
import { nanoid } from 'nanoid';
import middleware from '../../../middlewares/middleware';
import cors from 'cors'

const handler = nextConnect();





handler.use(cors({methods:'POST'})).use(middleware);
console.log('hit posts')
handler.get(async (req, res) => {
const urlArr = req.url.split('/');
const phone = urlArr[urlArr.length-1]

  const posts = await req.db
    .collection('posts')
    .findOne({phoneNumber:phone}, { projection: { _id: 0, phoneNumber: 1, code: 1 } })
    //.toArray();
    console.log(posts);
    //console.log(req.headers)
  res.send({posts})
});
//.sort({createdAt:-1})
    
export default handler;