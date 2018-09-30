// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });


  //Challenge
  // db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5bb08c5d939b812490af5724")
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  //client.close();
});
