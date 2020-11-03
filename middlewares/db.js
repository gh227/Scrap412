import { MongoClient } from 'mongodb'


const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
 
  try{
    if (!client.isConnected()) await client.connect();
  }
  catch(err){
    console.log(err)
  }
  
 
  req.dbClient = client;
  req.db = client.db(process.env.DB_NAME);

  return next();
}

export default database
