import { MongoClient, Db, ServerApiVersion } from 'mongodb';

let cachedClient: MongoClient | null = null 
let cachedDb: Db | null = null 

export async function connectToDb() {
  if(cachedClient && cachedDb){
    return {client: cachedClient, db: cachedDb}
  }
  const uri = `mongodb://127.0.0.1:27017`;

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  await client.connect();
  
  cachedClient = client
  cachedDb = client.db('linkedln-next-project')

  return {client: cachedClient, db: cachedDb}
}