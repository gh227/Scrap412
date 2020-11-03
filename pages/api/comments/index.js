import nextConnect from 'next-connect';
import { nanoid } from 'nanoid';
import middleware from '../../../middlewares/middleware';
import apimiddleware from '../../../middlewares/apimiddleware'
import cors from 'cors'

const handler = nextConnect();

handler.use(apimiddleware).use(cors({origin:process.env.HOST, HttpOnly:true})).use(middleware);



handler.post(async (req, res) => {
  if (!req.user) {
    return res.status(401).send('unauthenticated');
  }
  const { post_id, comment} = req.body;

  if (!comment) return res.status(400).send('You must write something');

  const comments = {
    _id: nanoid(),
    post_id,
    comment,
    createdAt: new Date(),
    creatorId: req.user._id,
  };

  await req.db.collection('comments').insertOne(comments);
  return res.status(201).json(comments);
});

export default handler;

