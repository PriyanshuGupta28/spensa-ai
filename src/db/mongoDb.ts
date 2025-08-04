import { MongoClient } from "mongodb";

const uri = process.env.DATABASE_URL!;
const client = new MongoClient(uri);
await client.connect();
export const db = client.db();
