```javascript
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db('myDatabase');
    const collection = database.collection('myCollection');

    //Incorrect use of updateOne leading to potential issues
    const updatedDocument = await collection.updateOne({ name: 'John Doe' }, { $set: { age: 30 } });
    console.log(updatedDocument);
    if (!updatedDocument.modifiedCount) { 
        // Handle the case where no document was modified
      console.log('No document was updated.');
    }
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```