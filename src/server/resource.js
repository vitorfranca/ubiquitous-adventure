import app from './server';
import db from './db';

var self = {
  create: function(name) {

    // List
    app.get(`/api/${name.toLowerCase()}`, (req, res) => {
      db.find(name, {})
        .then((items) => { res.send(items) })
        .catch((err) => { throw err });
    });

    // Get
    app.get(`/api/${name.toLowerCase()}/:_id`, (req, res) => {
      db.find(name, req.params)
        .then((items) => { res.send(items) })
        .catch((err) => { throw err });
    });

    // Create
    app.post(`/api/${name.toLowerCase()}`, (req, res) => {
      req.body.createdAt = Date.now();
      req.body.updatedAt = Date.now();
      db.insert(name, req.body)
        .then((data) => { res.send(data); })
        .catch((err) => { throw err });
    });

    // Remove
    app.delete(`/api/${name.toLowerCase()}/:_id`, (req, res) => {
      db.remove(name, req.params)
      .then((data) => { res.send(data); })
      .catch((err) => { throw err });
    });

    // Update
    app.put(`/api/${name.toLowerCase()}/:_id`, (req, res) => {
      req.body.updatedAt = Date.now();
      db.update(name, req.params, req.body)
        .then((data) => { res.send(data); })
        .catch((err) => { throw err });
    });

  }
};

export default self;
