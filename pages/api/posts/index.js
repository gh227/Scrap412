import nextConnect from 'next-connect';
import { nanoid } from 'nanoid';
import middleware from '../../../middlewares/middleware';
import cors from 'cors'

const handler = nextConnect();





handler.use(cors({methods:'POST'})).use(middleware);

handler.get(async (req, res) => {

  const posts = await req.db
    .collection('posts')
    .find({})
    .sort({createdAt:-1})
    .toArray();
    //console.log(req.headers)
  res.send({posts})
});

handler.post(async (req, res) => {
    
  /*if (!req.user) {
    return res.status(401).send('unauthenticated');
  }*/

  const { phoneNumber, code} = req.body;

  //if (!content) return res.status(400).send('You must write something');

  const post = {
    _id: nanoid(),
    phoneNumber,
    code,
    createdAt: new Date(),
    updatedAt:''
  };

  await req.db.collection('posts').insertOne(post);
  return res.send(post);
});

handler.put( async(req, res)=>{
  
  const {phoneNumber, code} = req.body;
  
    const myQuery = {phoneNumber:phoneNumber};
    const updateValues = {$set:{ 
    phoneNumber,
    code,
    updatedAt:new Date(),
    }};

    await req.db.collection("posts").updateOne(myQuery, updateValues, function(err, res) {
      if (err) throw err;
      
    });
  res.send('welcome update')
})

handler.delete(async(req, res)=>{
  const {post_id} = req.body;

  await req.db.collection('posts').deleteOne({_id:post_id}, (err, obj)=>{
      if(err) throw err;
    
  });
  res.send("sucessfull");
})



export default handler;
