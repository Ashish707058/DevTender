const {MongoClient} = require('mongodb');

// const uri = "mongodb+srv://ashishmishra707058_db_user:Ashish@0816@ashidev.wonltfj.mongodb.net/?appName=AshiDev";

const uri = 'mongodb+srv://ashishmishra707058_db_user:manish@testing.6jihrdb.mongodb.net/';
const client = new MongoClient(uri);
const databaseName = "testing";

async function main() {
   
        await client.connect();
        console.log("Connected to MongoDB");
        const db = client.db(databaseName);
        const collection = db.collection('User');
        // finding all documents in the collection
        const findResult = await collection.find({}).toArray();
        console.log('Found documents =>', findResult);

        const data={
            name:"Ashish",
            age:"22",
            city:"delhi"
        }
        const insertResult = await collection.insertMany([data]);
        console.log('Inserted documents =>', insertResult);
            
         return "Done.";
}
 main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());

 

module.exports = { main, client };