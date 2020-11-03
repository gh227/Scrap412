import nextConnect from 'next-connect';
import middleware from '../../../middlewares/middleware';
import apimiddleware from '../../../middlewares/apimiddleware'
import cors from 'cors'

const handler = nextConnect();

handler.use(apimiddleware).use(cors({origin:process.env.HOST, HttpOnly:true})).use(middleware);


handler.get(async (req, res) => {
    //console.log(req)
    const comment = await req.db.collection('comments').find({post_id:req.url.toString().split('/')[3]}).toArray()
    
     res.json({comment})
    
});

export default handler;