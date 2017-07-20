const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const ObjectId = mongo.ObjectID;
const mongoUrl = require('../config').mongoUrl;

const connect = () => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(mongoUrl, (err, db) => {
      if(err) reject(err);
      else resolve(db);
    });
  });
};

const getCollection = (collectionName) => {
  return new Promise((resolve, reject) => {
    connect()
      .then((db) => {
        db.collection(collectionName, (err, collection) => {
          if(err) reject(err);
          else resolve(collection);
        });
      }).catch((err) => { reject(err); });
  });
};

var self = {
  find: function(collectionName, query) {
    return new Promise((resolve, reject) => {
      return getCollection(collectionName).then((collection) => {
          if(query && query._id) query._id = ObjectId(query._id);
          collection.find(query || {}).toArray((err, items) => {
            if(err) reject(err);
            else resolve(items);
          });
        }).catch((err) => { reject(err); });
    });
  },

  insert: function(collectionName, data) {
    return new Promise((resolve, reject) => {
      return getCollection(collectionName).then((collection) => {
        resolve(collection.insertOne(data));
      }).catch((err) => { reject(err); });
    });
  },

  remove: function(collectionName, query) {
    return new Promise((resolve, reject) => {
      return getCollection(collectionName).then((collection) => {
        if(query && query._id) query._id = ObjectId(query._id);
        resolve(collection.deleteOne(query));
      }).catch((err) => { reject(err); });
    });
  },

  update: function(collectionName, query, data) {
    return new Promise((resolve, reject) => {
      return getCollection(collectionName).then((collection) => {
        if(query && query._id) query._id = ObjectId(query._id);
        resolve(collection.findOneAndUpdate(
          query,
          { $set: data },
          { returnOriginal: false }
        ));
      }).catch((err) => { reject(err); });
    });
  }
};

export default self;
