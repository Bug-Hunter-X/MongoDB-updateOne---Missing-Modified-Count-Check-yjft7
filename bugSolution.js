```javascript
const { MongoClient } = require('mongodb');

const uri = "YOUR_MONGODB_CONNECTION_STRING";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('myDatabase');
    const collection = database.collection('myCollection');

    // Correct use of updateOne with error handling
    const updatedDocument = await collection.updateOne({ name: 'John Doe' }, { $set: { age: 30 } });
    console.log(updatedDocument);
    if (updatedDocument.modifiedCount === 0) {
      console.log('No document was updated.  Consider alternative actions.');
    }
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
```