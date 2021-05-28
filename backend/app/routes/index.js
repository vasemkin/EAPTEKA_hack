const axios = require('axios');
const path = require('path');
var appRoot = require('app-root-path');
const User = require("./models.js");

const index = async function (app, db) {

    app.get('/api/list_users', (req, res) => {

        User.find({}, function(err, result) {
            if (err) {
              console.log(err);
            } else {
              res.json(result);
            }
        });

    });

    app.post('/api/register', (req, res) => {

        // schema:
        // uuid: string
        // type: string

        const newUser = new User({
            uuid: req.body.uuid,
            type: req.body.type
        });

        newUser.save(function (err) {
            if (err) return ;
            // saved!

            res.json({
                "status" : "ok"
            });
          });
          

    });
      

}

module.exports = index;